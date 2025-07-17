import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  Users,
  Award,
  Clock,
  Star,
  CheckCircle,
  Play,
  Heart,
  Shield,
  Stethoscope,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import image from "../../public/nurses-portrait-hospital.jpg";

export default function StudentLandingPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
          <Link className="flex items-center justify-center" href="/">
            <Stethoscope className="h-6 w-6 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              Aesthetics
            </span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
              href="#courses"
            >
              Courses
            </Link>

            <Link
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
              href="#pricing"
            >
              Pricing
            </Link>
          </nav>
          <div className="ml-6 flex gap-2">
            <Link href="/auth/signin">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="auth/signup">
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                Get Started
              </Button>
            </Link>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                      <Heart className="w-3 h-3 mr-1" />
                      Trusted by 10,000+ Nurses
                    </Badge>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                      Advance Your Nursing Career with Expert-Led Online Courses
                    </h1>
                    <p className="max-w-[600px] text-gray-600 md:text-xl">
                      Join thousands of nurses who are advancing their skills
                      and careers through our comprehensive online learning
                      platform. Get certified, stay current, and excel in your
                      nursing practice.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button
                      size="lg"
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      Start Learning Today
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Demo
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span>No setup required</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span>Accredited courses</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span>24/7 support</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    alt="Nursing education platform"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                    height="600"
                    src={image}
                    width="600"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="w-full py-12 md:py-16 bg-white border-b">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="text-3xl font-bold text-emerald-600">
                    10,000+
                  </div>
                  <div className="text-sm text-gray-600">Active Nurses</div>
                </div>
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="text-3xl font-bold text-emerald-600">
                    150+
                  </div>
                  <div className="text-sm text-gray-600">Expert Courses</div>
                </div>
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="text-3xl font-bold text-emerald-600">98%</div>
                  <div className="text-sm text-gray-600">Completion Rate</div>
                </div>
                <div className="flex flex-col items-center space-y-2 text-center">
                  <div className="text-3xl font-bold text-emerald-600">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">Learning Support</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section
            id="features"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <Badge className="bg-emerald-100 text-emerald-800">
                    Features
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Everything You Need to Excel in Nursing
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our platform is designed specifically for nursing
                    professionals, with features that support your learning
                    journey and career advancement.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <BookOpen className="h-10 w-10 text-emerald-600" />
                    <CardTitle>Expert-Led Courses</CardTitle>
                    <CardDescription>
                      Learn from experienced nurses and healthcare professionals
                      with real-world expertise.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Award className="h-10 w-10 text-emerald-600" />
                    <CardTitle>Accredited Certifications</CardTitle>
                    <CardDescription>
                      Earn recognized certifications that advance your career
                      and meet continuing education requirements.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Clock className="h-10 w-10 text-emerald-600" />
                    <CardTitle>Flexible Learning</CardTitle>
                    <CardDescription>
                      Study at your own pace with 24/7 access to course
                      materials, perfect for busy nursing schedules.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Users className="h-10 w-10 text-emerald-600" />
                    <CardTitle>Peer Community</CardTitle>
                    <CardDescription>
                      Connect with fellow nurses, share experiences, and learn
                      from a supportive professional community.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <Shield className="h-10 w-10 text-emerald-600" />
                    <CardTitle>Evidence-Based Content</CardTitle>
                    <CardDescription>
                      Access the latest research and best practices in nursing
                      care and patient safety.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <GraduationCap className="h-10 w-10 text-emerald-600" />
                    <CardTitle>Career Advancement</CardTitle>
                    <CardDescription>
                      Develop specialized skills and knowledge to advance to
                      leadership roles and specialized positions.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>

          {/* Popular Courses Section */}
          <section id="courses" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <Badge className="bg-emerald-100 text-emerald-800">
                    Popular Courses
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Start Your Learning Journey
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Choose from our most popular courses designed to enhance
                    your nursing skills and advance your career.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      alt="Critical Care Nursing"
                      className="object-cover"
                      fill
                      src="https://ik.imagekit.io/yzrrrgg3d/8561681.jpg?updatedAt=1750424569826"
                    />
                    <Badge className="absolute top-2 left-2 bg-emerald-600">
                      Bestseller
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Critical Care Nursing Fundamentals</CardTitle>
                    <CardDescription>
                      Master the essential skills for critical care nursing with
                      hands-on simulations and expert guidance.
                    </CardDescription>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>40 hours</span>
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>4.9 (1,234 reviews)</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-emerald-600">
                        $299
                      </div>
                      <Button>Enroll Now</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      alt="Pediatric Nursing"
                      className="object-cover"
                      fill
                      src="https://ik.imagekit.io/yzrrrgg3d/9807413.jpg?updatedAt=1750754999501"
                    />
                    <Badge className="absolute top-2 left-2 bg-orange-600">
                      New
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Pediatric Nursing Excellence</CardTitle>
                    <CardDescription>
                      Specialized training in pediatric care, family-centered
                      nursing, and child development.
                    </CardDescription>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>35 hours</span>
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>4.8 (892 reviews)</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-emerald-600">
                        $249
                      </div>
                      <Button>Enroll Now</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      alt="Nursing Leadership"
                      className="object-cover"
                      fill
                      src="https://ik.imagekit.io/yzrrrgg3d/7849297.jpg?updatedAt=1750754846794"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Nursing Leadership & Management</CardTitle>
                    <CardDescription>
                      Develop leadership skills, team management, and strategic
                      thinking for nursing supervisors.
                    </CardDescription>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>30 hours</span>
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>4.7 (567 reviews)</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-emerald-600">
                        $199
                      </div>
                      <Button>Enroll Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center">
                <Button variant="outline" size="lg">
                  View All Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section
            id="testimonials"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <Badge className="bg-emerald-100 text-emerald-800">
                    Testimonials
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    What Nurses Are Saying
                  </h2>
                  <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Hear from nursing professionals who have advanced their
                    careers through our platform.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <CardDescription className="text-base">
                      "The critical care course completely transformed my
                      confidence in the ICU. The instructors are incredible and
                      the content is exactly what I needed for my career
                      advancement."
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <span className="text-sm font-semibold text-emerald-700">
                          SM
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold">Sarah Martinez, RN</div>
                        <div className="text-sm text-gray-600">
                          ICU Nurse, General Hospital
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <CardDescription className="text-base">
                      "I was able to transition into pediatric nursing thanks to
                      the comprehensive training. The flexibility allowed me to
                      study while working full-time."
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <span className="text-sm font-semibold text-emerald-700">
                          JL
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold">Jennifer Lee, RN</div>
                        <div className="text-sm text-gray-600">
                          Pediatric Nurse, Children's Medical Center
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <CardDescription className="text-base">
                      "The leadership course prepared me for my promotion to
                      charge nurse. The practical skills and management
                      techniques are invaluable."
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <span className="text-sm font-semibold text-emerald-700">
                          MJ
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold">Michael Johnson, RN</div>
                        <div className="text-sm text-gray-600">
                          Charge Nurse, Regional Medical Center
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                    Ready to Advance Your Nursing Career?
                  </h2>
                  <p className="max-w-[600px] text-emerald-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join thousands of nurses who are already advancing their
                    skills and careers. Start your learning journey today.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="max-w-lg flex-1 bg-white"
                    />
                    <Button type="submit" variant="secondary">
                      Get Started
                    </Button>
                  </form>
                  <p className="text-xs text-emerald-100">
                    Start with a free trial. No credit card required.{" "}
                    <Link
                      href="/terms"
                      className="underline underline-offset-2 hover:text-white"
                    >
                      Terms & Conditions
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-semibold">Aesthetics</span>
          </div>
          <p className="text-xs text-gray-600 sm:ml-4">
            © 2024 Aesthetics. All rights reserved. Empowering nurses worldwide.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4 text-gray-600"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 text-gray-600"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 text-gray-600"
              href="#"
            >
              Contact Support
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
