"use client"

import { useState } from "react"
import UsernameForm from "@/components/UsernameForm"
import ProfileForm from "@/components/ProfileForm"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface IProps {
  user: {
    username?: string | null
    name: string
    image?: string | null
  }
  creatorPref?: {
    type: string
    upiAddress: string
    minDonation: number
  } | null
  initialStep?: number
}

export default function ProfileSetup({
  user,
  creatorPref,
  initialStep = 1,
}: IProps) {
  const [step, setStep] = useState(initialStep)

  switch (step) {
    case 1:
      return (
        <UsernameForm
          submitButton={(props) => <ContinueButton {...props} />}
          submitCallback={(success) => setStep(success ? 2 : 1)}
        />
      )
    case 2:
      return (
        <ProfileForm
          submitCallback={(success) => {
            if (success) redirect("/dashboard")
          }}
          submitButton={(props) => (
            <ContinueButton className="flex mx-auto" {...props} />
          )}
          {...user}
          {...(creatorPref || {})}
        />
      )
  }
}

function ContinueButton({
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
