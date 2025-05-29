import { verifyAccess } from "@/lib/auth.server"
import Header from "./header"
import { prisma } from "@/lib/db.server"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = await verifyAccess()
  const creatorPref = await prisma.creatorPref.findFirst({
    where: { userId: user.id },
  })

  return (
    <div className="bg-gradient-to-t from-amber-50 to-white min-h-screen">
      <Header user={{ ...user, creatorType: creatorPref?.type }} />
      <div className="mx-auto container px-4 py-6">{children}</div>
    </div>
  )
}
