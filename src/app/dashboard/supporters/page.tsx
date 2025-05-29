import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ChevronLeft,
  ChevronRight,
  Coffee,
  Heart,
  IndianRupee,
  Search,
  Star,
  Users,
} from "lucide-react"
import { prisma } from "@/lib/db.server"
import { verifyAccess } from "@/lib/auth.server"

export default async function SupportersPage() {
  const { user } = await verifyAccess()
  const supporters = await prisma.donation.findMany({
    where: { creatorId: user.id },
    orderBy: { createdAt: "desc" },
  })
  const totalDonations = supporters.reduce(
    (acc, supporter) => acc + supporter.amount,
    0
  )
  const topDonator = supporters.reduce(
    (max, supporter) => (supporter.amount > max.amount ? supporter : max),
    { amount: 0, name: "None" }
  )
  return (
    <div>
      <header className="space-y-2 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Your Supporters</h1>
        <p className="text-muted-foreground">
          View and manage your supporters on Creators Nest
        </p>
      </header>
      {/* Supporters content */}
      <main className="space-y-12">
        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Supporters
              </CardTitle>
              <Users className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{supporters.length}</div>
              <p className="text-xs text-muted-foreground">Lifetime total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Monthly Members
              </CardTitle>
              <Heart className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {supporters.filter((s) => s.recurring).length}
              </div>
              <p className="text-xs text-muted-foreground">
                Recurring supporters
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Donations
              </CardTitle>
              <IndianRupee className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{totalDonations}</div>
              <p className="text-xs text-muted-foreground">Lifetime total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Top Supporter
              </CardTitle>
              <Star className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{topDonator.amount}</div>
              <p className="text-xs text-muted-foreground">{topDonator.name}</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs and filters */}
        <div>
          <Tabs defaultValue="all" className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Select defaultValue="recent">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="amount-high">
                    Amount (High to Low)
                  </SelectItem>
                  <SelectItem value="amount-low">
                    Amount (Low to High)
                  </SelectItem>
                  <SelectItem value="total-high">
                    Total Support (High to Low)
                  </SelectItem>
                </SelectContent>
              </Select>
              <TabsList>
                <TabsTrigger value="all">All Supporters</TabsTrigger>
                <TabsTrigger value="recurring">Monthly Members</TabsTrigger>
                <TabsTrigger value="one-time">One-time</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search supporters..."
                    className="pl-8 w-full sm:w-[200px]"
                  />
                </div>

                {/* <Button
                  variant="outline"
                  size="icon"
                  className="border-amber-200 hover:bg-amber-100"
                >
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button> */}
              </div>
            </div>
            <p className="text-sm text-center text-muted-foreground">
              Showing 10 of 247 donations
            </p>
            <div className="grid grid-cols-4 gap-4">
              <section>
                <Card>
                  <CardHeader>
                    <CardTitle>Your Supporters</CardTitle>
                    <CardDescription>
                      Total {supporters.length} supporters have donated ₹
                      {totalDonations}.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {supporters.map((supporter) => (
                      <div
                        key={supporter.id}
                        className="flex items-center gap-4 px-4 py-3 bg-accent/40 rounded-md border border-accent"
                      >
                        <Avatar className="h-8 w-8 shadow">
                          <AvatarImage alt={supporter.name} />
                          <AvatarFallback className="bg-accent text-sm text-primary">
                            {supporter.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 flex gap-2 justify-between items-center">
                          <p className="text-sm font-medium">
                            {supporter.name}
                          </p>
                          <Badge className="text-sm">
                            Total: ₹{supporter.amount}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </section>
              <section className="col-span-3">
                <TabsContent value="all" className="space-y-4">
                  {/* Timeline of supporters */}
                  <div className="space-y-4">
                    {supporters.map((supporter) => (
                      <Card
                        key={supporter.id}
                        className="flex-row py-4 pr-6 items-center justify-between border-primary/40"
                      >
                        <div>
                          <CardHeader>
                            <div className="flex gap-4 items-center">
                              <Avatar className="h-10 w-10">
                                <AvatarImage alt={supporter.name} />
                                <AvatarFallback className="bg-accent text-primary">
                                  {supporter.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex gap-2 items-center">
                                  <CardTitle>{supporter.name}</CardTitle>
                                  <p className="truncate">
                                    {supporter.recurring
                                      ? "donating"
                                      : "donated"}{" "}
                                    ₹{supporter.amount}{" "}
                                    {supporter.recurring ? "every month" : ""}
                                  </p>
                                </div>
                                <CardDescription>
                                  {supporter.createdAt.toLocaleDateString()}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>{supporter.message}</CardContent>
                        </div>
                        <div className="text-3xl text-success">
                          ₹{supporter.amount}
                        </div>
                      </Card>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Showing 1-10 of 247 supporters
                    </p>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-amber-200 hover:bg-amber-100"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Previous page</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 border-amber-200 bg-amber-100 hover:bg-amber-100"
                      >
                        1
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 border-amber-200 hover:bg-amber-100"
                      >
                        2
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 border-amber-200 hover:bg-amber-100"
                      >
                        3
                      </Button>
                      <span className="mx-1">...</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 border-amber-200 hover:bg-amber-100"
                      >
                        25
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-amber-200 hover:bg-amber-100"
                      >
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Next page</span>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="recurring" className="space-y-4">
                  {/* Timeline of supporters */}
                  <div className="space-y-4">
                    {supporters
                      .filter((s) => s.recurring)
                      .map((supporter) => (
                        <Card
                          key={supporter.id}
                          className="flex-row py-4 pr-6 items-center justify-between border-primary/40"
                        >
                          <div>
                            <CardHeader>
                              <div className="flex gap-4 items-center">
                                <Avatar className="h-10 w-10">
                                  <AvatarImage alt={supporter.name} />
                                  <AvatarFallback className="bg-accent text-primary">
                                    {supporter.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="flex gap-2 items-center">
                                    <CardTitle>{supporter.name}</CardTitle>
                                    <p className="truncate">
                                      donating ₹{supporter.amount} every month
                                    </p>
                                  </div>
                                  <CardDescription>
                                    {supporter.createdAt.toLocaleDateString()}
                                  </CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>{supporter.message}</CardContent>
                          </div>
                          <div className="text-3xl text-success">
                            ₹{supporter.amount}
                          </div>
                        </Card>
                      ))}
                  </div>

                  {/* Pagination */}
                  {/* <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Showing 1-10 of 247 supporters
                    </p>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-amber-200 hover:bg-amber-100"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Previous page</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 border-amber-200 bg-amber-100 hover:bg-amber-100"
                      >
                        1
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 border-amber-200 hover:bg-amber-100"
                      >
                        2
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 border-amber-200 hover:bg-amber-100"
                      >
                        3
                      </Button>
                      <span className="mx-1">...</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 border-amber-200 hover:bg-amber-100"
                      >
                        25
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-amber-200 hover:bg-amber-100"
                      >
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Next page</span>
                      </Button>
                    </div>
                  </div> */}
                </TabsContent>
                <TabsContent value="one-time" className="space-y-4">
                  {/* Timeline of supporters */}
                  <div className="space-y-4">
                    {supporters
                      .filter((s) => !s.recurring)
                      .map((supporter) => (
                        <Card
                          key={supporter.id}
                          className="flex-row py-4 pr-6 items-center justify-between border-primary/40"
                        >
                          <div>
                            <CardHeader>
                              <div className="flex gap-4 items-center">
                                <Avatar className="h-10 w-10">
                                  <AvatarImage alt={supporter.name} />
                                  <AvatarFallback className="bg-accent text-primary">
                                    {supporter.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="flex gap-2 items-center">
                                    <CardTitle>{supporter.name}</CardTitle>
                                    <p className="truncate">
                                      donated ₹{supporter.amount}
                                    </p>
                                  </div>
                                  <CardDescription>
                                    {supporter.createdAt.toLocaleDateString()}
                                  </CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>{supporter.message}</CardContent>
                          </div>
                          <div className="text-3xl text-success">
                            ₹{supporter.amount}
                          </div>
                        </Card>
                      ))}
                  </div>

                  {/* Pagination */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Showing 1-10 of 247 supporters
                    </p>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-amber-200 hover:bg-amber-100"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Previous page</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 border-amber-200 bg-amber-100 hover:bg-amber-100"
                      >
                        1
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 border-amber-200 hover:bg-amber-100"
                      >
                        2
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 border-amber-200 hover:bg-amber-100"
                      >
                        3
                      </Button>
                      <span className="mx-1">...</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 border-amber-200 hover:bg-amber-100"
                      >
                        25
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-amber-200 hover:bg-amber-100"
                      >
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Next page</span>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </section>
            </div>
          </Tabs>
        </div>

        {/* Empty state (hidden when there are supporters) */}
        <div className="hidden">
          <Card className="border-amber-200 text-center p-8">
            <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
              <div className="rounded-full bg-amber-100 p-4">
                <Users className="h-8 w-8 text-amber-500" />
              </div>
              <CardTitle>No supporters yet</CardTitle>
              <CardDescription>
                Share your Creators Nest page with your audience to start
                receiving support. When people buy you coffees, they'll appear
                here.
              </CardDescription>
              <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0">
                Share Your Page
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
