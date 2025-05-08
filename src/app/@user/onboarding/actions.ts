"use server"
import { verifyAccess } from "@/lib/auth.server"
import { prisma } from "@/lib/db.server"
import { validateFormData } from "@/lib/utils"
import { zfd } from "zod-form-data"
import { z } from "zod"

export async function checkUsername(username: string) {
  const usernameSchema = z
    .string()
    .min(3)
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores.",
    })
  const validationResult = usernameSchema.safeParse(username)
  if (!validationResult.success) {
    return {
      available: false,
      valid: false,
      message: validationResult.error.errors[0].message,
    }
  }
  const existingUser = await prisma.user.findFirst({
    where: { username },
    select: { id: true },
  })

  return {
    available: !existingUser,
    valid: true,
    message: existingUser
      ? "Username is already taken."
      : "Username is available.",
  }
}

export async function saveUsername(username: string) {
  const { user } = await verifyAccess()
  const { available, valid } = await checkUsername(username)

  if (!available || !valid) return false

  await prisma.user.update({
    where: { id: user.id },
    data: { username },
  })

  return true
}

const profileSchema = z.object({
  name: zfd.text(),
  type: zfd.text(),
  upiAddress: zfd.text(),
  minDonation: zfd.numeric(),
})

export async function updateProfile(prevState: any, formData: FormData) {
  const { user } = await verifyAccess()
  const { data, errors } = validateFormData(formData, profileSchema)

  if (errors) {
    return { success: false, errors }
  }

  try {
    const { name, ...prefs } = data
    await prisma.user.update({ where: { id: user.id }, data: { name } })
    await prisma.creatorPref.upsert({
      where: { userId: user.id },
      update: { userId: user.id, ...prefs },
      create: { userId: user.id, ...prefs },
    })
    return { success: true, errors }
  } catch (e) {
    console.error(e)
    return { success: false, errors }
  }
}
