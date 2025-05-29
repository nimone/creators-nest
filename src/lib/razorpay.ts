import { toast } from "sonner"

const loadRazorpayScript = () =>
  new Promise((resolve) => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.onload = resolve
    document.body.appendChild(script)
  })

const handlePayment = async (payment: {
  amount: number
  description: string
  onSuccess?: () => void
  onFailure?: () => void
}) => {
  await loadRazorpayScript()

  const res = await fetch("/api/payment/initiate", {
    method: "POST",
    body: JSON.stringify({ amount: payment.amount }),
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
    description: payment.description,
    order_id: data.id,
    handler: async function (response: any) {
      const verifyRes = await fetch("/api/payment/status", {
        method: "POST",
        body: JSON.stringify(response),
        headers: { "Content-Type": "application/json" },
      })

      const verifyData = await verifyRes.json()
      if (verifyData.success) {
        payment.onSuccess?.()
        toast.success("Payment Successful")
      } else {
        payment.onFailure?.()
        toast.error("Payment Verification Failed")
      }
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
  rzp.on("payment.failed", () => {
    toast.error("Payment Failed")
    payment.onFailure?.()
  })
  rzp.on("payment.canceled", () => {
    toast.error("Payment Canceled")
    payment.onFailure?.()
  })
}

export default { handlePayment, loadRazorpayScript }
