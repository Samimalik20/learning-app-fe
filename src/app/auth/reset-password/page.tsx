"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Stethoscope, Lock, Eye, EyeOff, ArrowLeft, CheckCircle, AlertCircle, Shield } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 2000)
  }

  const passwordRequirements = [
    { text: "At least 8 characters", met: password.length >= 8 },
    { text: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { text: "Contains lowercase letter", met: /[a-z]/.test(password) },
    { text: "Contains number", met: /\d/.test(password) },
    { text: "Contains special character", met: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ]

  const passwordsMatch = password === confirmPassword && password.length > 0

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex flex-col">
        <header className="px-4 lg:px-6 h-16 flex items-center bg-white/80 backdrop-blur-sm border-b">
          <Link className="flex items-center justify-center" href="/">
            <Stethoscope className="h-6 w-6 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Aesthetics</span>
          </Link>
        </header>

        <div className="flex-1 flex items-center justify-center p-4">
          <Card className="w-full max-w-md shadow-2xl border-0 bg-white/95 backdrop-blur">
            <CardHeader className="space-y-1 text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Password Reset Successful!</CardTitle>
              <CardDescription className="text-gray-600">Your password has been successfully updated</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <Alert className="border-emerald-200 bg-emerald-50">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <AlertDescription className="text-emerald-800">
                  You can now sign in to your account with your new password.
                </AlertDescription>
              </Alert>

              <Button asChild className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-medium">
                <Link href="/signin">Continue to Sign In</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex flex-col">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white/80 backdrop-blur-sm border-b">
        <Link className="flex items-center justify-center" href="/signin">
          <ArrowLeft className="h-4 w-4 mr-2 text-gray-600" />
          <Stethoscope className="h-6 w-6 text-emerald-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">Aesthetics</span>
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Reset Form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md shadow-2xl border-0 bg-white/95 backdrop-blur">
              <CardHeader className="space-y-1 text-center pb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Lock className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Create New Password</CardTitle>
                <CardDescription className="text-gray-600">
                  Enter a strong password to secure your account
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                      New Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                      Confirm New Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="pl-10 pr-10 h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Password Requirements */}
                  {password && (
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">Password Requirements</Label>
                      <div className="space-y-1">
                        {passwordRequirements.map((req, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            {req.met ? (
                              <CheckCircle className="h-4 w-4 text-emerald-600" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-gray-400" />
                            )}
                            <span className={req.met ? "text-emerald-600" : "text-gray-500"}>{req.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Password Match Indicator */}
                  {confirmPassword && (
                    <Alert className={passwordsMatch ? "border-emerald-200 bg-emerald-50" : "border-red-200 bg-red-50"}>
                      {passwordsMatch ? (
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-red-600" />
                      )}
                      <AlertDescription className={passwordsMatch ? "text-emerald-800" : "text-red-800"}>
                        {passwordsMatch ? "Passwords match!" : "Passwords do not match"}
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading || !passwordsMatch || !passwordRequirements.every((req) => req.met)}
                    className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-medium disabled:opacity-50"
                  >
                    {isLoading ? "Updating Password..." : "Update Password"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Security Information */}
          <div className="hidden lg:block">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Secure Your Account</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Create a strong password to protect your nursing education progress and personal information.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Strong Password Tips</h3>
                    <p className="text-gray-600">
                      Use a combination of uppercase and lowercase letters, numbers, and special characters for maximum
                      security.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Account Protection</h3>
                    <p className="text-gray-600">
                      Your new password will immediately secure your account and all your course progress and
                      certifications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur rounded-xl p-6 border border-emerald-100">
                <h4 className="font-semibold text-gray-900 mb-3">Password Best Practices</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Use at least 8 characters</p>
                  <p>• Include uppercase and lowercase letters</p>
                  <p>• Add numbers and special characters</p>
                  <p>• Avoid common words or personal information</p>
                  <p>• Don't reuse passwords from other accounts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
