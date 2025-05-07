import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ZodSchema } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function validateFormData<T>(formData: FormData, schema: ZodSchema<T>) {
  const obj: Record<string, any> = {}

  for (const [key, value] of formData.entries()) {
    obj[key] = value
  }

  const result = schema.safeParse(obj)

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    }
  }

  return {
    data: result.data,
  }
}
