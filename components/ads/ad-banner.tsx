"use client";

interface AdBannerProps {
  className?: string;
  slot?: string;
}

export function AdBanner({ className = "", slot = "top" }: AdBannerProps) {
  return (
    <div className={`w-full h-[100px] bg-card/50 backdrop-blur-sm flex items-center justify-center border-y ${className}`}>
      <div className="text-sm text-muted-foreground">
        Espacio publicitario {slot}
      </div>
    </div>
  );
}