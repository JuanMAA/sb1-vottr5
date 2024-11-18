"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({ value, onChange, placeholder, className }: SearchInputProps) {
  return (
    <div className={`relative flex-1 ${className}`}>
      <Search className="absolute left-2 top-2.5 h-5 w-5 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder || "Buscar..."}
        className="pl-9 bg-background border-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}