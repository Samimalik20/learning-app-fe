"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

interface DividerSectionProps {
  content: any
  onUpdate?: (content: { style: string }) => void
  isPreview?: boolean
}

export function DividerSection({ content, onUpdate, isPreview }: DividerSectionProps) {
  const [style, setStyle] = useState(content.style)

  const handleStyleChange = (newStyle: string) => {
    setStyle(newStyle)
    onUpdate?.({ style: newStyle })
  }

  const getDividerClass = (style: string) => {
    switch (style) {
      case "solid":
        return "border-t border-border"
      case "dashed":
        return "border-t border-dashed border-border"
      case "dotted":
        return "border-t border-dotted border-border"
      case "thick":
        return "border-t-2 border-border"
      default:
        return "border-t border-border"
    }
  }

  if (isPreview) {
    return <div className={`my-4 ${getDividerClass(style)}`} />
  }

  return (
    <div className="space-y-3">
      <div className={`my-4 ${getDividerClass(style)}`} />
      <div>
        <Label htmlFor="style">Divider Style</Label>
        <Select value={style} onValueChange={handleStyleChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="solid">Solid</SelectItem>
            <SelectItem value="dashed">Dashed</SelectItem>
            <SelectItem value="dotted">Dotted</SelectItem>
            <SelectItem value="thick">Thick</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
