"use client";
import { Teacher } from "@/api/api";
import TeachersForm from "@/components/dashbaord/teachers/TeachersForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Group } from "@/components/ui/Group";
import { Skeleton } from "@/components/ui/skeleton";
import getInitials from "@/hooks/getInitials";
import useGetTeachers from "@/hooks/useGetTeachers";

import {
  IconDotsVertical,
  IconNotification,
  IconPencil,
  IconUserCircle,
} from "@tabler/icons-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Calendar, Mail, Phone } from "lucide-react";
import { useCallback, useState } from "react";
export default function Page() {
  const [teacher, setTeacher] = useState<Teacher | undefined>(undefined);
  const [teacherId, setTeacherId] = useState<number | undefined>(undefined);
  const [status, setStatus] = useState<string | undefined>(undefined);

  const { teachers, isLoading } = useGetTeachers();
  const [open, setOpen] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const handleOpenEditDialog = (teacher: Teacher) => {
    setTeacher(teacher);
    setOpen(true);
  };

  const handleCloseDialog = useCallback(() => {
    setTeacher(undefined);
    setOpen(false);
  }, []);

  const handleOpenStatusModal = (id: number, status: string) => {
    setTeacherId(id);
    setStatus(status);
    setOpenConfirmModal(true);
  };
  const handleCloseStatusModal = () => {
    setTeacherId(undefined);
    setStatus(undefined);
    setOpenConfirmModal(false);
  };
  const queryClient = useQueryClient();

  const handleUpdateStatus = async () => {
    updateTeacher({
      id: teacherId,
      data: {
        status: status,
      },
    });
  };
  const { mutate: updateTeacher, isPending: loadingUpdate } = useMutation({
    mutationFn: async (data: any) =>
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/teachers/${data.id}`,
        data.data
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teachers"] });
      setOpenConfirmModal(false);
    },
  });

  if (isLoading) {
    return (
      <>
        <div className="flex flex-col space-y-3 p-4">
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
    <>
      <div className="p-4">
        <Group justify="between" fullWidth>
          <h1 className="text-xl font-bold">Teachers</h1>
          <Button onClick={() => setOpen(true)}>Add Teacher</Button>
        </Group>

        <p>Here is the list of all teachers.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {teachers?.map((teacher, ind) => (
            <div className="relative w-full max-w-sm mx-auto" key={ind}>
              {/* Top Header */}
              <div className="bg-gray-200 h-24 rounded-t-2xl p-4">
                <Group fullWidth justify="between">
                  <Badge>{teacher?.status}</Badge>
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
                        <DropdownMenuItem>
                          <IconUserCircle className="mr-1 size-4" />
                          Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                        onClick={() => handleOpenEditDialog(teacher)}
                        >
                          <IconPencil className="mr-1 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                        onClick={() =>
                          handleOpenStatusModal(
                            teacher.id,
                            teacher.status === "Active" ? "Blocked" : "Active"
                          )
                        }
                        >
                          <IconNotification className="mr-1 size-4" />
                          {teacher.status === "Active" ? "Block" : "Active"}
                         
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </Group>
              </div>

              {/* Card Body */}
              <Card className="relative -mt-8 bg-gray-100 rounded-2xl pt-14 pb-5 px-6 text-center shadow-md">
                {/* Avatar */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <div className="rounded-full border-4 border-white shadow-lg bg-white p-1">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={teacher?.user?.profile?.url} />
                      <AvatarFallback>
                        {getInitials(teacher?.user?.fullName)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {teacher?.user?.fullName}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {teacher?.specialization}
                  </p>
                </div>
                {/* <Group justify="center">
                <Badge className=" mb-3 bg-gray-300 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full inline-block">
                  15 Courses • 610 Students
                </Badge>
              </Group> */}
                <div className="flex justify-center">
                  <div className=" space-y-3 text-sm text-gray-700 text-left">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span>{teacher?.user?.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span>{teacher?.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span>{teacher.user?.dob}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={open} modal={open} onOpenChange={() => handleCloseDialog()}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{teacher?'Update':'Add'} a Teacher</DialogTitle>
          </DialogHeader>
          <TeachersForm onClose={handleCloseDialog} teacher={teacher} />
        </DialogContent>
      </Dialog>

      <Dialog
        open={openConfirmModal}
        modal={openConfirmModal}
        onOpenChange={() => handleCloseStatusModal()}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Change Teacher Status</DialogTitle>
          </DialogHeader>

          <div className="text-sm text-muted-foreground">
            Are you sure you want to change the status of this Teacher?
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
