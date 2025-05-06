"use client"

import { useState } from "react"
import UsernameForm from "./UsernameForm"
import ProfileForm from "./ProfileForm"

interface IProps {
  user: {
    username?: string | null
    name: string
    image?: string | null
  }
  initialStep: number
}

export default function ProfileSetup({ user, initialStep }: IProps) {
  const [step, setStep] = useState(initialStep)

  switch (step) {
    case 1:
      return (
        <UsernameForm submitCallback={(success) => setStep(success ? 2 : 1)} />
      )
    case 2:
      return <ProfileForm {...user} />
  }
}
