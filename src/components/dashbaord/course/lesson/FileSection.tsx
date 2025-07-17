import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"



export function FileSection({ content, onUpdate, isPreview }: { content: any; onUpdate?: (content: any) => void; isPreview?: boolean }) {
  const [fileName, setFileName] = useState(content?.fileName || "")
  const [fileUrl, setFileUrl] = useState(content?.fileUrl || "")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0]
      setFileName(file.name)
      const url = URL.createObjectURL(file)
      setFileUrl(url)
      onUpdate?.({ fileName: file.name, fileUrl: url })
    }
  }

  if (isPreview) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>File Section</CardTitle>
          <CardDescription>{fileName}</CardDescription>
        </CardHeader>
        <CardContent>
          {fileUrl && (
            <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">
              Download {fileName}
            </a>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload File</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input type="file" onChange={handleFileChange} />
        {fileName && <p className="text-sm">Selected file: {fileName}</p>}
      </CardContent>
    </Card>
  )
}
