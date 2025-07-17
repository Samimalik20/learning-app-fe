"use client";

import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type Option = {
  label: string;
  value: string;
};

interface MultiSelectProps {
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  className?: string;
}

export function MultiSelect({
  options,
  value,
  onChange,
  placeholder = "Select options",
  className,
}: MultiSelectProps) {
  const toggleValue = (val: string) => {
    if (value.includes(val)) {
      onChange(value.filter((v) => v !== val));
    } else {
      onChange([...value, val]);
    }
  };

  const removeValue = (val: string) => {
    onChange(value.filter((v) => v !== val));
  };

  const selectedOptions = options.filter((opt) => value.includes(opt.value));

  return (
    <div className={cn("space-y-2", className)}>
      {/* Selected badges */}
      {selectedOptions.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedOptions.map((opt) => (
            <div
              key={opt.value}
              className="flex items-center bg-muted text-sm px-2 py-1 rounded-full"
            >
              {opt.label}
              <button
                type="button"
                onClick={() => removeValue(opt.value)}
                className="ml-2 text-muted-foreground hover:text-destructive"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Trigger Button */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between"
          >
            {value.length > 0
              ? `${value.length} selected`
              : placeholder}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[250px] p-2">
          <ScrollArea className="h-[200px]">
            {options.map((option) => (
              <div
                key={option.value}
                className="flex items-center space-x-2 px-2 py-1.5 rounded-md hover:bg-muted cursor-pointer"
                onClick={() => toggleValue(option.value)}
              >
                <Checkbox
                  checked={value.includes(option.value)}
                  onCheckedChange={() => toggleValue(option.value)}
                />
                <span className="text-sm">{option.label}</span>
              </div>
            ))}
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </div>
  );
}
