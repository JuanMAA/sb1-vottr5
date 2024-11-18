"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface PlayerCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkHref: string;
}

export function PlayerCard({ icon: Icon, title, description, linkHref }: PlayerCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center">
        <Icon className="w-10 h-10 text-red-600 mb-4" />
        <h3 className="text-lg font-bold mb-2 text-center">{title}</h3>
        <p className="text-muted-foreground mb-4 text-center">{description}</p>
        <Link href={linkHref} className="w-full">
          <Button variant="outline" className="w-full">
            Ver Más
          </Button>
        </Link>
      </div>
    </Card>
  );
}