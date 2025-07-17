"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Stethoscope,
  Mail,
  ArrowLeft,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [currentStep, setCurrentStep] = useState(1); // 1: email input, 2: email sent, 3: success
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(2);
    }, 2000);
  };

  const handleResendEmail = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex flex-col">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white/80 backdrop-blur-sm border-b">
        <Link className="flex items-center justify-center" href="/signin">
          <ArrowLeft className="h-4 w-4 mr-2 text-gray-600" />
          <Stethoscope className="h-6 w-6 text-emerald-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">
            Aesthetics
          </span>
        </Link>
        <div className="ml-auto">
          <Link href="/signin">
            <Button variant="ghost" size="sm">
              Back to{" "}
              <span className="ml-1 text-emerald-600 font-semibold">
                Sign in
              </span>
            </Button>
          </Link>
        </div>
      </header>

      <div className=" w-full flex justify-center align-center p-4 ">
        <div className="w-full">
          {/* Left Side - Password Reset Form */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md shadow-2xl border-0 bg-white/95 backdrop-blur">
              {currentStep === 1 && (
                <>
                  <CardHeader className="space-y-1 text-center pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Shield className="h-6 w-6 text-emerald-600" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      Reset Your Password
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Enter your email address and we'll send you a link to
                      reset your password
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <form onSubmit={handleSubmitEmail} className="space-y-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-700"
                        >
                          Email Address
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your registered email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                            required
                            disabled={isLoading}
                          />
                        </div>
                      </div>

                      <Alert className="border-emerald-200 bg-emerald-50">
                        <AlertCircle className="h-4 w-4 text-emerald-600" />
                        <AlertDescription className="text-emerald-800 text-sm">
                          Make sure to use the email address associated with
                          your Aesthetics account.
                        </AlertDescription>
                      </Alert>

                      <Button
                        type="submit"
                        disabled={isLoading || !email}
                        className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-medium disabled:opacity-50"
                      >
                        {isLoading ? (
                          <>
                            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                            Sending Reset Link...
                          </>
                        ) : (
                          "Send Reset Link"
                        )}
                      </Button>
                    </form>

                    <div className="text-center space-y-2">
                      <p className="text-sm text-gray-600">
                        Remember your password?{" "}
                        <Link
                          href="/signin"
                          className="text-emerald-600 hover:text-emerald-700 font-medium"
                        >
                          Sign in here
                        </Link>
                      </p>
                      <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link
                          href="/signup"
                          className="text-emerald-600 hover:text-emerald-700 font-medium"
                        >
                          Sign up for free
                        </Link>
                      </p>
                    </div>
                  </CardContent>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <CardHeader className="space-y-1 text-center pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-emerald-600" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      Check Your Email
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      We've sent a password reset link to your email address
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <Alert className="border-emerald-200 bg-emerald-50">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <AlertDescription className="text-emerald-800">
                        <div className="space-y-2">
                          <p className="font-medium">
                            Email sent successfully!
                          </p>
                          <p className="text-sm">
                            We've sent a password reset link to{" "}
                            <strong>{email}</strong>
                          </p>
                        </div>
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-4 text-sm text-gray-600">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-emerald-600">
                            1
                          </span>
                        </div>
                        <p>
                          Check your email inbox (and spam folder) for a message
                          from Aesthetics
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-emerald-600">
                            2
                          </span>
                        </div>
                        <p>Click the "Reset Password" button in the email</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-emerald-600">
                            3
                          </span>
                        </div>
                        <p>Create a new password and sign in to your account</p>
                      </div>
                    </div>

                    <Alert className="border-amber-200 bg-amber-50">
                      <Clock className="h-4 w-4 text-amber-600" />
                      <AlertDescription className="text-amber-800 text-sm">
                        The reset link will expire in 1 hour for security
                        reasons.
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-3">
                      <Button
                        onClick={handleResendEmail}
                        variant="outline"
                        disabled={isLoading}
                        className="w-full h-12 bg-transparent"
                      >
                        {isLoading ? (
                          <>
                            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                            Resending...
                          </>
                        ) : (
                          <>
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Resend Email
                          </>
                        )}
                      </Button>

                      <Button
                        onClick={() => setCurrentStep(1)}
                        variant="ghost"
                        className="w-full h-12"
                      >
                        Try Different Email
                      </Button>
                    </div>

                    <div className="text-center">
                      <Link
                        href="/signin"
                        className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                      >
                        Back to Sign In
                      </Link>
                    </div>
                  </CardContent>
                </>
              )}
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-4 border-t bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-semibold text-gray-900">
              Aesthetics
            </span>
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
  );
}
