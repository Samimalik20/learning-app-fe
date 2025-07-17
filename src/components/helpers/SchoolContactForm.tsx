"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Phone,
  MessageSquare,
} from "lucide-react";

const formSchema = z.object({
  schoolName: z.string().min(2, "School name is required"),
  schoolEmail: z.string().email("Invalid email"),
  contactPersonName: z.string().min(2, "Contact person name is required"),
  contactPhone: z.string().min(5, "Phone number is required"),
  location: z.string().min(2, "Location is required"),
  schoolSize: z.enum(["small", "medium", "large"], {
    required_error: "School size is required",
  }),
  message: z.string().optional(),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function SchoolContactForm() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      schoolName: "",
      schoolEmail: "",
      contactPersonName: "",
      contactPhone: "",
      location: "",
      schoolSize: "small",
      message: "",
    },
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <FormField
              control={form.control}
              name="schoolName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="School Name"
                      {...field}
                      className="bg-white/90 backdrop-blur-sm border-white/30 text-gray-900 placeholder:text-gray-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="schoolEmail"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="School Email"
                      {...field}
                      className="bg-white/90 backdrop-blur-sm border-white/30 text-gray-900 placeholder:text-gray-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactPersonName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Contact Person Name"
                      {...field}
                      className="bg-white/90 backdrop-blur-sm border-white/30 text-gray-900 placeholder:text-gray-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactPhone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Contact Phone Number"
                      {...field}
                      className="bg-white/90 backdrop-blur-sm border-white/30 text-gray-900 placeholder:text-gray-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Location (City, Country)"
                      {...field}
                      className="bg-white/90 backdrop-blur-sm border-white/30 text-gray-900 placeholder:text-gray-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="schoolSize"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full bg-white/90 backdrop-blur-sm border border-white/30 text-gray-900">
                        <SelectValue placeholder="Select School Size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="small">
                        Small (Less than 300 students)
                      </SelectItem>
                      <SelectItem value="medium">
                        Medium (300–1000 students)
                      </SelectItem>
                      <SelectItem value="large">
                        Large (1000+ students)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormControl>
                    <Textarea
                      rows={3}
                      placeholder="Write your requirements or message"
                      {...field}
                      className="bg-white/90 backdrop-blur-sm border border-white/30 text-gray-900 placeholder:text-gray-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="sm:col-span-2 bg-white text-emerald-600 hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Form>
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
          <Phone className="mr-2 h-4 w-4" />
          Schedule Demo
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          Talk to Sales
        </Button>
      </div>
    </div>
  );
}
