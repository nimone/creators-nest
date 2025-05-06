import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "./label"

export interface InputProps extends React.ComponentProps<"input"> {
  start?: React.ReactNode
  end?: React.ReactNode
  label?: string
  containerClassName?: string
}

function Input({
  className,
  containerClassName,
  start,
  end,
  type,
  label,
  ...props
}: InputProps) {
  const id = React.useId()
  const input = (
    <div
      className={cn(
        "flex items-center rounded-md border border-input focus-within:outline-none focus-within:ring-2 focus-within:border-ring focus-within:ring-ring/50",
        start && "pl-2",
        end && "pr-2",
        containerClassName
      )}
    >
      {start}
      <input
        id={props.id ?? id}
        type={type}
        data-slot="input"
        className={cn(
          "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
      />
      {end}
    </div>
  )

  if (label)
    return (
      <div className="space-y-1.5">
        <Label htmlFor={props.id ?? id}>{label}</Label>
        {input}
      </div>
    )
  return input
}

export { Input }
