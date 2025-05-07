import { verifyAccess } from "@/lib/auth.server"
import ProfileSetup from "./ProfileSetup"
import { prisma } from "@/lib/db.server"

export default async function Page() {
  const { user } = await verifyAccess()
  const creatorPref = await prisma.creatorPref.findFirst({
    where: { userId: user.id },
  })

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to Creators Nest</h1>
      <p className="text-xl text-muted-foreground mb-12 mt-2">
        Let's setup your profile.
      </p>
      <ProfileSetup user={user} creatorPref={creatorPref} />
    </main>
  )
}
