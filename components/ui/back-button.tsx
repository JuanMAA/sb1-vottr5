"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface BackButtonProps {
  href: string;
  label?: string;
}

export function BackButton({ href, label = "Volver" }: BackButtonProps) {
  return (
    <Link href={href}>
      <Button variant="ghost" className="mb-6">
        <ChevronLeft className="w-4 h-4 mr-2" />
        {label}
      </Button>
    </Link>
  );
}