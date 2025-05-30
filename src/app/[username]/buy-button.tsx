"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import PurchaseDialog from "./purchase-dialog"
import { createOrder } from "../actions/order"
import { toast } from "sonner"
import razorpay from "@/lib/razorpay"

interface BuyButtonProps {
  productName: string
  amount: number
  productId: string
}

export default function BuyButton({
  productName,
  amount,
  productId,
}: BuyButtonProps) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleProceedToPayment = async (formData: any) => {
    setIsProcessing(true)

    try {
      // Here you would normally integrate with a payment gateway
      console.log("Processing payment for:", {
        product: productName,
        amount,
        customer: formData,
      })
      await razorpay.handlePayment({
        amount,
        description: "Purchase for " + productName,
        user: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        onSuccess: async () => {
          console.log("Payment successful createing donation...")
          const result = await createOrder({
            totalAmount: amount,
            buyerName: formData.name,
            buyerEmail: formData.email,
            buyerPhone: formData.phone,
            productId,
          })

          if (!result.success) {
            throw new Error(result.error || "Failed to create order")
          }

          // Close dialog and show success message
          setDialogOpen(false)
          toast.success("Purchase Successful!", {
            description: `Thank you for purchasing ${productName}. You'll receive download instructions via email.`,
          })
        },
      })

      // Create order in database
    } catch (error) {
      toast.error("Payment Failed", {
        description: "We couldn't process your payment. Please try again.",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <>
      <Button
        onClick={() => setDialogOpen(true)}
        className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0"
        disabled={isProcessing}
      >
        {isProcessing ? "Processing..." : "Buy"}
        {!isProcessing && <ShoppingCart className="ml-2 h-4 w-4" />}
      </Button>

      <PurchaseDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        productName={productName}
        amount={amount}
        onProceedToPayment={handleProceedToPayment}
      />
    </>
  )
}
