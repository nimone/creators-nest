import { FlowerIcon } from "lucide-react"
import Link from "next/link"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 p-4">
      <Link href="/" className="flex items-center gap-2">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <FlowerIcon className="size-6" />
        </div>
        <h4 className="font-semibold text-lg">Creators Nest</h4>
      </Link>
      <div className="w-full max-w-md">{children}</div>
    </main>
  )
}
