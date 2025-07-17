"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Stethoscope,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  User,
  MapPin,
  GraduationCap,
  Shield,
  CheckCircle,
  Star,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

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
          <Link href="/auth/signin">
            <Button variant="ghost" size="sm">
              Already have an account? <span className="ml-1 text-emerald-600 font-semibold">Sign in</span>
            </Button>
          </Link>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Sign Up Form */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md shadow-2xl border-0 bg-white/95 backdrop-blur">
              <CardHeader className="space-y-1 text-center pb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Join Aesthetics</CardTitle>
                <CardDescription className="text-gray-600">
                  Start your professional development journey today
                </CardDescription>

                {/* Progress Indicator */}
                <div className="flex justify-center gap-2 mt-4">
                  <div className={`w-2 h-2 rounded-full ${currentStep >= 1 ? "bg-emerald-600" : "bg-gray-200"}`} />
                  <div className={`w-2 h-2 rounded-full ${currentStep >= 2 ? "bg-emerald-600" : "bg-gray-200"}`} />
                  <div className={`w-2 h-2 rounded-full ${currentStep >= 3 ? "bg-emerald-600" : "bg-gray-200"}`} />
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {currentStep === 1 && (
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                          First Name
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="Sarah"
                            className="pl-10 h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Johnson"
                          className="h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="sarah.johnson@hospital.com"
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
                          placeholder="Create a strong password"
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
                        Confirm Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
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

                    <Button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
                    >
                      Continue
                    </Button>
                  </form>
                )}

                {currentStep === 2 && (
                  <form className="space-y-4">
                    <div className="text-center mb-4">
                      <h3 className="font-semibold text-gray-900">Professional Information</h3>
                      <p className="text-sm text-gray-600">Help us personalize your learning experience</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="licenseNumber" className="text-sm font-medium text-gray-700">
                        Nursing License Number
                      </Label>
                      <div className="relative">
                        <Shield className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="licenseNumber"
                          type="text"
                          placeholder="RN123456789"
                          className="pl-10 h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialty" className="text-sm font-medium text-gray-700">
                        Nursing Specialty
                      </Label>
                      <Select>
                        <SelectTrigger className="h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500">
                          <SelectValue placeholder="Select your specialty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="critical-care">Critical Care</SelectItem>
                          <SelectItem value="emergency">Emergency Nursing</SelectItem>
                          <SelectItem value="pediatric">Pediatric Nursing</SelectItem>
                          <SelectItem value="oncology">Oncology</SelectItem>
                          <SelectItem value="cardiac">Cardiac Care</SelectItem>
                          <SelectItem value="surgical">Surgical Nursing</SelectItem>
                          <SelectItem value="mental-health">Mental Health</SelectItem>
                          <SelectItem value="geriatric">Geriatric Care</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-sm font-medium text-gray-700">
                        Years of Experience
                      </Label>
                      <Select>
                        <SelectTrigger className="h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new-grad">New Graduate</SelectItem>
                          <SelectItem value="1-2">1-2 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="workplace" className="text-sm font-medium text-gray-700">
                        Current Workplace
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="workplace"
                          type="text"
                          placeholder="General Hospital"
                          className="pl-10 h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button type="button" variant="outline" onClick={() => setCurrentStep(1)} className="flex-1 h-12">
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="flex-1 h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
                      >
                        Continue
                      </Button>
                    </div>
                  </form>
                )}

                {currentStep === 3 && (
                  <form className="space-y-4">
                    <div className="text-center mb-4">
                      <h3 className="font-semibold text-gray-900">Learning Preferences</h3>
                      <p className="text-sm text-gray-600">Customize your learning journey</p>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">
                        Areas of Interest (Select all that apply)
                      </Label>
                      <div className="grid grid-cols-2 gap-2">
                        {["Patient Safety", "Clinical Skills", "Leadership", "Technology", "Research", "Ethics"].map(
                          (interest) => (
                            <div key={interest} className="flex items-center space-x-2">
                              <Checkbox id={interest} />
                              <Label htmlFor={interest} className="text-sm text-gray-600">
                                {interest}
                              </Label>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="goals" className="text-sm font-medium text-gray-700">
                        Learning Goals
                      </Label>
                      <Select>
                        <SelectTrigger className="h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500">
                          <SelectValue placeholder="What's your primary goal?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="certification">Earn Certifications</SelectItem>
                          <SelectItem value="skills">Develop New Skills</SelectItem>
                          <SelectItem value="advancement">Career Advancement</SelectItem>
                          <SelectItem value="continuing-ed">Continuing Education</SelectItem>
                          <SelectItem value="specialty">Change Specialty</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4 pt-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" required />
                        <Label htmlFor="terms" className="text-sm text-gray-600">
                          I agree to the{" "}
                          <Link href="/terms" className="text-emerald-600 hover:text-emerald-700">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="newsletter" />
                        <Label htmlFor="newsletter" className="text-sm text-gray-600">
                          Send me updates about new courses and nursing education resources
                        </Label>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button type="button" variant="outline" onClick={() => setCurrentStep(2)} className="flex-1 h-12">
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
                      >
                        Create Account
                      </Button>
                    </div>
                  </form>
                )}

                {currentStep === 1 && (
                  <>
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <Separator className="w-full" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">Or sign up with</span>
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
                  </>
                )}

                <div className="text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/auth/signin" className="text-emerald-600 hover:text-emerald-700 font-medium">
                    Sign in here
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Benefits/Features */}
          <div className="hidden lg:block">
            <div className="space-y-8">
              <div>
                <Badge className="bg-emerald-100 text-emerald-800 mb-4">
                  <Star className="w-3 h-3 mr-1" />
                  Join 10,000+ Nurses
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Professional Journey</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Join thousands of nursing professionals who are advancing their careers through our comprehensive
                  learning platform.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Free Trial Access</h3>
                    <p className="text-gray-600">
                      Start with a 7-day free trial to explore our courses and find the perfect fit for your learning
                      goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Personalized Learning Path</h3>
                    <p className="text-gray-600">
                      Get course recommendations based on your specialty, experience level, and career goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Secure & Private</h3>
                    <p className="text-gray-600">
                      Your professional information is protected with enterprise-grade security and privacy measures.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur rounded-xl p-6 border border-emerald-100">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-emerald-600">98%</div>
                  <div className="text-sm text-gray-600">Course Completion Rate</div>
                </div>
                <p className="text-gray-700 text-center text-sm">
                  Our engaging, practical courses are designed specifically for busy nursing professionals.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/40 backdrop-blur rounded-lg p-4">
                  <div className="text-xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-600">Expert Courses</div>
                </div>
                <div className="bg-white/40 backdrop-blur rounded-lg p-4">
                  <div className="text-xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Learning Support</div>
                </div>
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
