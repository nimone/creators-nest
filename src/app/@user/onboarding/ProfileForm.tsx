import { Input } from "@/components/ui/input"
import {
  IndianRupee,
  PencilIcon,
  UserIcon,
  UserPen,
  Wallet,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ContinueButton from "./ContinueButton"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

interface IProps {
  image?: string | null
  name?: string
}

const CREATOR_TYPES = [
  "Artist",
  "Musician",
  "Podcaster",
  "Streamer",
  "YouTuber or Video Creator",
  "Educator",
  "Blogger",
  "Developer",
  "Designer",
  "Photographer",
  "Writer",
  "Non Profit Community",
  "Other",
]

export default function ProfileForm({ image, name }: IProps) {
  return (
    <form className="w-full max-w-sm space-y-4">
      <Avatar className="relative mx-auto size-28 group">
        <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
          <PencilIcon size={32} className="text-white" />
        </div>
        <AvatarImage src={image ?? undefined} />
        <AvatarFallback>
          <UserIcon size={44} />
        </AvatarFallback>
      </Avatar>
      <Input
        start={<UserPen size={20} />}
        defaultValue={name}
        type="text"
        name="name"
        label="Your Name"
      />
      <div className="grid gap-1">
        <Label htmlFor="theme" className="text-sm font-medium">
          Creator Profile
        </Label>
        <Select>
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
        name="upi"
        label="UPI ID or Number"
        placeholder="You will recieve your donations here"
      />
      <div>
        <Input
          start={<IndianRupee size={20} />}
          type="number"
          name="upi"
          label="Minimum Donation Amount"
          step={50}
          defaultValue={100}
          min={50}
          max={10000}
        />
        <small className="text-muted-foreground transition-colors">
          Users will see mutiples of this amount as suggestions.
        </small>
      </div>
      <ContinueButton className="flex mx-auto" />
    </form>
  )
}
