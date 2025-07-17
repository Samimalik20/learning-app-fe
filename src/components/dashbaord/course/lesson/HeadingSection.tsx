"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error
import { Button } from "@/components/ui/button"

interface HeadingSectionProps {
  content: any,
  onUpdate?: (content: { text: string; level: number }) => void
  isPreview?: boolean
}

export function HeadingSection({ content, onUpdate, isPreview }: HeadingSectionProps) {
  const [text, setText] = useState(content?.text)
  const [level, setLevel] = useState(content?.level)

  const handleTextChange = (newText: string) => {
    setText(newText)
    onUpdate?.({ text: newText, level })
  }

  const handleLevelChange = (newLevel: string) => {
    const levelNum = Number.parseInt(newLevel)
    setLevel(levelNum)
    onUpdate?.({ text, level: levelNum })
  }

  if (isPreview) {
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements
    const headingClasses = {
      1: "text-3xl font-bold",
      2: "text-2xl font-semibold",
      3: "text-xl font-semibold",
      4: "text-lg font-medium",
      5: "text-base font-medium",
      6: "text-sm font-medium",
    }

    return <HeadingTag className={headingClasses[level as keyof typeof headingClasses]}>{text}</HeadingTag>
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-3">
        <Input
          value={text}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder="Enter heading text..."
          className="flex-1"
        />
        <Select value={level.toString()} onValueChange={handleLevelChange}>
          <SelectTrigger className="w-24">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">H1</SelectItem>
            <SelectItem value="2">H2</SelectItem>
            <SelectItem value="3">H3</SelectItem>
            <SelectItem value="4">H4</SelectItem>
            <SelectItem value="5">H5</SelectItem>
            <SelectItem value="6">H6</SelectItem>
          </SelectContent>
        </Select>
      </div>
   
    </div>
  )
}
