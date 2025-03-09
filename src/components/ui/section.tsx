import React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Section({
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "w-full py-12 md:py-24 lg:py-32",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}

export function SectionHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("space-y-4 text-center mb-12", className)}
      {...props}
    />
  )
}

export function SectionTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl",
        className
      )}
      {...props}
    />
  )
}

export function SectionSubtitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "mx-auto max-w-[700px] text-muted-foreground md:text-xl",
        className
      )}
      {...props}
    />
  )
}

export function SectionContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto max-w-[1200px] px-6", className)}
      {...props}
    />
  )
}

export function HeroSection({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn(
        "w-full min-h-[70vh] flex flex-col items-center justify-center gradient-bg py-20",
        className
      )}
      {...props}
    />
  )
}
