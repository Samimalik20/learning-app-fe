import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function QuizSection({ content, onUpdate, isPreview }: { content: any; onUpdate?: (content: any) => void; isPreview?: boolean }) {
  const [question, setQuestion] = useState(content?.question || "")
  const [options, setOptions] = useState(content?.options || ["", "", "", ""])

  const handleUpdate = (newQuestion: string, newOptions: string[]) => {
    setQuestion(newQuestion)
    setOptions(newOptions)
    onUpdate?.({ question: newQuestion, options: newOptions })
  }

  if (isPreview) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Quiz Question</CardTitle>
          <CardDescription>{question}</CardDescription>
        </CardHeader>
        <CardContent>
          {options.map((opt:any, idx:any) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border" />
              <p>{opt}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quiz Editor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Question</Label>
          <Textarea
            value={question}
            onChange={(e) => handleUpdate(e.target.value, options)}
          />
        </div>
        {options.map((opt:any, idx:any) => (
          <div key={idx}>
            <Label>Option {idx + 1}</Label>
            <Input
              value={opt}
              onChange={(e) => {
                const newOptions = [...options]
                newOptions[idx] = e.target.value
                handleUpdate(question, newOptions)
              }}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}