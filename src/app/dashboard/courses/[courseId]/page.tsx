"use client";

import ModuleForm from "@/components/dashbaord/course/module/ModuleForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import {
  Users,
  Clock,
  BookOpen,
  Plus,
  PlayCircle,
  ChevronRight,
  MoreVertical,
  Pencil,
  CardSim,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useParams } from "next/navigation";
import useGetModules from "@/hooks/useGetModules";
import useGetCourse from "@/hooks/useGetCourse";
import { useCallback, useState } from "react";

export default function Page() {
  const params = useParams();
  const [open, setOpen] = useState(false);

  const courseId = String(params.courseId);
  const { course, isLoading: loading } = useGetCourse(courseId);
  const { modules, isLoading } = useGetModules(courseId);
  const handleCloseDialog = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className="flex-1 p-6 space-y-8 overflow-auto">
      {/* Header Section */}
      <Card className="hover:shadow-lg transition-shadow p-6 rounded-xl border border-green-200 bg-gradient-to-br from-white via-green-100 to-white">
        <div className="flex items-start justify-between gap-6">
          {/* Thumbnail or Icon Placeholder */}
          <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-green-200 flex items-center justify-center">
            <BookOpen className="h-10 w-10 text-green-700" />
          </div>

          {/* Course Info */}
          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold">{course?.title}</h1>
              <Badge variant="default">{course?.status}</Badge>
            </div>

            <p className="text-muted-foreground">{course?.description}</p>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mt-2">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-green-600" />
                <span>12 students</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-600" />
                <span>12</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-teal-600" />
                <span>0 lessons</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-start gap-2">
            <Button
              onClick={() => setOpen(true)}
              size={"sm"}
              className="bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Module
            </Button>

            {/* Manage Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuLabel>Manage Course</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => alert("Edit Module")}>
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => alert("Publish Module")}>
                  <CardSim className="mr-2 h-4 w-4" />
                  Publish
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => alert("Delete Module")}
                  className="text-red-600 focus:text-red-600"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Card>

      {/* Modules */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Modules</h2>
        {modules?.map((module, index) => (
          <Link
            key={module.id}
            href={`/dashboard/courses/${course?.id}/modules/${module.id}`}
            className="block"
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 flex items-center justify-center bg-green-600 text-white font-bold rounded-full">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex gap-2 items-center mb-1">
                        <CardTitle>{module?.title}</CardTitle>
                        <Badge>{module?.status}</Badge>
                      </div>
                      <CardDescription className="text-base">
                        {module.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />2 hours
                        </span>
                        <span className="flex items-center gap-1">
                          <PlayCircle className="h-3 w-3" />
                          {module.lessons.length} lessons
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}

        {modules?.length === 0 && (
          <Card className="border-dashed border-2 border-muted-foreground/25 text-center py-16">
            <CardContent className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 h-20 w-20 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No modules yet</h3>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Start shaping your course by adding your first module. Break
                down your content into structured, digestible parts.
              </p>
              <Button
                className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700"
                onClick={() => setOpen(true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add First Module
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      <Dialog open={open} modal={open} onOpenChange={() => setOpen(false)}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Create New Module</DialogTitle>
            <DialogDescription>
              Add a new module to <strong>{course?.title}</strong>.
            </DialogDescription>
          </DialogHeader>
          <ModuleForm courseId={courseId} onClose={handleCloseDialog} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
