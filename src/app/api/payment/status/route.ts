// app/api/phonepe/status/route.ts
import { NextRequest, NextResponse } from "next/server"
import { phonepeClient } from "@/lib/phonepe.server"

export async function GET(req: NextRequest) {
  const merchantOrderId = req.nextUrl.searchParams.get("merchantOrderId")
  if (!merchantOrderId) {
    return NextResponse.json(
      { error: "Missing merchantOrderId" },
      { status: 400 }
    )
  }

  try {
    const response = await phonepeClient.getOrderStatus(merchantOrderId)
    return NextResponse.json({
      success: response.state === "COMPLETED",
      data: response,
    })
  } catch (error: any) {
    console.error("Payment status error:", error)
    return NextResponse.json(
      { error: "Failed to fetch payment status" },
      { status: 500 }
    )
  }
}
