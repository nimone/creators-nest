"use client"

import UserDropdown from "@/components/UserDropdown"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
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
    <header
      className={cn(
        "flex px-4 py-2 justify-between items-center",
        ["/onboarding"].includes(pathname) && "hidden"
      )}
    >
      <nav className="hidden items-center space-x-4 md:flex lg:space-x-6">
        {topNav.map(({ icon, title, href }) => (
          <Link
            key={`${title}-${href}`}
            href={href}
            className={cn(
              "flex gap-2 items-center [&_svg]:size-4",
              "hover:text-primary/80 text-sm font-medium transition-colors",
              pathname === href ? "text-primary" : "text-muted-foreground"
            )}
          >
            {icon}
            {title}
          </Link>
        ))}
      </nav>
      <UserDropdown user={user} />
    </header>
  )
}

const topNav = [
  {
    title: "Dashboard",
    href: "/",
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
