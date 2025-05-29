"use server"

import { prisma } from "@/lib/db.server"
import { z } from "zod"

// Define validation schema
const donationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  amount: z.number().min(1, "Amount must be at least 1"),
  message: z.string().optional(),
  recurring: z.boolean().default(false),
  creatorId: z.string().min(1, "Creator ID is required"),
})

type DonationInput = z.infer<typeof donationSchema>

/**
 * Creates a new donation entry
 */
export async function createDonation(data: DonationInput) {
  try {
    // Validate input data
    const validated = donationSchema.parse(data)

    // Create donation in database
    const donation = await prisma.donation.create({
      data: validated,
    })

    return { success: true, data: donation }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Validation failed",
        details: error.errors,
      }
    }

    console.error("Failed to create donation:", error)
    return {
      success: false,
      error: "Failed to create donation",
    }
  }
}

/**
 * Creates a test donation (for development purposes)
 */
export async function createTestDonation(creatorId: string) {
  return createDonation({
    name: "Test User",
    amount: 100,
    message: "This is a test donation. Keep up the good work!",
    recurring: false,
    creatorId,
  })
}
