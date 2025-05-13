// app/api/razorpay/order/route.ts
import { NextRequest, NextResponse } from "next/server"
import { razorpay } from "@/lib/razorpay.server"

export async function POST(req: NextRequest) {
  const { amount } = await req.json()

  const options = {
    amount: amount * 100, // Amount in paise
    currency: "INR",
    receipt: `rcpt_${Date.now()}`,
  }

  try {
    const order = await razorpay.orders.create(options)
    return NextResponse.json(order)
  } catch (err) {
    return NextResponse.json(
      { error: "Order creation failed" },
      { status: 500 }
    )
  }
}
