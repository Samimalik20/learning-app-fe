"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Lesson } from "@/api/api";
import http from "@/api";

const lessonSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  duration: z.string().min(1, "Duration is required"),
});

type lessonFormValues = z.infer<typeof lessonSchema>;

type LessonFormProps = {
  moduleId: string;
  lesson?: Lesson;
  onClose?: () => void;
};

function lessonForm({ lesson, onClose, moduleId }: LessonFormProps) {
  const form = useForm<lessonFormValues>({
    resolver: zodResolver(lessonSchema),
    defaultValues: {
      title: lesson?.title ?? "",
      description: lesson?.description ?? "",
      duration: lesson?.duration ?? "",
    },
  });

  const queryClient = useQueryClient();

  const { mutate: createlesson, isPending: loading } = useMutation({
    mutationFn: http.lessons.lessonsControllerCreate,
    onSuccess: () => {
      onClose?.();
      queryClient.invalidateQueries({ queryKey: ["lessons"] });
    },
  });

  const { mutate: updatelesson, isPending: loadingUpdate } = useMutation({
    mutationFn: ({ id, data }: { id: number; data: any }) =>
      http.lessons.lessonsControllerUpdate(id, data),
    onSuccess: () => {
      onClose?.();
      queryClient.invalidateQueries({ queryKey: ["lessons"] });
    },
  });

  const handleSubmit = async (data: lessonFormValues) => {
    if (lesson) {
      updatelesson({
        id: lesson.id,
        data: data,
      });
    } else {
      const dataToSend = {
        ...data,
        moduleId: moduleId,
      };
      createlesson(dataToSend as any);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>lesson Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. Aesthetic Training Basics"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Short summary of the lesson"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration(in minutes)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="e.g 120" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={loading}>
          {loading || loadingUpdate ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : lesson ? (
            "Update lesson"
          ) : (
            "Add lesson"
          )}
        </Button>
      </form>
    </Form>
  );
}

export default React.memo(lessonForm);
