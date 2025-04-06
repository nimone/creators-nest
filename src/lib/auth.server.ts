import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { PrismaClient } from "@prisma/client"
import { headers } from "next/headers"
import { notFound } from "next/navigation"

const prisma = new PrismaClient()
export const auth = betterAuth({
  user: {
    modelName: "user",
    additionalFields: {
      username: {
        type: "string",
        unique: true,
        required: false,
      },
    },
  },
  database: prismaAdapter(prisma, {
    provider: "sqlite", // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
    async sendResetPassword(data, request) {
      // Send an email to the user with a link to reset their password
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
})

export const verifyAccess = async () => {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session) throw notFound()
  return session
}
