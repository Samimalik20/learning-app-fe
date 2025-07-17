"use client";
import { Section } from "@/api/api";
// import { Section } from "@/app/dashboard/courses/[courseId]/modules/[moduleId]/lessons/[lessonId]/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Type,
  Heading1,
  ImageIcon,
  Music,
  Video,
  Minus,
  AlertCircle,
} from "lucide-react";

interface SectionSelectorProps {
  onSelect: (type: Section["type"]) => void;
  onClose: () => void;
}

const sectionTypes = [
  {
    type: "heading" as const,
    icon: Heading1,
    title: "Heading",
    description: "Add a title or section heading",
  },
  {
    type: "text" as const,
    icon: Type,
    title: "Text Block",
    description: "Rich text content with formatting",
  },
  {
    type: "image" as const,
    icon: ImageIcon,
    title: "Image",
    description: "Add images with captions",
  },
  {
    type: "audio" as const,
    icon: Music,
    title: "Audio",
    description: "Embed audio files or recordings",
  },
  {
    type: "video" as const,
    icon: Video,
    title: "Video",
    description: "Add video content or embeds",
  },
  {
    type: "divider" as const,
    icon: Minus,
    title: "Divider",
    description: "Visual separator between sections",
  },
  {
    type: "callout" as const,
    icon: AlertCircle,
    title: "Callout",
    description: "Highlight important information",
  },
];

export function SectionSelector({ onSelect, onClose }: SectionSelectorProps) {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="!w-[70vw] !max-w-[70vw]">
        <DialogHeader>
          <DialogTitle>Add New Section</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {sectionTypes.map((sectionType) => {
            const Icon = sectionType.icon;
            return (
              <Card
                key={sectionType.type}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onSelect(sectionType.type)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">
                        {sectionType.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription>{sectionType.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
