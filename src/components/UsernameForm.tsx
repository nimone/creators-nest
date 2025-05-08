"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CircleUser, LoaderCircle, X, Check } from "lucide-react"
import { ComponentProps, useEffect, useState } from "react"
import { useDebounce } from "@uidotdev/usehooks"
import { cn } from "@/lib/utils"
import { saveUsername, checkUsername } from "../app/@user/onboarding/actions"
import { toast } from "sonner"

interface UsernameFormProps extends React.HTMLProps<HTMLFormElement> {
  submitCallback?: (success: boolean) => void
  submitButton?: (props: ComponentProps<"button">) => React.ReactNode
}

export default function UsernameForm({
  submitCallback,
  submitButton,
  ...props
}: UsernameFormProps) {
  const [username, setUsername] = useState("")
  const [message, setMessage] = useState("")
  const [checkState, setCheckState] = useState<
    "idle" | "checking" | "available" | "unavailable"
  >("idle")
  const [loading, setLoading] = useState(false)
  const debouncedUsername = useDebounce(username, 300)

  const check = async (value: string) => {
    if (!value) {
      setCheckState("idle")
      return
    }
    if (value.length < 3) {
      setCheckState("idle")
      setCheckState("unavailable")
      setMessage("Username must be at least 3 characters long.")
      return
    }
    setCheckState("checking")
    const result = await checkUsername(value)

    if (result.valid && result.available) {
      setCheckState("available")
    } else {
      setCheckState("unavailable")
    }
    setMessage(result.message)
  }

  useEffect(() => {
    check(debouncedUsername)
  }, [debouncedUsername])

  const renderEndButton = () => {
    switch (checkState) {
      case "checking":
        return (
          <Button
            size="icon"
            className="rounded-full h-7 w-7"
            variant="secondary"
          >
            <LoaderCircle className="animate-spin" />
          </Button>
        )
      case "available":
        return (
          <Button
            size="icon"
            className="rounded-full h-7 w-7"
            variant="success"
          >
            <Check />
          </Button>
        )
      case "unavailable":
        return (
          <Button
            size="icon"
            className="rounded-full h-7 w-7"
            variant="destructive"
          >
            <X />
          </Button>
        )
      default:
        return null
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    if (checkState !== "available") {
      console.log("Username is not available.")
      setLoading(false)
      return
    }
    const ok = await saveUsername(username)
    if (ok) {
      toast.success("Username saved successfully")
    } else {
      toast.error("Error saving username.")
    }
    submitCallback?.(ok)
    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      {...props}
      className="flex flex-col items-center gap-4"
    >
      <Input
        start={<CircleUser size={32} />}
        end={renderEndButton()}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="md:text-xl"
        containerClassName="py-2 px-4 max-w-96"
        placeholder="Choose a username"
      />
      <p
        className={cn(
          "text-muted-foreground transition-colors",
          checkState === "available" && "text-success font-medium",
          checkState === "unavailable" && "text-destructive font-medium"
        )}
      >
        {checkState === "idle"
          ? "Your username will be used to identify you on the platform."
          : message}
      </p>
      {submitButton?.({ disabled: checkState !== "available" || loading })}
    </form>
  )
}
