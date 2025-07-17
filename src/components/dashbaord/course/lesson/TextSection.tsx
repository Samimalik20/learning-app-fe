"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import Highlight from "@tiptap/extension-highlight"
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic, Strikethrough, Code, List, ListOrdered, Quote, LinkIcon, Highlighter } from "lucide-react"
import { useCallback } from "react"

interface TextSectionProps {
  content: any
  onUpdate?: (content: { html: string }) => void
  isPreview?: boolean
}

export function TextSection({ content, onUpdate, isPreview }: TextSectionProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-primary underline underline-offset-2",
        },
      }),
      Highlight.configure({
        multicolor: true,
      }),
    ],
    content: content?.html,
    onUpdate: ({ editor }) => {
      onUpdate?.({ html: editor.getHTML() })
    },
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none focus:outline-none min-h-[100px] p-3",
      },
    },
  })

  const addLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href
    const url = window.prompt("Enter URL:", previousUrl)

    if (url === null) {
      return
    }

    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run()
      return
    }

    editor?.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
  }, [editor])

  if (isPreview) {
    return <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content.html }} />
  }

  if (!editor) {
    return null
  }

  return (
    <div className="border rounded-lg">
      {/* Toolbar */}
      <div className="border-b p-2 flex flex-wrap items-center gap-1">
        <Toggle
          size="sm"
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("italic")}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("strike")}
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("code")}
          onPressedChange={() => editor.chain().focus().toggleCode().run()}
        >
          <Code className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("highlight")}
          onPressedChange={() => editor.chain().focus().toggleHighlight().run()}
        >
          <Highlighter className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("bulletList")}
          onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("orderedList")}
          onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("blockquote")}
          onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <Quote className="h-4 w-4" />
        </Toggle>
        <Button variant="ghost" size="sm" onClick={addLink}>
          <LinkIcon className="h-4 w-4" />
        </Button>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />
    </div>
  )
}
