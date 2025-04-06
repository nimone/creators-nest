"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { DialogDescription } from "@radix-ui/react-dialog"

export function PaymentCard() {
  const [amount, setAmount] = useState(50)
  const [upiIntent, setUpiIntent] = useState<string | undefined>()

  const creatorInfo = {
    upiAddress: "nimo@apl",
    // upiAddress: "8368036902@upi", // using phone number
    name: "Nishant",
    minAmount: 50,
  }

  const buildUpiIntent = ({
    upiAddress,
    amount,
    name,
  }: {
    // upiAddress: `${string}@${string}`
    upiAddress: string
    amount: number
    name?: string
  }) =>
    `upi://pay?pa=${upiAddress}&pn=${name}&cu=INR&am=${amount}&tn=Support or Donation`
  // `upi://pay?pa=${upiAddress}&pn=${name}&cu=INR&am=${amount}&tn=Support or Donation&url=${encodeURIComponent(
  //   "https://webhook.site/b884cf48-e85c-4b34-9606-c869bd85c0e2"
  // )}`
  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <CardTitle>Support {creatorInfo.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="flex justify-center">
            <ToggleGroup
              variant="outline"
              type="single"
              value={amount.toString()}
              onValueChange={(v) => setAmount(parseInt(v))}
            >
              <ToggleGroupItem value="50" className="text-xl p-6">
                ₹50
              </ToggleGroupItem>
              <ToggleGroupItem value="100" className="text-xl p-6">
                ₹100
              </ToggleGroupItem>
              <ToggleGroupItem value="200" className="text-xl p-6">
                ₹200
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {amount < creatorInfo.minAmount ? (
            <p className="text-center text-destructive">
              Please enter at least ₹{creatorInfo.minAmount}
            </p>
          ) : (
            <p className="text-center text-muted-foreground">
              or enter an amount
            </p>
          )}
          <div className="p-4 border-2 border-dashed border-green-500/40 rounded-xl focus-within:bg-green-500/5">
            <div
              className={cn(
                "flex justify-center items-center text-6xl font-light transition-all",
                amount <= 0 ? "text-muted-foreground" : "text-green-800"
              )}
            >
              <span>₹</span>
              <input
                className="no-decoration bg-transparent focus:outline-none"
                type="number"
                style={{ width: amount.toString().length + "ch" }}
                name="amount"
                value={amount.toString()}
                onChange={(e) => setAmount(Number(e.target.value))}
                autoComplete="off"
                required
              />
            </div>
          </div>

          <Input placeholder="Your Name" />
          <Textarea placeholder="Your Message (if any)" />
        </form>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full md:hidden"
          onClick={() =>
            (window.location.href = buildUpiIntent({ ...creatorInfo, amount }))
          }
          disabled={amount < creatorInfo.minAmount}
        >
          Donate ₹{amount}
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="w-full md:block hidden"
              disabled={amount < creatorInfo.minAmount}
              onClick={() =>
                setUpiIntent(buildUpiIntent({ ...creatorInfo, amount }))
              }
            >
              Donate ₹{amount}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Scan This QR Code</DialogTitle>
              <DialogDescription>
                Open your UPI app and scan this QR code to donate.
              </DialogDescription>
              {upiIntent && (
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
                    upiIntent
                  )}`}
                  alt="QR Code"
                />
              )}
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
