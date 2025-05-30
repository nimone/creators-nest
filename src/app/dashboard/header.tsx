"use client"

import UserDropdown from "@/components/UserDropdown"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  FlowerIcon,
  HeartIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  StoreIcon,
} from "lucide-react"
import { CREATOR_TYPES } from "../constants"

interface IProps {
  user: {
    name: string
    email: string
    image?: string | null
    creatorType?: (typeof CREATOR_TYPES)[number]
  }
}

export default function Header({ user }: IProps) {
  const pathname = usePathname()
  return (
    <div
      className={cn(
        "border-b border-black/5 sticky top-0 z-50 bg-background",
        ["/onboarding"].includes(pathname) && "hidden"
      )}
    >
      <header className="container mx-auto flex px-4 py-2 justify-between items-center">
        <div className="flex items-center gap-2">
          <FlowerIcon className="h-6 w-6 text-amber-500" />
          <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Creators Nest
          </span>
        </div>
        <nav className="hidden items-center space-x-4 md:flex lg:space-x-6">
          {topNav.map(({ icon, title, href }) => {
            const absHref = "/dashboard" + href
            return (
              <Link
                key={`${title}-${href}`}
                href={absHref}
                className={cn(
                  "flex gap-2 items-center [&_svg]:size-4",
                  "hover:text-primary/80 text-sm font-medium transition-colors",
                  pathname === absHref
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {icon}
                {title}
              </Link>
            )
          })}
        </nav>
        <UserDropdown user={user} />
      </header>
    </div>
  )
}

const topNav = [
  {
    title: "Dashboard",
    href: "",
    icon: <LayoutDashboardIcon />,
  },
  {
    title: "Supporters",
    href: "/supporters",
    icon: <HeartIcon />,
  },
  {
    title: "Store",
    href: "/store",
    icon: <StoreIcon />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <SettingsIcon />,
  },
]
