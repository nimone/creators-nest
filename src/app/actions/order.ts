"use server"

import { prisma } from "@/lib/db.server"
import { z } from "zod"

// Define validation schema for order creation
const orderSchema = z.object({
  totalAmount: z.number().min(1, "Amount must be at least 1"),
  buyerName: z.string().min(2, "Name must be at least 2 characters"),
  buyerEmail: z.string().email("Invalid email address"),
  buyerPhone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .optional(),
  productId: z.string().min(1, "Product ID is required"),
})

type OrderInput = z.infer<typeof orderSchema>

/**
 * Creates a new order in the database
 */
export async function createOrder(data: OrderInput) {
  try {
    // Validate input data
    const validated = orderSchema.parse(data)

    // Create order in database
    const order = await prisma.order.create({
      data: {
        ...validated,
        status: "confirmed",
      },
    })

    // Update product sales and revenue
    await prisma.product.update({
      where: { id: validated.productId },
      data: {
        sales: { increment: 1 },
        revenue: { increment: validated.totalAmount },
      },
    })

    return { success: true, data: order }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Validation failed",
        details: error.errors,
      }
    }

    console.error("Failed to create order:", error)
    return {
      success: false,
      error: "Failed to create order",
    }
  }
}
