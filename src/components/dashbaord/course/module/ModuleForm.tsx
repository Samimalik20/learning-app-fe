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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Course, Modules } from "@/api/api";
import http from "@/api";

const moduleSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
});

type ModuleFormValues = z.infer<typeof moduleSchema>;

type CourseFormProps = {
  courseId: string;
  module?: Modules;
  onClose?: () => void;
};

function ModuleForm({ module, onClose, courseId }: CourseFormProps) {
  const form = useForm<ModuleFormValues>({
    resolver: zodResolver(moduleSchema),
    defaultValues: {
      title: module?.title ?? "",
      description: module?.description ?? "",
    },
  });

  const queryClient = useQueryClient();

  const { mutate: createModule, isPending: loading } = useMutation({
    mutationFn: http.modules.modulesControllerCreate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["modules"] });
      onClose?.();
    },
  });

  const { mutate: updateModule, isPending: loadingUpdate } = useMutation({
    mutationFn: ({ id, data }: { id: number; data: any }) =>
      http.modules.modulesControllerUpdate(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["modules"] });
      onClose?.();
    },
  });

  const handleSubmit = async (data: ModuleFormValues) => {
    if (module) {
      updateModule({
        id: module.id,
        data: data,
      });
    } else {
      const dataToSend = {
        ...data,
        courseId: courseId,
      };
      createModule(dataToSend);
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
              <FormLabel>Module Title</FormLabel>
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
                  placeholder="Short summary of the module"
                  {...field}
                />
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
          ) : module ? (
            "Update Module"
          ) : (
            "Add Module"
          )}
        </Button>
      </form>
    </Form>
  );
}

export default React.memo(ModuleForm);
