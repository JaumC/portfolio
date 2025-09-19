import { cn } from "../lib/utils";

export function DotBackgroundDemo({ className, children }: { className?: string, children?: React.ReactNode }) {
  return (
    <div
      className={className}>
      <div
        className={cn(
          "absolute inset-0 z-9 pointer-events-none animate-pulse",
          "lg:[background-size:80px_80px] [background-size:40px_40px]",
          "[background-image:radial-gradient(#03344D_1px,transparent_1px)]"
        )}
      />
      {children}
    </div>
  );
}
