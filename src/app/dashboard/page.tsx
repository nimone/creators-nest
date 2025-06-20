import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { verifyAccess } from "@/lib/auth.server"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import ChartDemo from "./chart-demo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { prisma } from "@/lib/db.server"

export default async function Dashboard() {
  const { user } = await verifyAccess()
  const supporters = await prisma.donation.findMany({
    where: { creatorId: user.id },
    orderBy: { createdAt: "desc" },
  })
  const totalDonations =
    (
      await prisma.donation.aggregate({
        _sum: { amount: true },
        where: { creatorId: user.id },
      })
    )._sum.amount || 0
  const totalRevenue =
    (
      await prisma.product.aggregate({
        where: { creatorId: user.id },
        _sum: { revenue: true },
      })
    )._sum.revenue || 0
  const totalSales =
    (
      await prisma.product.aggregate({
        where: { creatorId: user.id },
        _sum: { sales: true },
      })
    )._sum.sales || 0
  return (
    <main>
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your creator page today
          </p>
        </div>
        <Link href={`/${user.username}`} target="_blank">
          <Button>
            View Your Page <ExternalLink />
          </Button>
        </Link>
      </div>

      {/* <Tabs
        orientation="vertical"
        defaultValue="overview"
        className="space-y-4"
      > */}
      {/* <div className="w-full overflow-x-auto pb-2">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" disabled>
              Reports
            </TabsTrigger>
            <TabsTrigger value="notifications" disabled>
              Notifications
            </TabsTrigger>
          </TabsList>
        </div> */}
      {/* <TabsContent value="overview" className="space-y-4"> */}
      <section className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Donations
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-muted-foreground h-4 w-4"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{totalDonations}</div>
              <p className="text-muted-foreground text-xs">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-muted-foreground h-4 w-4"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{totalRevenue}</div>
              <p className="text-muted-foreground text-xs">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-muted-foreground h-4 w-4"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {supporters.filter((s) => s.recurring).length}
              </div>
              <p className="text-muted-foreground text-xs">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-muted-foreground h-4 w-4"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{totalSales}</div>
              <p className="text-muted-foreground text-xs">
                +19% from last month
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
          {/* <Card className="col-span-1 lg:col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2"></CardContent>
            </Card> */}
          <div className="col-span-1 lg:col-span-4">
            <ChartDemo />
          </div>
          <Card className="col-span-1 lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Donations</CardTitle>
              <CardDescription>
                You got total {supporters.length} donations this month.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {supporters.slice(0, 5).map((supporter) => (
                <div
                  key={supporter.id}
                  className="flex items-center gap-4 px-4 py-3 bg-accent/40 rounded-md border border-accent"
                >
                  <Avatar className="h-12 w-12 shadow">
                    <AvatarImage alt={supporter.name} />
                    <AvatarFallback className="bg-accent text-primary">
                      {supporter.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 flex gap-2 justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">{supporter.name}</p>
                      <p className="text-xs">{supporter.message}</p>
                    </div>
                    <Badge className="text-sm">₹{supporter.amount}</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* </TabsContent> */}
      {/* </Tabs> */}
    </main>
  )
}
