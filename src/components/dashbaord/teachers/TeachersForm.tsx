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
import axios from "axios";
import { Loader2 } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useGetCourses from "@/hooks/useGetCourses";
import useGetCoursesNames from "@/hooks/useGetCoursesNames";
import { Skeleton } from "@/components/ui/skeleton";
import http from "@/api";
import { Teacher } from "@/api/api";

const teacherSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(6, "Phone number must be valid"),
  dob: z.string().min(1, "Date of Birth is required"),
  specialization: z.string().min(1, "Speciality is required"),
  courseId: z.string().optional(),
});

type TeacherFormValues = z.infer<typeof teacherSchema>;

type TeachersFormProps = {
  teacher?: Teacher;
  onClose?: () => void;
};

function TeachersForm({ teacher, onClose }: TeachersFormProps) {
  const form = useForm<TeacherFormValues>({
    resolver: zodResolver(teacherSchema),
    defaultValues: {
      fullName: teacher?.user?.fullName ?? "",
      email: teacher?.user?.email ?? "",
      phone: teacher?.phone ?? "",
      dob: teacher?.user?.dob ?? "",
      courseId: String(teacher?.courses[0].id) ?? "",
      specialization: teacher?.specialization ?? "",
    },
  });

  const { coursesNames, isLoading } = useGetCoursesNames();

  const queryClient = useQueryClient();

  const { mutate: createTeacher, isPending: loading } = useMutation({
    mutationFn: http.teachers.teacherControllerCreateTeacher,
    onSuccess: () => {
      onClose?.();
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
    },
  });

  const { mutate: updateTeacher, isPending: loadingUpdate } = useMutation({
    mutationFn: async (data: any) =>
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/teachers/${data.id}`,
        data.data
      ),
    onSuccess: () => {
      onClose?.();
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
    },
  });

  const handleSubmit = async (data: any) => {
    if (teacher) {
      updateTeacher({ id: teacher.id, data } as any);
    } else {
      console.log("create teacher");
      createTeacher(data);
    }
  };

  if (isLoading) {
    return (
      <>
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  disabled={teacher ? true : false}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="specialization"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Specialization</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter the teacher's area of specialization"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+61 412 345 678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <div className="flex gap-2">
        
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="w-2/3">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="412 345 678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div> */}

        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="courseId"
          render={({ field }) => (
            <FormItem className="w-full ">
              <FormLabel>
                {teacher ? "Assigned Course" : "Assign a Course"}
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Assign any course from the  below courses " />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {coursesNames?.map((course, ind) => (
                    <SelectItem
                      key={`${course.id}-${course.title}`}
                      value={String(course?.id)}
                    >
                      {course.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={loading || loadingUpdate}
        >
          {loading || loadingUpdate ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : teacher ? (
            "Update Teacher"
          ) : (
            "Create Teacher"
          )}
        </Button>
      </form>
    </Form>
  );
}

export default React.memo(TeachersForm);
