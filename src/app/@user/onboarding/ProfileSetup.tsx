"use client"

import { useState } from "react"
import UsernameForm from "./UsernameForm"
import ProfileForm from "./ProfileForm"
import { redirect } from "next/navigation"

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
        <UsernameForm submitCallback={(success) => setStep(success ? 2 : 1)} />
      )
    case 2:
      return (
        <ProfileForm
          submitCallback={(success) => {
            if (success) redirect("/")
          }}
          {...user}
          {...(creatorPref || {})}
        />
      )
  }
}
