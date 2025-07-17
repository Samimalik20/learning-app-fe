"use client";
import { Course } from "@/api/api";
import CourseForm from "@/components/dashbaord/course/CourseForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Group } from "@/components/ui/Group";
import { Stack } from "@/components/ui/Stack";
import useGetCourses from "@/hooks/useGetCourses";

import {
  IconDotsVertical,
  IconMessageQuestion,
  IconNotification,
  IconPencil,
  IconUser,
  IconSettings2,
} from "@tabler/icons-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BookOpen, Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
export default function Page() {
  const router = useRouter();

  const [course, setCourse] = useState<Course | undefined>(undefined);
  const [courseId, setCourseId] = useState<number | undefined>(undefined);
  const [status, setStatus] = useState<string | undefined>(undefined);

  const { courses, isLoading } = useGetCourses();
  const [open, setOpen] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const handleOpenEditDialog = (course: Course) => {
    setCourse(course);
    setOpen(true);
  };

  const handleCloseDialog = useCallback(() => {
    setCourse(undefined);
    setOpen(false);
  }, []);

  const handleOpenStatusModal = (id: number, status: string) => {
    setCourseId(id);
    setStatus(status);
    setOpenConfirmModal(true);
  };
  const handleCloseStatusModal = () => {
    setCourseId(undefined);
    setStatus(undefined);
    setOpenConfirmModal(false);
  };
  const queryClient = useQueryClient();

  const handleUpdateStatus = async () => {
    updateCourse({
      id: courseId,
      data: {
        status: status,
      },
    });
  };
  const { mutate: updateCourse, isPending: loadingUpdate } = useMutation({
    mutationFn: async (data: any) =>
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/courses/${data.id}`,
        data.data
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      setOpenConfirmModal(false);
    },
  });

  return (
    <>
      <div className="p-4">
        <Group justify="between" fullWidth>
          <h1 className="text-xl font-bold">Courses</h1>
          <Button
            onClick={() => setOpen(true)}
            size={"sm"}
            className="bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Course
          </Button>
        </Group>

        <p>Here is the list of all courses.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {courses?.map((course, ind) => (
            <Card
              key={ind}
              className="flex flex-col h-full p-0 rounded-xl border border-green-200 bg-gradient-to-br from-white via-green-50 to-white hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="p-0">
                <div className="h-[180px] w-full overflow-hidden rounded-t-xl">
                  <Image
                    width={400}
                    height={180}
                    src={course.image.url}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>
                <Stack gap="xs" className="px-[18px] pt-3">
                  <CardTitle className="text-lg font-semibold">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {course.description}
                  </CardDescription>
                </Stack>
              </CardHeader>

              <CardContent className="mt-auto px-[18px]">
                <Group justify="between" fullWidth className="mb-2">
                  <Group gap="md">
                    <Group gap="xs">
                      <p className="text-sm font-medium text-green-700">0</p>
                      <p className="text-sm text-muted-foreground">modules</p>
                    </Group>
                    <Group gap="xs">
                      <p className="text-sm font-medium text-green-700">0</p>
                      <p className="text-sm text-muted-foreground">lessons</p>
                    </Group>
                  </Group>
                  <Badge
                    variant="outline"
                    className="text-green-700 border-green-400"
                  >
                    {course.status}
                  </Badge>
                </Group>

                <Group gap="md">
                  <Group gap="xs">
                    <p className="text-sm font-medium text-green-700">0</p>
                    <p className="text-sm text-muted-foreground">Students</p>
                  </Group>
                  <Group gap="xs">
                    <p className="text-sm font-medium text-green-700">
                      {course.duration}
                    </p>
                    <p className="text-sm text-muted-foreground">Weeks</p>
                  </Group>
                </Group>
              </CardContent>

              <CardFooter className="pb-3 px-[18px] mt-auto">
                <Group justify="between" fullWidth>
                  <Group gap="md">
                    <Group gap={1}>
                      <IconUser size={16} className="text-green-600" />
                      <p className="text-sm text-muted-foreground">
                        No teacher assigned
                      </p>
                    </Group>
                    <Group gap={1}>
                      <IconMessageQuestion
                        size={16}
                        className="text-green-600"
                      />
                      <p className="text-sm text-muted-foreground">
                        0 questions
                      </p>
                    </Group>
                  </Group>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <IconDotsVertical className="size-4 cursor-pointer text-muted-foreground hover:text-green-700 transition-colors" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      className="min-w-56 rounded-lg shadow-lg"
                      align="end"
                      sideOffset={4}
                    >
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          onClick={() =>
                            router.push(`/dashboard/courses/${course.id}`)
                          }
                          className="group"
                        >
                          <IconSettings2 className="mr-1 size-4 text-green-600 group-hover:text-green-700" />
                          <span className="group-hover:text-green-700">
                            Manage
                          </span>
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          onClick={() => handleOpenEditDialog(course)}
                          className="group"
                        >
                          <IconPencil className="mr-1 size-4 text-green-600 group-hover:text-green-700" />
                          <span className="group-hover:text-green-700">
                            Edit
                          </span>
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          onClick={() =>
                            handleOpenStatusModal(
                              course.id,
                              course.status === "published"
                                ? "paused"
                                : "published"
                            )
                          }
                          className="group"
                        >
                          <IconNotification className="mr-1 size-4 text-green-600 group-hover:text-green-700" />
                          <span className="group-hover:text-green-700">
                            {course.status === "published"
                              ? "Pause"
                              : "Publish"}
                          </span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>

                      <DropdownMenuSeparator />
                    </DropdownMenuContent>
                  </DropdownMenu>
                </Group>
              </CardFooter>
            </Card>
          ))}
        </div>

        {courses?.length === 0 && (
          <Card className="border-dashed border-2 border-muted-foreground/25 text-center py-16">
            <CardContent className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 h-20 w-20 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Start Creating Your Course
              </h3>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Build engaging learning experiences by adding modules, lessons,
                and interactive content to your course.
              </p>
              <Button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700" onClick={()=>setOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Create New Course
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      <Dialog open={open} modal={open} onOpenChange={() => setOpen(false)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add a Course</DialogTitle>
          </DialogHeader>
          <CourseForm onClose={handleCloseDialog} course={course} />
        </DialogContent>
      </Dialog>

      <Dialog
        open={openConfirmModal}
        modal={openConfirmModal}
        onOpenChange={() => handleCloseStatusModal()}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Change Course Status</DialogTitle>
          </DialogHeader>

          <div className="text-sm text-muted-foreground">
            Are you sure you want to change the status of this course?
          </div>

          <DialogFooter className="mt-4">
            <Button
              variant="outline"
              onClick={() => setOpenConfirmModal(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => handleUpdateStatus()}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
