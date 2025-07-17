"use client";

import { IErrorResponse } from "@/interfaces/IErrorResponse";
import { QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error: IErrorResponse) => {
        const message =
          error.response?.data?.message || "An unexpected error occurred.";

        toast.error(message);
      },
      onSuccess: (data: any) => {
        const message =
          data?.data?.message || "Operation completed successfully.";
          console.log(message,'message')

        toast.success(message);
      },
    },
  },
});
