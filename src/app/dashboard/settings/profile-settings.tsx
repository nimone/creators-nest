"use client"

import ProfileForm from "@/components/ProfileForm"
import { Button } from "@/components/ui/button"

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
}

export default function ProfileSettings({ user, creatorPref }: IProps) {
  return (
    <ProfileForm
      image={user.image}
      name={user.name}
      type={creatorPref?.type}
      upiAddress={creatorPref?.upiAddress}
      minDonation={creatorPref?.minDonation}
      className="max-w-xl"
      submitButton={(props) => <Button {...props}>Save Changes</Button>}
    />
  )
}
