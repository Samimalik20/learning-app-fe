"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import Image from "next/image"
import { User, Key, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import logo from "../../../../public/logo.jpg"

// Form validation schema
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-[320px] bg-white rounded-xl border border-gray-200 shadow-md p-8">
        <div className="text-center mb-6">
          <Image
            src={logo}
            alt="Aesthetics Consults Logo"
            width={64}
            height={64}
            className="rounded-full mx-auto mb-3"
            priority
          />
          <h1 className="text-gray-600 text-base font-normal">Aesthetics Consults</h1>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        className="w-full h-10 pl-10 pr-3 bg-gray-50 border-0 rounded-full text-sm text-gray-700 focus:bg-gray-100 focus:ring-0 focus:outline-none"
                        
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <FormControl>
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        className="w-full h-10 pl-10 pr-10 bg-gray-50 border-0 rounded-full text-sm text-gray-700 focus:bg-gray-100 focus:ring-0 focus:outline-none"
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-2">
              <Button type="submit" className="w-full h-10 rounded-full text-sm font-normal shadow-sm">
                Login
              </Button>
            </div>
          </form>
        </Form>

        <div className="flex justify-between mt-4 text-xs">
          <button className="text-blue-500 hover:underline">Register by invite code</button>
          <button className="text-blue-500 hover:underline">Forgot password?</button>
        </div>
      </div>

  
    </div>
  )
}
