// app/api/phonepe/initiate/route.ts
import { NextRequest, NextResponse } from "next/server"
import { phonepeClient } from "@/lib/phonepe.server"
import { StandardCheckoutPayRequest } from "pg-sdk-node"
import { randomUUID } from "crypto"

export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json()
    const merchantOrderId = randomUUID()
    const redirectUrl = `${process.env.NEXT_PUBLIC_SELF_URL}/phonepe/callback?merchantOrderId=${merchantOrderId}` // Replace with your actual redirect URL

    const request = StandardCheckoutPayRequest.builder()
      .merchantOrderId(merchantOrderId)
      .amount(amount * 100) // Amount in paisa
      .redirectUrl(redirectUrl)
      .build()

    console.log(request)
    const response = await phonepeClient.pay(request)
    console.log(response)
    return NextResponse.json({ url: response.redirectUrl, merchantOrderId })
  } catch (error: any) {
    console.error("Payment initiation error:", error)
    return NextResponse.json(
      { error: "Payment initiation failed" },
      { status: 500 }
    )
  }
}
