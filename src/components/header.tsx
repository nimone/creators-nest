import { FlowerIcon, Menu } from "lucide-react"
import Link from "next/link"
import UserDropdown from "./UserDropdown"
import { Button } from "./ui/button"
import { User } from "better-auth"

export default function Header({ user }: { user: User | null }) {
  return (
    <header className="sticky top-0 z-20 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <FlowerIcon className="h-7 w-7 text-amber-500" />
          <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Creators Nest
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#creators"
            className="text-sm font-medium hover:text-amber-500 transition-colors"
          >
            Creators
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium hover:text-amber-500 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-amber-500 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-amber-500 transition-colors"
          >
            Testimonials
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <UserDropdown user={user} />
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="link">Login</Button>
              </Link>
              <Link href="/auth/register">
                <Button>Get Started</Button>
              </Link>
            </>
          )}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
