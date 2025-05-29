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
import { FormEvent, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import razorpay from "@/lib/razorpay"
import { createDonation } from "@/app/actions/donation"

interface IProps {
  creatorInfo: {
    id: string
    upiAddress: string
    name: string
    minDonation: number
  }
  close?: () => void
}
export function PaymentCard({ creatorInfo, close }: IProps) {
  const [amount, setAmount] = useState(creatorInfo.minDonation)
  const [upiIntent, setUpiIntent] = useState<string | undefined>()
  const [loading, setLoading] = useState(false)

  console.log(creatorInfo)
  const amountInputRef = useRef<HTMLInputElement>(null)

  const generateSuggestedAmounts = (count: number = 3) => {
    const amounts = [creatorInfo.minDonation]
    for (let i = 1; i < count; i++) {
      amounts.push(amounts[i - 1] * 2)
    }
    return amounts
  }
  const handlePayment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const message = formData.get("message") as string
    const recurring = formData.get("type") === "recurring"

    setLoading(true)
    await razorpay.handlePayment({
      amount,
      description: "Donation for " + creatorInfo.name,
      onSuccess: async () => {
        console.log("Payment successful createing donation...")
        await createDonation({
          name,
          message,
          amount,
          creatorId: creatorInfo.id,
          recurring,
        })
      },
    })
    setLoading(false)
    close?.()
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
        <form className="space-y-4" method="post" onSubmit={handlePayment}>
          <div className="flex justify-center">
            <ToggleGroup
              variant="outline"
              type="single"
              value={amount.toString()}
              onValueChange={(v) => setAmount(parseInt(v))}
            >
              {generateSuggestedAmounts().map((amt) => (
                <ToggleGroupItem
                  key={amt}
                  value={amt.toString()}
                  className={cn(
                    "text-xl p-6",
                    amount === amt && "!text-primary"
                  )}
                >
                  ₹{amt}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          {amount < creatorInfo.minDonation ? (
            <p className="text-center text-destructive">
              Please enter at least ₹{creatorInfo.minDonation}
            </p>
          ) : (
            <p className="text-center text-muted-foreground">
              or enter an amount
            </p>
          )}
          <div
            onClick={() => amountInputRef.current?.focus()}
            className="p-4 border-2 border-dashed border-green-500/40 rounded-xl focus-within:bg-green-500/10! hover:bg-green-500/5 cursor-pointer"
          >
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
                ref={amountInputRef}
                onFocus={(e) => e.target.select()}
                required
              />
            </div>
          </div>

          <Input name="name" placeholder="Your Name" required />
          <Textarea name="message" placeholder="Your Message (if any)" />
          <div className="w-full grid grid-cols-2 gap-2 mt-8">
            <Button
              variant="secondary"
              name="type"
              value="recurring"
              disabled={amount < creatorInfo.minDonation || loading}
            >
              Donate ₹{amount} Monthly
            </Button>
            <Button
              name="type"
              value="one-time"
              // className="w-full md:hidden"
              // (window.location.href = buildUpiIntent({ ...creatorInfo, amount }))
              disabled={amount < creatorInfo.minDonation || loading}
            >
              Donate ₹{amount}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
