import { FlowerIcon } from "lucide-react"
import Link from "next/link"

export default function Footer({}) {
  return (
    <footer className="w-full border-t border-amber-200 bg-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-2">
          <FlowerIcon className="h-6 w-6 text-amber-500" />
          <span className="text-lg font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Creators Nest
          </span>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Creators Nest. All rights reserved.
          Made with ❤️ for creators.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-amber-500 transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-amber-500 transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="text-sm text-muted-foreground hover:text-amber-500 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
