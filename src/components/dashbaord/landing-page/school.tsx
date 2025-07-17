import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Users,
  Megaphone,
  GraduationCap,
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Zap,
  TrendingUp,
  Globe,
  Phone,
  MessageSquare,
  Play,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import SchoolContactForm from "@/components/helpers/SchoolContactForm";

export default function SchoolLandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <span className="ml-3 text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Aesthetics
          </span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-emerald-600 transition-all duration-300 hover:scale-105"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-emerald-600 transition-all duration-300 hover:scale-105"
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-emerald-600 transition-all duration-300 hover:scale-105"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-emerald-600 transition-all duration-300 hover:scale-105"
          >
            Contact
          </Link>
        </nav>
        <div className="ml-8 flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-emerald-200 hover:bg-emerald-50 transition-all duration-300 bg-transparent"
          >
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full  md:py-16 lg:py-16 xl:py-16 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%2310b981%22 fillOpacity%3D%220.05%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%224%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border-emerald-200 hover:from-emerald-200 hover:to-teal-200 transition-all duration-300">
                    <Zap className="h-3 w-3 mr-1" />
                    Trusted by 500+ Schools Worldwide
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl/none">
                    <span className="bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent">
                      Complete School
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Management Platform
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 text-lg md:text-xl leading-relaxed">
                    Transform your educational institution with our
                    comprehensive marketplace platform. Seamlessly manage
                    courses, teachers, students, and campaigns with cutting-edge
                    technology.
                  </p>
                </div>

                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 text-lg px-8 py-6 bg-transparent"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="p-1 bg-emerald-100 rounded-full">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="font-medium">Free 30-day trial</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="p-1 bg-emerald-100 rounded-full">
                      <Shield className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="font-medium">Enterprise security</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="p-1 bg-emerald-100 rounded-full">
                      <Clock className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="font-medium">24/7 support</span>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-3xl opacity-20 transform rotate-6"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-emerald-100">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    width="500"
                    height="400"
                    alt="School Management Dashboard"
                    className="rounded-xl shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Live Demo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-16 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border-emerald-200 text-sm px-4 py-2">
                Our Services
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
                  Everything Your School Needs
                </span>
              </h2>
              <p className="max-w-[900px] text-gray-600 text-lg md:text-xl leading-relaxed">
                Our comprehensive platform provides all the tools you need to
                manage your educational institution efficiently and effectively
                with modern technology.
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-8">
                <Card className="group border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-emerald-50/30">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <BookOpen className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                          Course Management
                        </CardTitle>
                        <CardDescription className="text-emerald-600 font-medium text-base">
                          Comprehensive curriculum control
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Create, organize, and manage courses with advanced tools.
                      Track student progress, assign materials, and maintain
                      detailed academic records with powerful analytics.
                    </p>
                    <div className="grid gap-3">
                      {[
                        "Curriculum planning & scheduling",
                        "Assignment & grade management",
                        "Progress tracking & analytics",
                        "Resource library management",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 text-sm"
                        >
                          <div className="p-1 bg-emerald-100 rounded-full">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                          </div>
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="group border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-teal-50/30">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Users className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                          Teacher Management
                        </CardTitle>
                        <CardDescription className="text-emerald-600 font-medium text-base">
                          Streamlined staff administration
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Efficiently manage your teaching staff with comprehensive
                      profiles, advanced scheduling tools, and detailed
                      performance tracking systems.
                    </p>
                    <div className="grid gap-3">
                      {[
                        "Staff profiles & credentials",
                        "Schedule & workload management",
                        "Performance evaluation tools",
                        "Professional development tracking",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 text-sm"
                        >
                          <div className="p-1 bg-emerald-100 rounded-full">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                          </div>
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="group border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-emerald-50/30">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <GraduationCap className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                          Student Management
                        </CardTitle>
                        <CardDescription className="text-emerald-600 font-medium text-base">
                          Complete student lifecycle
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Manage student enrollment, track academic progress, and
                      maintain comprehensive records from admission to
                      graduation with intelligent insights.
                    </p>
                    <div className="grid gap-3">
                      {[
                        "Enrollment & admission management",
                        "Academic records & transcripts",
                        "Parent communication portal",
                        "Behavioral tracking & support",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 text-sm"
                        >
                          <div className="p-1 bg-emerald-100 rounded-full">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                          </div>
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="group border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-teal-50/30">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-teal-600 to-emerald-500 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Megaphone className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                          Campaign Management
                        </CardTitle>
                        <CardDescription className="text-emerald-600 font-medium text-base">
                          Effective outreach & marketing
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Create and manage sophisticated marketing campaigns, track
                      enrollment drives, and communicate effectively with your
                      school community.
                    </p>
                    <div className="grid gap-3">
                      {[
                        "Multi-channel communication",
                        "Enrollment campaign tracking",
                        "Event management & promotion",
                        "Social media integration",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 text-sm"
                        >
                          <div className="p-1 bg-emerald-100 rounded-full">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                          </div>
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-emerald-50/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border-emerald-200 text-sm px-4 py-2">
                <Globe className="h-4 w-4 mr-2" />
                Global Impact
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent">
                  Trusted by Schools Worldwide
                </span>
              </h2>
              <p className="max-w-[700px] text-gray-600 text-lg md:text-xl leading-relaxed">
                Join thousands of educational institutions that have transformed
                their operations and achieved remarkable results with our
                platform.
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-4 mb-12">
              {[
                {
                  number: "500+",
                  label: "Schools",
                  desc: "Active institutions",
                  icon: GraduationCap,
                },
                {
                  number: "50K+",
                  label: "Students",
                  desc: "Managed successfully",
                  icon: Users,
                },
                {
                  number: "98%",
                  label: "Satisfaction",
                  desc: "Customer rating",
                  icon: Award,
                },
                {
                  number: "24/7",
                  label: "Support",
                  desc: "Always available",
                  icon: Clock,
                },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="text-center p-6 border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-emerald-50/30"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-xl font-semibold text-gray-900">
                      {stat.label}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.desc}</div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-700 ml-2">
                  4.9/5
                </span>
              </div>
              <p className="text-gray-600">
                Based on 200+ verified reviews from school administrators
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fillOpacity%3D%220.1%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%224%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Ready to Get Started?
                </Badge>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
                  Transform Your School Today
                </h2>
                <p className="mx-auto max-w-[700px] text-emerald-100 text-lg md:text-xl leading-relaxed">
                  Join the growing community of schools that have streamlined
                  their operations and improved educational outcomes with our
                  comprehensive platform.
                </p>
              </div>

              {/* <div className="w-full max-w-md space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <form className="flex gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your school email"
                      className="flex-1 bg-white/90 backdrop-blur-sm border-white/30 text-gray-900 placeholder:text-gray-600"
                    />
                    <Button
                      type="submit"
                      className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                  <div className="flex items-center justify-center gap-6 mt-4 text-sm text-emerald-100">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Free 30-day trial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span>No credit card required</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                  >
                    <span className="mr-2">📞</span>
                    Schedule Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                  >
                    <span className="mr-2">💬</span>
                    Talk to Sales
                  </Button>
                </div>
              </div> */}

              <SchoolContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Aesthetics
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering educational institutions worldwide with comprehensive
                management solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Product</h3>
              <div className="space-y-2 text-gray-400">
                <Link
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  Security
                </Link>
                <Link
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  Integrations
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Support</h3>
              <div className="space-y-2 text-gray-400">
                <Link
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  Help Center
                </Link>
                <Link
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  Training
                </Link>
                <Link
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  Status
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Company</h3>
              <div className="space-y-2 text-gray-400">
                <Link
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  Press
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Aesthetics. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
