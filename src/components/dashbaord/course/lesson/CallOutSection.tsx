"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, Info, CheckCircle, AlertTriangle } from "lucide-react"

interface CalloutSectionProps {
  content: any
  onUpdate?: (content: { type: string; title: string; content: string }) => void
  isPreview?: boolean
}

export function CalloutSection({ content, onUpdate, isPreview }: CalloutSectionProps) {
  const [type, setType] = useState(content.type)
  const [title, setTitle] = useState(content.title)
  const [calloutContent, setCalloutContent] = useState(content.content)

  const handleUpdate = (field: string, value: string) => {
    const updates = { type, title, content: calloutContent, [field]: value }
    if (field === "type") setType(value)
    if (field === "title") setTitle(value)
    if (field === "content") setCalloutContent(value)
    onUpdate?.(updates)
  }

  const getCalloutStyles = (type: string) => {
    switch (type) {
      case "info":
        return {
          container: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950",
          icon: Info,
          iconColor: "text-blue-600 dark:text-blue-400",
        }
      case "success":
        return {
          container: "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950",
          icon: CheckCircle,
          iconColor: "text-green-600 dark:text-green-400",
        }
      case "warning":
        return {
          container: "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950",
          icon: AlertTriangle,
          iconColor: "text-yellow-600 dark:text-yellow-400",
        }
      case "error":
        return {
          container: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950",
          icon: AlertCircle,
          iconColor: "text-red-600 dark:text-red-400",
        }
      default:
        return {
          container: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950",
          icon: Info,
          iconColor: "text-blue-600 dark:text-blue-400",
        }
    }
  }

  const styles = getCalloutStyles(type)
  const Icon = styles.icon

  if (isPreview) {
    return (
      <div className={`border rounded-lg p-4 ${styles.container}`}>
        <div className="flex gap-3">
          <Icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${styles.iconColor}`} />
          <div className="space-y-1">
            {title && <h4 className="font-medium">{title}</h4>}
            <p className="text-sm">{calloutContent}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className={`border rounded-lg p-4 ${styles.container}`}>
        <div className="flex gap-3">
          <Icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${styles.iconColor}`} />
          <div className="space-y-1">
            {title && <h4 className="font-medium">{title}</h4>}
            <p className="text-sm">{calloutContent}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <div>
          <Label htmlFor="type">Callout Type</Label>
          <Select value={type} onValueChange={(value) => handleUpdate("type", value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="info">Info</SelectItem>
              <SelectItem value="success">Success</SelectItem>
              <SelectItem value="warning">Warning</SelectItem>
              <SelectItem value="error">Error</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => handleUpdate("title", e.target.value)}
            placeholder="Callout title..."
          />
        </div>
        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            value={calloutContent}
            onChange={(e) => handleUpdate("content", e.target.value)}
            placeholder="Callout content..."
            rows={3}
          />
        </div>
      </div>
    </div>
  )
}
