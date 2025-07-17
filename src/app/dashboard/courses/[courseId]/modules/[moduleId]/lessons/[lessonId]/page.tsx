"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import {
  ArrowLeft,
  Eye,
  Save,
  Plus,
  GripVertical,
  X,
  MoreVertical,
  Pencil,
  Trash2,
  CircleDot,
} from "lucide-react";
import { ContentSection } from "@/components/dashbaord/course/lesson/ContentSection";
import { SectionSelector } from "@/components/dashbaord/course/lesson/SectionSelector";
import { useParams } from "next/navigation";
import useGetLesson from "@/hooks/useGetLesson";
import {
  useMutation,
  useMutationState,
  useQueryClient,
} from "@tanstack/react-query";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import http from "@/api";
import { DividerSection } from "@/components/dashbaord/course/lesson/DividerSection";

export interface Section {
  id: string;
  type:
    | "heading"
    | "text"
    | "image"
    | "audio"
    | "video"
    | "divider"
    | "callout"
    | "quiz"
    | "file";
  content: any;
  order: number;
}

export const getDefaultContent = (type: Section["type"]) => {
  switch (type) {
    case "heading":
      return { text: "New Heading", level: 2 };
    case "text":
      return { html: "<p>Start typing...</p>" };
    case "image":
      return { src: "", alt: "", caption: "" };
    case "audio":
      return { src: "", title: "", description: "" };
    case "video":
      return { src: "", title: "", description: "" };
    case "divider":
      return { style: "solid" };
    case "callout":
      return {
        type: "info",
        title: "Note",
        content: "Add your callout content here...",
      };
    case "quiz":
      return {
        question: "New Question?",
        options: [
          { id: "option-1", text: "Option 1", correct: false },
          { id: "option-2", text: "Option 2", correct: false },
        ],
      };
    case "file":
      return {
        src: "",
        name: "New File",
        size: 0,
      };
    default:
      return {};
  }
};

export default function LessonCreator() {
  const params = useParams();
  const lessonId = String(params?.lessonId);

  const { lesson, isLoading } = useGetLesson(lessonId);
  const queryClient = useQueryClient();

  const [lessonData, setLessonData] = useState({
    title: "",
    description: "",
    duration: "",
    tags: [] as string[],
    content: "",
  });
  const [sections, setSections] = useState<Section[]>([
    {
      id: "1",
      type: "heading",
      content: { text: "Welcome to the Lesson", level: 1 },
      order: 0,
    },
    {
      id: "2",
      type: "text",
      content: { html: "<p>Start writing your lesson content here...</p>" },
      order: 1,
    },
  ]);
  const [newTag, setNewTag] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const [showSectionSelector, setShowSectionSelector] = useState(false);

  const handleAddTag = () => {
    if (newTag.trim() && !lessonData.tags.includes(newTag.trim())) {
      setLessonData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setLessonData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSave = () => {
    console.log("Saving lesson:", lessonData);
    // Here you would typically save to your backend
  };
  const { mutate: createSection } = useMutation({
    mutationFn: (data: any) => http.sections.sectionsControllerCreate(data),
    onSuccess: () => {
      setShowSectionSelector(false);
      queryClient.invalidateQueries({
        queryKey: ["lesson", lessonId],
      });
    },
  });
  const addSection = (type: Section["type"]) => {
    const newSection = {
      type,
      content: getDefaultContent(type),
      order: sections.length,
      lessonId: lessonId,
    };
    createSection(newSection);
  };

  const [content, setContent] = useState<any>(undefined);
  const { mutate: updateSection, isPending: loadingUpdate } = useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: number;
      data: {
        content: any;
      };
    }) => http.sections.sectionsControllerUpdate(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["lesson", lessonId],
      });
    },
  });
  const handleUpdateSection = (id: number) => {
    updateSection({
      id: id,
      data: {
        content: content,
      },
    });
  };
  const updateSectionData = (id: number, content: any) => {
    setContent(content);
  };
  const { mutate: deleteSection, isPending: isLoadingDelete } = useMutation({
    mutationFn: (id: number) => http.sections.sectionsControllerDelete(id),
    onSuccess: () => {
      // console.log(data.data.message,'data')
      queryClient.invalidateQueries({
        queryKey: ["lesson", lessonId],
      });
    },
  });
  const { mutate: duplicateSection, isPending: isDuplicating } = useMutation({
    mutationFn: (id: number) =>
      http.sections.sectionsControllerDuplicateById(id),
    onSuccess: () => {
      // console.log(data.data.message,'data')
      queryClient.invalidateQueries({
        queryKey: ["lesson", lessonId],
      });
    },
  });

  const handleDeleteSection = (id: number) => {
    deleteSection(id);
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(sections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // Update order property
    const updatedItems = items.map((item, index) => ({
      ...item,
      order: index,
    }));

    setSections(updatedItems);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-white p-4">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container flex justify-between h-14 items-center">
          <Button
            variant="ghost"
            size="sm"
            className="mr-4 text-green-700 hover:bg-green-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Course
          </Button>
          <div className="flex-1">
            <div className="flex gap-4 ">
              <h1 className="text-2xl font-bold">{lesson?.title}</h1>
              <Badge variant="default" className="h-[20px] mt-2">
                {/* {lesson?.status} */}Pending
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              <span className="font-medium">Estimated Time:</span> 2 hours •{" "}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-teal-50 text-teal-700 border border-teal-500 hidden sm:inline-flex">
              {lesson?.sections.length} sections
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsPreview(!isPreview)}
              className="border-green-500 text-green-700 hover:bg-green-50"
            >
              <Eye className="h-4 w-4 mr-2" />
              {isPreview ? "Edit" : "Preview"}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 rounded-md hover:bg-muted border ">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem>
                  <Pencil className="text-green-500 w-5 h-5 mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Save className="text-yellow-500 mr-2 w-5 h-5" />
                  Publish
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 className="w-5 h-5 mr-2 text-red-500" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {!isPreview ? (
              <>
                {/* Content Sections */}
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="sections">
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="space-y-4"
                      >
                        {lesson?.sections?.map((section, index) => (
                          <Draggable
                            key={section.id}
                            draggableId={String(section.id)}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                className={`group relative ${
                                  snapshot.isDragging ? "z-50" : ""
                                }`}
                              >
                                <Card
                                  className={`transition-all border border-green-200 bg-white ${
                                    snapshot.isDragging
                                      ? "shadow-xl rotate-1"
                                      : ""
                                  }`}
                                >
                                  <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <div
                                          {...provided.dragHandleProps}
                                          className="cursor-grab active:cursor-grabbing p-1 hover:bg-green-100 rounded"
                                        >
                                          <GripVertical className="h-4 w-4 text-green-700" />
                                        </div>
                                        <Badge
                                          variant="outline"
                                          className="text-xs border-green-400 text-green-700"
                                        >
                                          {section.type}
                                        </Badge>
                                      </div>
                                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button
                                          variant={"ghost"}
                                          className=""
                                          size={"sm"}
                                          onClick={() =>
                                            handleUpdateSection(section?.id)
                                          }
                                        >
                                          Update
                                        </Button>
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          onClick={() =>
                                            handleDeleteSection(section.id)
                                          }
                                          className="text-red-600 hover:bg-red-100"
                                        >
                                          {isLoadingDelete
                                            ? "deleting..."
                                            : "Delete"}
                                        </Button>
                                      </div>
                                    </div>
                                  </CardHeader>
                                  <CardContent>
                                    <ContentSection
                                      section={section}
                                      onUpdate={(content) =>
                                        updateSectionData(section.id, content)
                                      }
                                    />
                                  </CardContent>
                                </Card>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>

                {/* Add Section Button */}
                <div className="mt-8 text-center">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setShowSectionSelector(true)}
                    className="w-full max-w-md border-green-500 text-green-700 hover:bg-green-50"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Section
                  </Button>
                </div>

                {/* Section Selector Modal */}
                {showSectionSelector && (
                  <SectionSelector
                    onSelect={addSection}
                    onClose={() => setShowSectionSelector(false)}
                  />
                )}
              </>
            ) : (
              /* Preview Mode */
              <Card className="border border-green-200 bg-white shadow-sm">
                <CardHeader>
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-green-800">
                      {lesson?.title || "Untitled Lesson"}
                    </CardTitle>
                    {lesson?.description && (
                      <p className="text-black">{lesson?.description}</p>
                    )}
                    <div className="flex items-center gap-4 text-sm text-green-700">
                      {lesson?.duration && (
                        <span>Duration: {lesson?.duration} minutes</span>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {lesson?.sections.map((section) => (
                    <div key={section.id}>
                      <ContentSection section={section} isPreview />
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {!isPreview && (
              <>
                {/* Quick Actions */}
                <Card className="border border-green-200">
                  <CardHeader>
                    <CardTitle className="text-base text-green-800">
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {["Add Section Break", "Insert Quiz", "Add Assignment"].map(
                      (label) => (
                        <Button
                          key={label}
                          variant="outline"
                          size="sm"
                          className="w-full justify-start border-green-500 text-green-700 hover:bg-green-50"
                        >
                          {label}
                        </Button>
                      )
                    )}
                    <Separator />
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start border-green-500 text-green-700 hover:bg-green-50"
                    >
                      Save as Template
                    </Button>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Lesson Stats */}
            <Card className="border border-green-200">
              <CardHeader>
                <CardTitle className="text-base text-green-800">
                  Lesson Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-green-700">
                <div className="flex justify-between text-sm">
                  <span>Word Count</span>
                  <span>
                    {
                      lessonData.content
                        .replace(/<[^>]*>/g, "")
                        .split(" ")
                        .filter((word) => word.length > 0).length
                    }
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Characters</span>
                  <span>
                    {lessonData.content.replace(/<[^>]*>/g, "").length}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Reading Time</span>
                  <span>
                    {Math.ceil(
                      lessonData.content.replace(/<[^>]*>/g, "").split(" ")
                        .length / 200
                    )}{" "}
                    min
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
