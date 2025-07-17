"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
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
import { Course } from "@/api/api";

const courseSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  duration: z.string().min(1, "Duration is required"),
  price: z.string().min(1, "Price is required"),
  file: z.any().optional(),
});

type CourseFormValues = z.infer<typeof courseSchema>;

type CourseFormProps = {
  course?: Course;
  onClose?: () => void;
};

function CourseForm({ course, onClose }: CourseFormProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(
    course?.image.url ?? null
  );

  const form = useForm<CourseFormValues>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: course?.title ?? "",
      description: course?.description ?? "",
      duration: course?.duration ?? "",
      price: course?.price ?? "",
      file: undefined,
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("file", file);
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };
  const queryClient = useQueryClient();

  const { mutate: createCourse, isPending: loading } = useMutation({
    mutationFn: async (data: any) =>
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/courses`, data),
    onSuccess: () => {
      onClose?.();
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
  });

  const { mutate: updateCourse, isPending: loadingUpdate } = useMutation({
    mutationFn: async (data: any) =>
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/courses/${data.id}`,
        data.data
      ),
    onSuccess: () => {
      onClose?.();
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
  });

  const handleSubmit = async (data: CourseFormValues) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("duration", data.duration);
    formData.append("price", data.price);

    if (data.file instanceof File) {
      formData.append("file", data.file);
    }

    if (course) {
      updateCourse({
        id: course.id,
        data: formData,
      });
    } else {
      createCourse(formData);
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
              <FormLabel>Course Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Aesthetic Training" {...field} />
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
                  placeholder="Short summary of the course"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type="number" placeholder="e.g. 6" {...field} />
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
              <FormLabel>Duration (in weeks)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="e.g. 6" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormItem>
          <FormLabel>Course Image</FormLabel>
          <FormControl>
            <Input type="file" accept="image/*" onChange={handleImageChange} />
          </FormControl>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-2 h-32 w-full object-cover rounded-md border"
            />
          )}
        </FormItem>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading || loadingUpdate ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : course ? (
            "Update Course"
          ) : (
            "Add Course"
          )}
        </Button>
      </form>
    </Form>
  );
}

export default React.memo(CourseForm);
