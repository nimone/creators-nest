import { Input } from "@/components/ui/input"
import { verifyAccess } from "@/lib/auth.server"
import { prisma } from "@/lib/db.server"

export default async function page() {
  const session = await verifyAccess()
  const user = await prisma.user.findFirst({ where: { id: session.user.id } })
  console.log(user?.name)
  return (
    <main className="h-screen flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Welcome to the Onboarding Page</h1>
        <p className="text-gray-600">Please complete your profile setup.</p>
      </div>
      {/* Add your onboarding form or content here */}
      <div className="flex flex-col items-center justify-center gap-4 mt-8">
        <h2 className="text-xl font-semibold">Profile Setup</h2>
        <p className="text-gray-600">Fill in your details below.</p>
        {/* Add form fields for onboarding here */}
        <form className="flex flex-col gap-4">
          <Input type="text" placeholder="Username" />
        </form>
      </div>
    </main>
  )
}
