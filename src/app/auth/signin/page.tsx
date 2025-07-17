"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Stethoscope, Mail, Lock, Eye, EyeOff, ArrowLeft, Shield, Users, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex flex-col">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white/80 backdrop-blur-sm border-b">
        <Link className="flex items-center justify-center" href="/">
          <ArrowLeft className="h-4 w-4 mr-2 text-gray-600" />
          <Stethoscope className="h-6 w-6 text-emerald-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">Aesthetics</span>
        </Link>
        <div className="ml-auto">
          <Link href="/auth/signup">
            <Button variant="ghost" size="sm">
              Need an account? <span className="ml-1 text-emerald-600 font-semibold">Sign up</span>
            </Button>
          </Link>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Sign In Form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md shadow-2xl border-0 bg-white/95 backdrop-blur">
              <CardHeader className="space-y-1 text-center pb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Welcome back</CardTitle>
                <CardDescription className="text-gray-600">
                  Sign in to continue your nursing education journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="nurse@hospital.com"
                        className="pl-10 h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember" className="text-sm text-gray-600">
                        Remember me
                      </Label>
                    </div>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
                  >
                    Sign in to your account
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-12 bg-transparent">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="h-12 bg-transparent">
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </Button>
                </div>

                <div className="text-center text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/auth/signup" className="text-emerald-600 hover:text-emerald-700 font-medium">
                    Sign up for free
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Benefits/Features */}
          <div className="hidden lg:block">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Continue Your Professional Growth</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Join thousands of nurses advancing their careers through expert-led courses and certifications.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Accredited Certifications</h3>
                    <p className="text-gray-600">
                      Earn recognized certifications that meet continuing education requirements and advance your
                      career.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Community</h3>
                    <p className="text-gray-600">
                      Connect with fellow nurses and learn from experienced healthcare professionals worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Career Advancement</h3>
                    <p className="text-gray-600">
                      Develop specialized skills to move into leadership roles and specialized nursing positions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur rounded-xl p-6 border border-emerald-100">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Nurse testimonial"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Martinez, RN</div>
                    <div className="text-sm text-gray-600">ICU Nurse</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Aesthetics helped me transition to critical care nursing. The courses are practical, engaging, and
                  taught by experts who understand real-world nursing challenges."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-4 border-t bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-semibold text-gray-900">Aesthetics</span>
            <span className="text-sm text-gray-600">© 2024</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-emerald-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-emerald-600">
              Terms of Service
            </Link>
            <Link href="/support" className="hover:text-emerald-600">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
