"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  PlayCircle,
  FileText,
  Video,
  Link2,
  BookOpen,
  ChevronRight,
  Plus,
  MoreVertical,
  Pencil,
  Copy,
  Trash2,
  CardSim,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ModuleForm from "@/components/dashbaord/course/module/ModuleForm";
import LessonForm from "@/components/dashbaord/course/lesson/LessonForm";
import useGetModule from "@/hooks/useGetModule";
import { useParams } from "next/navigation";
import { useCallback, useState } from "react";

export default function ModuleDetail() {
  const params = useParams();
  const moduleId = String(params.moduleId);
  const [open, setOpen] = useState(false);
  const handleCloseDialog = useCallback(() => {
    setOpen(false);
  }, []);

  // const module = {
  //   id: 1,
  //   title: "Introduction to Skin Anatomy & Assessment",
  //   description:
  //     "Understand the structure of the skin, its layers, functions, and how to conduct thorough patient skin assessments.",
  //   estimatedTime: "2-3 hours",
  //   difficulty: "beginner",
  //   isPublished: true,
  //   lessons: [
  //     {
  //       id: 1,
  //       title: "Layers and Functions of the Skin",
  //       description:
  //         "Detailed breakdown of the epidermis, dermis, and hypodermis with clinical relevance.",
  //       duration: "22 min",
  //       type: "video",
  //       isPreview: true,
  //       completions: 658,
  //       content: {
  //         videoUrl: "https://example.com/skincare-anatomy.mp4",
  //         transcript:
  //           "In this lesson, we will explore the three layers of skin and their clinical importance...",
  //         resources: [
  //           {
  //             name: "Skin Anatomy Chart",
  //             url: "/resources/skin-chart.pdf",
  //             type: "file",
  //           },
  //           {
  //             name: "Dermatology Basics",
  //             url: "https://dermnetnz.org",
  //             type: "link",
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       id: 2,
  //       title: "Skin Assessment Techniques",
  //       description:
  //         "Learn step-by-step how to assess the skin, including color, texture, temperature, and abnormalities.",
  //       duration: "18 min",
  //       type: "video",
  //       isPreview: false,
  //       completions: 489,
  //       content: {
  //         videoUrl: "https://example.com/skin-assessment.mp4",
  //         transcript:
  //           "This lesson demonstrates hands-on techniques for professional skin assessment...",
  //         resources: [
  //           {
  //             name: "Skin Assessment Checklist",
  //             url: "/resources/assessment-checklist.pdf",
  //             type: "file",
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       id: 3,
  //       title: "Skin Types and Their Characteristics",
  //       description:
  //         "Understand the five basic skin types and how they influence care recommendations.",
  //       duration: "15 min",
  //       type: "video",
  //       isPreview: true,
  //       completions: 512,
  //       content: {
  //         videoUrl: "https://example.com/skin-types.mp4",
  //         transcript:
  //           "This lesson outlines characteristics of normal, oily, dry, combination, and sensitive skin...",
  //         resources: [
  //           {
  //             name: "Skin Type Chart",
  //             url: "/resources/skin-types.pdf",
  //             type: "file",
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       id: 4,
  //       title: "Skin Health Indicators & Common Concerns",
  //       description:
  //         "Identify signs of healthy vs. problematic skin, and early indicators of dermatologic issues.",
  //       duration: "19 min",
  //       type: "video",
  //       isPreview: false,
  //       completions: 431,
  //       content: {
  //         videoUrl: "https://example.com/skin-health.mp4",
  //         transcript:
  //           "Healthy skin has specific markers — tone, hydration, and resilience...",
  //         resources: [
  //           {
  //             name: "Skin Condition Photo Guide",
  //             url: "/resources/skin-condition-guide.pdf",
  //             type: "file",
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // };
  const { module, isLoading } = useGetModule(moduleId);
  return (
    <div className="p-6">
      {/* Module Header */}
      <header className="bg-gradient-to-r from-green-50 to-white border border-green-100 shadow-lg rounded-xl p-6 mb-8">
        <div className="flex items-start justify-between flex-wrap gap-4">
          {/* Left: Module Info */}
          <div className="flex items-start gap-4">
            {/* Icon Box */}
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-green-100">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>

            {/* Text Info */}
            <div>
              <div className="flex gap-4 ">
                <h1 className="text-2xl font-bold">{module?.title}</h1>
                <Badge variant="default"  
                    className="h-[20px] mt-2">{module?.status}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                <span className="font-medium">Estimated Time:</span> 2 hours •{" "}
                <span className="capitalize">{module?.status}</span>
              </p>
              <p className="text-sm text-gray-600 mt-1 max-w-xl">
                {module?.description}
              </p>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <Button
              onClick={() => setOpen(true)}
              size="sm"
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Lesson
            </Button>
            <Dialog
              open={open}
              modal={open}
              onOpenChange={() => setOpen(false)}
            >
              <DialogContent className="max-w-xl">
                <DialogHeader>
                  <DialogTitle>Create New Lesson</DialogTitle>
                  <DialogDescription>
                    Add a new Lesson to{" "}
                    <span className="font-medium">{module?.title}</span>.
                  </DialogDescription>
                </DialogHeader>
                <LessonForm moduleId={moduleId} onClose={handleCloseDialog} />
              </DialogContent>
            </Dialog>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuLabel>Manage Module</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => alert("Edit Module")}>
                  <Pencil className="mr-2 h-4 w-4 text-green-600" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => alert("Publish Module")}>
                  <CardSim className="mr-2 h-4 w-4 text-green-600" />
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
      </header>

      {/* Lessons List */}
      <div className="space-y-4 mt-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-green-800">
            Lessons in this module
          </h1>
        </div>

        {module?.lessons.length === 0 ? (
          <Card className="border-dashed border-2 border-muted-foreground/25 text-center py-16">
            <CardContent className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 h-20 w-20 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No lessons yet</h3>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Start building your module by adding your first lesson. Organize
                content into logical sections.
              </p>
              <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add First Lesson
              </Button>
            </CardContent>
          </Card>
        ) : (
          module?.lessons.map((lesson, index) => (
            <Link
              key={lesson.id}
              href={`/dashboard/courses/1/modules/1/lessons/${lesson.id}`}
              className="block"
            >
              <Card className="hover:shadow-md transition-shadow cursor-pointer ">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white text-sm font-semibold">
                        {index + 1}
                      </div>

                      <div>
                        <CardTitle className="text-lg flex items-center gap-2 ">
                          <Video className="h-4 w-4 text-green-500" />

                          {lesson.title}
                        </CardTitle>
                        <CardDescription className="mt-1 ">
                          {lesson.description}
                        </CardDescription>
                      </div>
                    </div>

                    <Badge variant="outline" className=" border-green-400">
                      {lesson?.duration}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="text-sm text-green-800">
                  <div className="flex items-center gap-2">
                    <PlayCircle className="h-4 w-4 " />
                    <p> 12 completions</p>
                  </div>

                  <div className="mt-3 space-y-1">
                    <div className="font-medium ">Resources:</div>
                    <ul className="list-disc list-inside text-sm ">
                      <li className="flex items-center gap-1">
                        <Link2 className="h-3 w-3" />
                        Study Online
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
