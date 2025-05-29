"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import Form from "next/form"
import { IndianRupeeIcon } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function PaymentsSettings() {
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
          <Input
            start={<IndianRupeeIcon size={20} />}
            type="number"
            min={1000}
            defaultValue={1000}
            name="threshold"
            label="Payment Threshold"
          />
          <Input name="account" label="Payout Account" />
          <div className="space-y-1">
            <Label>Payout Time</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first">First of Each Month</SelectItem>
                <SelectItem value="middle">15th of Each Month</SelectItem>
                <SelectItem value="last">Last of Each Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </div>
  )
}
