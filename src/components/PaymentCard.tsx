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
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

interface IProps {
  creatorInfo: {
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

  const amountInputRef = useRef<HTMLInputElement>(null)

  const generateSuggestedAmounts = (count: number = 3) => {
    const amounts = [creatorInfo.minDonation]
    for (let i = 1; i < count; i++) {
      amounts.push(amounts[i - 1] * 2)
    }
    return amounts
  }

  const loadRazorpayScript = () =>
    new Promise((resolve) => {
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = resolve
      document.body.appendChild(script)
    })

  const handlePayment = async () => {
    setLoading(true)

    await loadRazorpayScript()

    const res = await fetch("/api/payment/initiate", {
      method: "POST",
      body: JSON.stringify({ amount }),
      headers: { "Content-Type": "application/json" },
    })

    const data = await res.json()

    if (!data.id) {
      alert("Failed to create order")
      return
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: data.amount,
      currency: data.currency,
      name: "Creators Nest",
      description: "Donation for " + creatorInfo.name,
      order_id: data.id,
      handler: async function (response: any) {
        const verifyRes = await fetch("/api/payment/status", {
          method: "POST",
          body: JSON.stringify(response),
          headers: { "Content-Type": "application/json" },
        })

        const verifyData = await verifyRes.json()
        if (verifyData.success) toast.success("Payment Successful")
        else toast.error("Payment Verification Failed")
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#f59e0b",
      },
    }

    const rzp = new (window as any).Razorpay(options)
    rzp.open()
    rzp.on("payment.failed", function (response: any) {
      toast.error("Payment Failed")
    })
    rzp.on("payment.canceled", function (response: any) {
      toast.error("Payment Canceled")
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
        <form className="space-y-4">
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

          <Input placeholder="Your Name" />
          <Textarea placeholder="Your Message (if any)" />
        </form>
      </CardContent>
      <CardFooter>
        <Button
          // className="w-full md:hidden"
          className="w-full"
          onClick={
            handlePayment
            // (window.location.href = buildUpiIntent({ ...creatorInfo, amount }))
          }
          disabled={amount < creatorInfo.minDonation || loading}
        >
          Donate ₹{amount}
        </Button>
        {/* <Dialog>
          <DialogTrigger asChild>
            <Button
              className="w-full md:block hidden"
              disabled={amount < creatorInfo.minDonation}
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
        </Dialog> */}
      </CardFooter>
    </Card>
  )
}
