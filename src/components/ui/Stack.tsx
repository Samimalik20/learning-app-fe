import { cn } from "@/lib/utils";
import React from "react";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: boolean;
  grow?: boolean;
  fullWidth?: boolean;
}

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const spacingMap = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

export const Stack = ({
  gap = "md",
  align = "start",
  justify = "start",
  wrap = false,
  grow = false,
  fullWidth = false,
  className,
  children,
  ...props
}: StackProps) => {
  const gapClass =
    typeof gap === "number" ? `gap-${gap}` : spacingMap[gap] ?? "gap-4";

  return (
    <div
      className={cn(
        "flex flex-col",
        alignMap[align],
        justifyMap[justify],
        wrap ? "flex-wrap" : "flex-nowrap",
        gapClass,
        grow && "h-full [&>*]:flex-1",
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
