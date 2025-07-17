"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import TextAlign from "@tiptap/extension-text-align"
import Underline from "@tiptap/extension-underline"
import Image from "@tiptap/extension-image"
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import ListItem from "@tiptap/extension-list-item"
import BulletList from "@tiptap/extension-bullet-list"
import OrderedList from "@tiptap/extension-ordered-list"
import { common, createLowlight } from "lowlight"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Bold,
  Italic,
  UnderlineIcon,
  Strikethrough,
  Code,
  Code2,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  LinkIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  ImageIcon,
  Copy,
} from "lucide-react"
import { useCallback, useState, useRef } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

interface RichTextEditorProps {
  content?: string
  onChange?: (content: string) => void
  placeholder?: string
  className?: string
}

export default function RichTextEditor({
  content = "",
  onChange,
  placeholder = "Start writing...",
  className = "",
}: RichTextEditorProps) {
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false)
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false)
  const [isCodeBlockDialogOpen, setIsCodeBlockDialogOpen] = useState(false)
  const [linkUrl, setLinkUrl] = useState("")
  const [linkText, setLinkText] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [imageAlt, setImageAlt] = useState("")
  const [codeContent, setCodeContent] = useState("")
  const [codeLanguage, setCodeLanguage] = useState("javascript")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const lowlight = createLowlight(common)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
          HTMLAttributes: {
            class: "list-disc list-inside space-y-1",
          },
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
          HTMLAttributes: {
            class: "list-decimal list-inside space-y-1",
          },
        },
        listItem: {
          HTMLAttributes: {
            class: "leading-normal",
          },
        },
        blockquote: {
          HTMLAttributes: {
            class: "border-l-4 border-gray-300 pl-4 italic text-gray-600",
          },
        },
        codeBlock: false,
        code: {
          HTMLAttributes: {
            class: "bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono",
          },
        },
      }),
      // Explicitly add list extensions to ensure they work
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc list-inside space-y-1 ml-4",
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal list-inside space-y-1 ml-4",
        },
      }),
      ListItem.configure({
        HTMLAttributes: {
          class: "leading-normal",
        },
      }),
      Underline,
      CodeBlockLowlight.configure({
        lowlight,
        HTMLAttributes: {
          class: "bg-gray-100 border rounded-md p-4 font-mono text-sm overflow-x-auto my-4",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "max-w-full h-auto rounded-lg my-4",
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-600 underline cursor-pointer hover:text-blue-800",
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: `prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[200px] p-4 ${className}`,
      },
      handlePaste: (view, event) => {
        const items = Array.from(event.clipboardData?.items || [])
        const imageItem = items.find((item) => item.type.startsWith("image/"))

        if (imageItem) {
          event.preventDefault()
          const file = imageItem.getAsFile()
          if (file) {
            handleImageUpload(file)
            toast.success("Image pasted successfully!")
          }
          return true
        }
        return false
      },
    },
  })

  const handleImageUpload = useCallback(
    (file: File) => {
      if (!editor) return

      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB")
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const url = e.target?.result as string
        editor.chain().focus().setImage({ src: url }).run()
        toast.success("Image uploaded successfully!")
      }
      reader.onerror = () => {
        toast.error("Failed to upload image")
      }
      reader.readAsDataURL(file)
    },
    [editor],
  )

  const setImage = useCallback(() => {
    setImageUrl("")
    setImageAlt("")
    setIsImageDialogOpen(true)
  }, [])

  const handleSetImage = () => {
    if (!editor || !imageUrl) return

    editor.chain().focus().setImage({ src: imageUrl, alt: imageAlt }).run()
    setIsImageDialogOpen(false)
    setImageUrl("")
    setImageAlt("")
    toast.success("Image added successfully!")
  }

  const setCodeBlock = useCallback(() => {
    setCodeContent("")
    setCodeLanguage("javascript")
    setIsCodeBlockDialogOpen(true)
  }, [])

  const handleSetCodeBlock = () => {
    if (!editor) return

    editor
      .chain()
      .focus()
      .insertContent({
        type: "codeBlock",
        attrs: { language: codeLanguage },
        content: [{ type: "text", text: codeContent }],
      })
      .run()

    setIsCodeBlockDialogOpen(false)
    setCodeContent("")
    setCodeLanguage("javascript")
    toast.success("Code block added successfully!")
  }

  const copyToClipboard = useCallback(async () => {
    if (!editor) return

    const html = editor.getHTML()
    try {
      await navigator.clipboard.writeText(html)
      toast.success("Content copied to clipboard!")
    } catch (err) {
      toast.error("Failed to copy content")
    }
  }, [editor])

  const setLink = useCallback(() => {
    if (!editor) return

    const { from, to } = editor.state.selection
    const selectedText = editor.state.doc.textBetween(from, to)

    setLinkText(selectedText)
    setLinkUrl("")
    setIsLinkDialogOpen(true)
  }, [editor])

  const handleSetLink = () => {
    if (!editor || !linkUrl) return

    if (linkText) {
      editor.chain().focus().insertContent(`<a href="${linkUrl}">${linkText}</a>`).run()
    } else {
      editor.chain().focus().setLink({ href: linkUrl }).run()
    }

    setIsLinkDialogOpen(false)
    setLinkUrl("")
    setLinkText("")
    toast.success("Link added successfully!")
  }

  // Helper function to check if editor is ready
  if (!editor) {
    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="p-4 text-center text-gray-500">Loading editor...</div>
      </div>
    )
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="border-b border-gray-200 p-2 flex flex-wrap items-center gap-1 bg-gray-50">
        {/* Text Formatting */}
        <Button
          variant={editor.isActive("bold") ? "default" : "ghost"}
          size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant={editor.isActive("italic") ? "default" : "ghost"}
          size="sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <Button
          variant={editor.isActive("underline") ? "default" : "ghost"}
          size="sm"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          title="Underline"
        >
          <UnderlineIcon className="h-4 w-4" />
        </Button>
        <Button
          variant={editor.isActive("strike") ? "default" : "ghost"}
          size="sm"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          title="Strikethrough"
        >
          <Strikethrough className="h-4 w-4" />
        </Button>
        <Button
          variant={editor.isActive("code") ? "default" : "ghost"}
          size="sm"
          onClick={() => editor.chain().focus().toggleCode().run()}
          title="Inline Code"
        >
          <Code className="h-4 w-4" />
        </Button>
        <Button
          variant={editor.isActive("codeBlock") ? "default" : "ghost"}
          size="sm"
          onClick={setCodeBlock}
          title="Code Block"
        >
          <Code2 className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* Headings */}
        <Button
          variant={editor.isActive("heading", { level: 1 }) ? "default" : "ghost"}
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          title="Heading 1"
        >
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button
          variant={editor.isActive("heading", { level: 2 }) ? "default" : "ghost"}
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          title="Heading 2"
        >
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button
          variant={editor.isActive("heading", { level: 3 }) ? "default" : "ghost"}
          size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          title="Heading 3"
        >
          <Heading3 className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* Lists */}
        <Button
          variant={editor.isActive("bulletList") ? "default" : "ghost"}
          size="sm"
          onClick={() => {
            editor.chain().focus().toggleBulletList().run()
            console.log("Bullet list toggled:", editor.isActive("bulletList"))
          }}
          title="Bullet List"
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant={editor.isActive("orderedList") ? "default" : "ghost"}
          size="sm"
          onClick={() => {
            editor.chain().focus().toggleOrderedList().run()
            console.log("Ordered list toggled:", editor.isActive("orderedList"))
          }}
          title="Numbered List"
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button
          variant={editor.isActive("blockquote") ? "default" : "ghost"}
          size="sm"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          title="Blockquote"
        >
          <Quote className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* Alignment */}
        <Button
          variant={editor.isActive({ textAlign: "left" }) ? "default" : "ghost"}
          size="sm"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          title="Align Left"
        >
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button
          variant={editor.isActive({ textAlign: "center" }) ? "default" : "ghost"}
          size="sm"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          title="Align Center"
        >
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button
          variant={editor.isActive({ textAlign: "right" }) ? "default" : "ghost"}
          size="sm"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          title="Align Right"
        >
          <AlignRight className="h-4 w-4" />
        </Button>
        <Button
          variant={editor.isActive({ textAlign: "justify" }) ? "default" : "ghost"}
          size="sm"
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          title="Justify"
        >
          <AlignJustify className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* Link & Image */}
        <Button variant={editor.isActive("link") ? "default" : "ghost"} size="sm" onClick={setLink} title="Add Link">
          <LinkIcon className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={setImage} title="Add Image">
          <ImageIcon className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* Undo/Redo */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          title="Undo"
        >
          <Undo className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          title="Redo"
        >
          <Redo className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        {/* Copy */}
        <Button variant="ghost" size="sm" onClick={copyToClipboard} title="Copy Content">
          <Copy className="h-4 w-4" />
        </Button>
      </div>

      {/* Editor */}
      <div className="min-h-[200px] bg-white">
        <EditorContent
          editor={editor}
          className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl max-w-none [&_.ProseMirror]:outline-none [&_.ProseMirror]:min-h-[200px] [&_.ProseMirror]:p-4"
        />
      </div>

      {/* Link Dialog */}
      <Dialog open={isLinkDialogOpen} onOpenChange={setIsLinkDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Link</DialogTitle>
            <DialogDescription>Enter the URL and optional link text.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="url">URL</Label>
              <Input
                id="url"
                placeholder="https://example.com"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="text">Link Text (optional)</Label>
              <Input id="text" placeholder="Link text" value={linkText} onChange={(e) => setLinkText(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsLinkDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSetLink} disabled={!linkUrl}>
              Add Link
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Image Dialog */}
      <Dialog open={isImageDialogOpen} onOpenChange={setIsImageDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Image</DialogTitle>
            <DialogDescription>Enter an image URL or upload a file (max 5MB).</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="image-url">Image URL</Label>
              <Input
                id="image-url"
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image-alt">Alt Text</Label>
              <Input
                id="image-alt"
                placeholder="Description of the image"
                value={imageAlt}
                onChange={(e) => setImageAlt(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label>Or upload a file</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    handleImageUpload(file)
                    setIsImageDialogOpen(false)
                  }
                }}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsImageDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSetImage} disabled={!imageUrl}>
              Add Image
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Code Block Dialog */}
      <Dialog open={isCodeBlockDialogOpen} onOpenChange={setIsCodeBlockDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add Code Block</DialogTitle>
            <DialogDescription>Enter your code and select the programming language.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="code-language">Language</Label>
              <select
                id="code-language"
                value={codeLanguage}
                onChange={(e) => setCodeLanguage(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="json">JSON</option>
                <option value="bash">Bash</option>
                <option value="sql">SQL</option>
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="code-content">Code</Label>
              <Textarea
                id="code-content"
                placeholder="Enter your code here..."
                value={codeContent}
                onChange={(e) => setCodeContent(e.target.value)}
                className="min-h-[200px] font-mono"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCodeBlockDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSetCodeBlock} disabled={!codeContent}>
              Add Code Block
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
