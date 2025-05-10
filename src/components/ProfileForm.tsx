"use client"
import { Input } from "@/components/ui/input"
import {
  IndianRupee,
  PencilIcon,
  UserIcon,
  UserPen,
  Wallet,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { updateProfile } from "../app/@user/onboarding/actions"
import { ComponentProps, useActionState, useEffect } from "react"
import { toast } from "sonner"
import Form from "next/form"
import { CREATOR_TYPES } from "@/app/constants"
import { cn } from "@/lib/utils"

interface IProps {
  image?: string | null
  name?: string
  type?: string
  upiAddress?: string
  minDonation?: number
  submitCallback?: (success: boolean) => void
  submitButton?: (props: ComponentProps<"button">) => React.ReactNode
  className?: string
}

export default function ProfileForm({
  submitCallback,
  submitButton,
  className,
  ...defaultVal
}: IProps) {
  const [state, formAction, pending] = useActionState(updateProfile, {
    success: false,
    errors: undefined,
  })

  useEffect(() => {
    if (pending) {
      toast.loading("Saving your profile...", { id: "loading" })
      return
    }
    if (state.success) {
      toast.success("Profile updated!")
      toast.dismiss("loading")
      submitCallback?.(true)
    } else if (state.errors) {
      toast.error("Please fill with valid data")
      console.log(state.errors)
      toast.dismiss("loading")
    }
  }, [state, pending])

  return (
    <Form
      className={cn("w-full max-w-sm space-y-4", className)}
      action={formAction}
    >
      <Avatar className="relative mx-auto size-28 group">
        <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
          <PencilIcon size={32} className="text-white" />
        </div>
        <AvatarImage src={defaultVal.image ?? undefined} />
        <AvatarFallback>
          <UserIcon size={44} />
        </AvatarFallback>
      </Avatar>
      <Input
        start={<UserPen size={20} />}
        defaultValue={defaultVal.name}
        type="text"
        name="name"
        label="Your Name"
        required
      />
      <div className="grid gap-1">
        <Label htmlFor="type" className="text-sm font-medium">
          Creator Profile
        </Label>
        <Select name="type" defaultValue={defaultVal.type} required>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Your Profile Type" />
          </SelectTrigger>
          <SelectContent>
            {CREATOR_TYPES.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Input
        start={<Wallet size={20} />}
        type="text"
        name="upiAddress"
        label="UPI ID or Number"
        placeholder="You will recieve your donations here"
        defaultValue={defaultVal.upiAddress}
        required
      />
      <div>
        <Input
          start={<IndianRupee size={20} />}
          type="number"
          name="minDonation"
          label="Minimum Donation Amount"
          step={50}
          min={50}
          max={10000}
          defaultValue={defaultVal.minDonation || 100}
          required
        />
        <small className="text-muted-foreground transition-colors">
          Users will see mutiples of this amount as suggestions.
        </small>
      </div>
      {submitButton?.({
        disabled: pending,
      })}
    </Form>
  )
}
