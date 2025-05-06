import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

export default function ContinueButton({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <Button
      size="lg"
      className={cn("rounded-full text-lg h-12 !px-6", className)}
      {...props}
    >
      {children ?? (
        <>
          Continue
          <ChevronRight className="!size-7" />
        </>
      )}
    </Button>
  )
}
