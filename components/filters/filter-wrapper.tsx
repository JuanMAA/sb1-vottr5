"use client";

import { cn } from "@/lib/utils";

interface FilterWrapperProps {
  children: React.ReactNode;
  className?: string;
  rightElement?: React.ReactNode;
}

export function FilterWrapper({ children, className, rightElement }: FilterWrapperProps) {
  return (
    <div className={cn(
      "flex flex-col md:flex-row gap-4 mb-8 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-white/10",
      className
    )}>
      <div className="flex-1 flex flex-col md:flex-row gap-4">
        {children}
      </div>
      {rightElement && (
        <div className="flex items-center justify-end">
          {rightElement}
        </div>
      )}
    </div>
  );
}