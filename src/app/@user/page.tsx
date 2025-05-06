import { verifyAccess } from "@/lib/auth.server"

export default async function Home() {
  const { user } = await verifyAccess()
  return (
    <main>
      <h1 className="text-4xl font-bold text-black">Welcome {user.name}</h1>
    </main>
  )
}
