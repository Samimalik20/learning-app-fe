import { Course } from "@/api/api";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Group } from "@/components/ui/Group";
import { Stack } from "@/components/ui/Stack";
import useGetCourses from "@/hooks/useGetCourses";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import {
  IconUser,
  IconMessageQuestion,
  IconDotsVertical,
  IconSettings2,
  IconPencil,
  IconNotification,
} from "@tabler/icons-react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Badge } from "lucide-react";
import Image from "next/image";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import router from "next/router";
import { useState, useCallback } from "react";
import CourseForm from "./CourseForm";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const [courseDetails, setCourse] = useState<Course | undefined>(undefined);
  const [courseId, setCourseId] = useState<number | undefined>(undefined);
  const [status, setStatus] = useState<string | undefined>(undefined);

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
      <Card key={course.id} className="flex flex-col h-full p-0">
        <CardHeader className="p-0">
          <div className="h-[180px] w-full overflow-hidden">
            <Image
              width={400}
              height={180}
              src={course.image.url}
              alt={course.title}
              className="w-full h-full object-cover rounded-t-md"
            />
          </div>
          <Stack gap="xs" className="px-[18px] pt-3">
            <CardTitle>{course.title}</CardTitle>
            <CardDescription>{course.description}</CardDescription>
          </Stack>
        </CardHeader>

        <CardContent className="mt-auto">
          <Group justify="between" fullWidth>
            <Group gap="md">
              <Group gap={"xs"}>
                <p className="text-sm ">0</p>
                <p className="text-sm text-muted-foreground">modules</p>
              </Group>
              <Group gap={"xs"}>
                <p className="text-sm ">0</p>
                <p className="text-sm text-muted-foreground">lessons</p>
              </Group>
            </Group>
            <Badge>{course.status}</Badge>
          </Group>
          <Group gap="md">
            <Group gap={"xs"}>
              <p className="text-sm ">0</p>
              <p className="text-sm text-muted-foreground">Students</p>
            </Group>
            <Group gap={"xs"}>
              <p className="text-sm ">{course.duration}</p>
              <p className="text-sm text-muted-foreground">Weeks</p>
            </Group>
          </Group>
        </CardContent>

        <CardFooter className="pb-2 mt-auto">
          <Group justify="between" fullWidth>
            <Group gap="md">
              <Group gap={1}>
                <IconUser size={16} />
                <p className="text-sm">
                  {course.teachers[0].user.fullName ? "" : "No teacher assigned"}
                </p>
              </Group>
              <Group gap={1}>
                <IconMessageQuestion size={16} />
                <p className="text-sm">0 questions</p>
              </Group>
            </Group>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <IconDotsVertical className="size-4 cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="min-w-56 rounded-lg"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    onClick={() => router.push(`/courses/${course.id}`)}
                  >
                    <IconSettings2 className="mr-1 size-4" />
                    Manage
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleOpenEditDialog(course)}
                  >
                    <IconPencil className="mr-1 size-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      handleOpenStatusModal(
                        course.id,
                        course.status === "published" ? "paused" : "published"
                      )
                    }
                  >
                    <IconNotification className="mr-1 size-4" />
                    {course.status === "published" ? "pause" : "publish"}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </Group>
        </CardFooter>
      </Card>

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
