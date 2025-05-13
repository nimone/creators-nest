// app/phonepe/callback/page.tsx
"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

export default function CallbackPage() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState("Verifying payment...")

  useEffect(() => {
    const merchantOrderId = searchParams.get("merchantOrderId")
    if (merchantOrderId) {
      fetch(`/api/payment/status?merchantOrderId=${merchantOrderId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setStatus("Payment Successful ✅")
          } else {
            setStatus("Payment Failed ❌")
          }
        })
        .catch((error) => {
          console.error("Payment status error:", error)
          setStatus("Error verifying payment")
        })
    }
  }, [searchParams])

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Payment Status</h1>
      <p>{status}</p>
    </div>
  )
}
