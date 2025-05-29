"use client"
import { Button } from "@/components/ui/button"
import razorpay from "@/lib/razorpay"
import { LoaderCircle, ShoppingCart } from "lucide-react"
import { useState } from "react"

export default function BuyButton({
  amount,
  productName,
}: {
  amount: number
  productName: string
}) {
  const [loading, setLoading] = useState(false)
  const handlePayment = async () => {
    setLoading(true)
    await razorpay.handlePayment({
      amount,
      description: "Payment for " + productName,
    })
    setLoading(false)
    close?.()
  }
  return (
    <Button size="sm" onClick={handlePayment} disabled={loading}>
      {loading ? <LoaderCircle className="animate-spin" /> : <ShoppingCart />}
      Buy
    </Button>
  )
}
