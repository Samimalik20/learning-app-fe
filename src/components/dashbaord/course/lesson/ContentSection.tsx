"use client"


import { TextSection } from "./TextSection"
import { HeadingSection } from "./HeadingSection"
import { ImageSection } from "./ImageSectionn"
import { AudioSection } from "./AudioSection"
import { VideoSection } from "./VideoSection"
import { DividerSection } from "./DividerSection"
import { CalloutSection } from "./CallOutSection"
import { Section } from "@/api/api"

interface ContentSectionProps {
  section: Section
  onUpdate?: (content: any) => void
  isPreview?: boolean
}

export function ContentSection({ section, onUpdate, isPreview = false }: ContentSectionProps) {
  const handleUpdate = (content: any) => {
    if (onUpdate) {
      onUpdate(content)
    }
  }

  switch (section.type) {
    case "heading":
      return <HeadingSection content={section.content} onUpdate={handleUpdate} isPreview={isPreview} />
    case "text":
      return <TextSection content={section.content} onUpdate={handleUpdate} isPreview={isPreview} />
    case "image":
      return <ImageSection content={section.content} onUpdate={handleUpdate} isPreview={isPreview} />
    case "audio":
      return <AudioSection content={section.content} onUpdate={handleUpdate} isPreview={isPreview} />
    case "video":
      return <VideoSection content={section.content} onUpdate={handleUpdate} isPreview={isPreview} />
    case "divider":
      return <DividerSection content={section.content} onUpdate={handleUpdate} isPreview={isPreview} />
    case "callout":
      return <CalloutSection content={section.content} onUpdate={handleUpdate} isPreview={isPreview} />
    default:
      return <div>Unknown section type</div>
  }
}
