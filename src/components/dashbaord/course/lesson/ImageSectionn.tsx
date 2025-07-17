"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, X } from "lucide-react"

interface ImageSectionProps {
  content: any
  onUpdate?: (content: { src: string; alt: string; caption: string }) => void
  isPreview?: boolean
}

export function ImageSection({ content, onUpdate, isPreview }: ImageSectionProps) {
  const [src, setSrc] = useState(content.src)
  const [alt, setAlt] = useState(content.alt)
  const [caption, setCaption] = useState(content.caption)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const newSrc = e.target?.result as string
        setSrc(newSrc)
        onUpdate?.({ src: newSrc, alt, caption })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpdate = (field: string, value: string) => {
    const updates = { src, alt, caption, [field]: value }
    if (field === "alt") setAlt(value)
    if (field === "caption") setCaption(value)
    onUpdate?.(updates)
  }

  if (isPreview) {
    return (
      <div className="space-y-2">
        {src && <img src={src || "/placeholder.svg?height=300&width=300"}  alt={alt} className="w-full rounded-lg" />}
        {caption && <p className="text-sm text-muted-foreground text-center italic">{caption}</p>}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {src ? (
        <div className="relative">
          <img src={src || "/placeholder.svg?height=300&width=600"} alt={alt} className="w-full rounded-lg" />
          <Button
            variant="destructive"
            size="sm"
            className="absolute top-2 right-2"
            onClick={() => {
              setSrc("")
              onUpdate?.({ src: "", alt, caption })
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
          <p className="text-sm text-muted-foreground">Click to upload image</p>
        </div>
      )}

      <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />

      <div className="grid grid-cols-1 gap-3">
        <div>
          <Label htmlFor="alt">Alt Text</Label>
          <Input
            id="alt"
            value={alt}
            onChange={(e) => handleUpdate("alt", e.target.value)}
            placeholder="Describe the image..."
          />
        </div>
        <div>
          <Label htmlFor="caption">Caption</Label>
          <Textarea
            id="caption"
            value={caption}
            onChange={(e) => handleUpdate("caption", e.target.value)}
            placeholder="Optional caption..."
            rows={2}
          />
        </div>
      </div>
    </div>
  )
}
