import { PaymentCard } from "@/components/PaymentCard"
import { prisma } from "@/lib/db.server"
import { notFound } from "next/navigation"

type PageProps = {
  params: {
    username: string
  }
}
export default async function Page({ params }: PageProps) {
  const user = await prisma.user.findFirst({
    where: { username: params.username },
    include: { creatorPref: true },
  })
  if (!user || !user.creatorPref) return notFound()

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <PaymentCard creatorInfo={{ name: user.name, ...user.creatorPref }} />
    </main>
  )
}
