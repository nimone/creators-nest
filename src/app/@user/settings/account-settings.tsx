"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import Form from "next/form"

export function AccountSettings({ user }: { user: any }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  // function onSubmit(data: AccountFormValues) {
  //   setIsLoading(true)
  //   // Simulate API call
  //   setTimeout(() => {
  //     console.log(data)

  //     toast.success("Account settings updated!")
  //     setIsLoading(false)
  //   }, 1000)
  // }

  return (
    <div className="space-y-6">
      <form className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-center">Change Password</h3>
          <Input type="password" name="password" label="Current Password" />
          <Input type="password" name="newPassword" label="New Password" />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Update Password"}
          </Button>
        </div>
      </form>

      <div className="border-t pt-6">
        <h3 className="text-lg font-medium text-destructive">Danger Zone</h3>
        <p className="text-sm text-muted-foreground">
          Permanently delete your account and all of your content. This action
          cannot be undone.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center mt-4">
          <Button
            variant="destructive"
            onClick={() => toast.error("Account deletion is disabled")}
          >
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  )
}
