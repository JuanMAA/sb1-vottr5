"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SearchableSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  items: Array<{
    value: string;
    label: string;
    searchTerms: string[];
  }>;
}

export function SearchableSelect({
  value,
  onValueChange,
  placeholder,
  items
}: SearchableSelectProps) {
  const [open, setOpen] = React.useState(false);

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onValueChange("");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between h-12 relative group bg-background border-border"
        >
          <span className="truncate text-left flex-1 text-base">
            {value
              ? items.find((item) => item.value === value)?.label
              : placeholder}
          </span>
          <div className="flex items-center gap-1">
            {value && (
              <X
                className="h-4 w-4 shrink-0 opacity-50 hover:opacity-100 cursor-pointer transition-opacity"
                onClick={handleClear}
              />
            )}
            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <Command>
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput placeholder={`Buscar...`} className="h-9" />
          </div>
          <CommandEmpty>No se encontraron resultados.</CommandEmpty>
          <CommandGroup className="max-h-[300px] overflow-auto">
            {items.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(currentValue) => {
                  onValueChange(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
                className="flex items-center gap-2"
              >
                <Check
                  className={cn(
                    "h-4 w-4 flex-shrink-0",
                    value === item.value ? "opacity-100" : "opacity-0"
                  )}
                />
                <span className="truncate text-base">{item.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}