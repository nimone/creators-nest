"use client"
import { PaymentCard } from "@/components/PaymentCard"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { HandCoins } from "lucide-react"
import { useState } from "react"

export default function SupportDialog({
  creator,
}: {
  creator: {
    name: string
    creatorPref: { upiAddress: string; minDonation: number }
  }
}) {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <HandCoins />
          Support
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 border-none bg-none">
        <PaymentCard
          close={() => setOpen(false)}
          creatorInfo={{
            name: creator.name,
            ...creator.creatorPref,
          }}
        />
      </DialogContent>
    </Dialog>
  )
}
