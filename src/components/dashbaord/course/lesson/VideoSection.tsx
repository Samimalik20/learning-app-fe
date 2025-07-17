"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, X } from "lucide-react"

interface VideoSectionProps {
  content: any
  onUpdate?: (content: { src: string; title: string; description: string }) => void
  isPreview?: boolean
}

export function VideoSection({ content, onUpdate, isPreview }: VideoSectionProps) {
  const [src, setSrc] = useState(content.src)
  const [title, setTitle] = useState(content.title)
  const [description, setDescription] = useState(content.description)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const newSrc = e.target?.result as string
        setSrc(newSrc)
        onUpdate?.({ src: newSrc, title, description })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpdate = (field: string, value: string) => {
    const updates = { src, title, description, [field]: value }
    if (field === "title") setTitle(value)
    if (field === "description") setDescription(value)
    onUpdate?.(updates)
  }

  if (isPreview) {
    return (
      <div className="space-y-3">
        {title && <h4 className="font-medium">{title}</h4>}
        {src && (
          <video controls className="w-full rounded-lg">
            <source src={src} />
            Your browser does not support the video tag.
          </video>
        )}
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {src ? (
        <div className="relative">
          <video controls className="w-full rounded-lg">
            <source src={src} />
            Your browser does not support the video tag.
          </video>
          <Button
            variant="destructive"
            size="sm"
            className="absolute top-2 right-2"
            onClick={() => {
              setSrc("")
              onUpdate?.({ src: "", title, description })
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Click to upload video</p>
        </div>
      )}

      <input ref={fileInputRef} type="file" accept="video/*" className="hidden" onChange={handleFileUpload} />

      <div className="grid grid-cols-1 gap-3">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => handleUpdate("title", e.target.value)}
            placeholder="Video title..."
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => handleUpdate("description", e.target.value)}
            placeholder="Optional description..."
            rows={2}
          />
        </div>
      </div>
    </div>
  )
}
