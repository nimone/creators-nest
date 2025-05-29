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

export const supporters = [
  {
    id: 1,
    name: "Alex Johnson",
    image: "/placeholder.svg?height=40&width=40",
    amount: 15,
    amountUsd: 75,
    message:
      "Love your work! Your latest art piece really inspired me to pick up drawing again. Keep creating amazing content!",
    date: "2 hours ago",
    isRecurring: true,
    coffeeCount: 42,
    firstSupported: "3 months ago",
  },
  {
    id: 2,
    name: "Jamie Smith",
    image: "/placeholder.svg?height=40&width=40",
    amount: 5,
    amountUsd: 25,
    message:
      "Your latest piece was amazing! The colors and composition were perfect. Looking forward to seeing what you create next.",
    date: "5 hours ago",
    isRecurring: false,
    coffeeCount: 5,
    firstSupported: "5 hours ago",
  },
  {
    id: 3,
    name: "Taylor Wilson",
    image: "/placeholder.svg?height=40&width=40",
    amount: 25,
    amountUsd: 125,
    message:
      "Thanks for the shoutout in your last video! It made my day. Here's a little something to show my appreciation.",
    date: "Yesterday",
    isRecurring: true,
    coffeeCount: 65,
    firstSupported: "6 months ago",
  },
  {
    id: 4,
    name: "Jordan Lee",
    image: "/placeholder.svg?height=40&width=40",
    amount: 10,
    amountUsd: 50,
    message:
      "Keep creating awesome content! Your tutorials have helped me improve so much. I can't thank you enough.",
    date: "2 days ago",
    isRecurring: false,
    coffeeCount: 30,
    firstSupported: "2 months ago",
  },
  {
    id: 5,
    name: "Casey Morgan",
    image: "/placeholder.svg?height=40&width=40",
    amount: 3,
    amountUsd: 15,
    message:
      "Just a small token of appreciation for all the free content you provide. It's made a big difference in my life.",
    date: "3 days ago",
    isRecurring: false,
    coffeeCount: 3,
    firstSupported: "3 days ago",
  },
  {
    id: 6,
    name: "Riley Parker",
    image: "/placeholder.svg?height=40&width=40",
    amount: 20,
    amountUsd: 100,
    message:
      "Happy anniversary! I've been following your work for a year now and it just keeps getting better. Here's to many more!",
    date: "4 days ago",
    isRecurring: true,
    coffeeCount: 120,
    firstSupported: "1 year ago",
  },
  {
    id: 7,
    name: "Quinn Adams",
    image: "/placeholder.svg?height=40&width=40",
    amount: 8,
    amountUsd: 40,
    message:
      "Your podcast episode on creativity really resonated with me. Thank you for sharing your insights and experiences.",
    date: "1 week ago",
    isRecurring: false,
    coffeeCount: 16,
    firstSupported: "3 months ago",
  },
  {
    id: 8,
    name: "Morgan Bailey",
    image: "/placeholder.svg?height=40&width=40",
    amount: 12,
    amountUsd: 60,
    message:
      "I've been using your design templates for my business and they've been a game-changer. Worth every penny!",
    date: "1 week ago",
    isRecurring: true,
    coffeeCount: 48,
    firstSupported: "4 months ago",
  },
  {
    id: 9,
    name: "Avery Thompson",
    image: "/placeholder.svg?height=40&width=40",
    amount: 6,
    amountUsd: 30,
    message:
      "Just finished your latest tutorial and had to send some coffee your way. Thanks for making complex concepts so accessible.",
    date: "2 weeks ago",
    isRecurring: false,
    coffeeCount: 18,
    firstSupported: "5 months ago",
  },
  {
    id: 10,
    name: "Jordan Rivera",
    image: "/placeholder.svg?height=40&width=40",
    amount: 30,
    amountUsd: 150,
    message:
      "Your work has been a constant source of inspiration during a tough time. This is just a small thank you for all you do.",
    date: "3 weeks ago",
    isRecurring: true,
    coffeeCount: 200,
    firstSupported: "8 months ago",
  },
]

export default function SupportersPage() {
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
              <div className="text-2xl font-bold">247</div>
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
              <div className="text-2xl font-bold">42</div>
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
              <div className="text-2xl font-bold">₹1,089</div>
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
              <div className="text-2xl font-bold">200</div>
              <p className="text-xs text-muted-foreground">Jordan Rivera</p>
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
                      {supporters.reduce(
                        (acc, supporter) => acc + supporter.amountUsd,
                        0
                      )}
                      .
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {supporters.map((supporter) => (
                      <div
                        key={supporter.id}
                        className="flex items-center gap-4 px-4 py-3 bg-accent/40 rounded-md border border-accent"
                      >
                        <Avatar className="h-8 w-8 shadow">
                          <AvatarImage
                            src={supporter.image}
                            alt={supporter.name}
                          />
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
                            Total: ₹{supporter.amountUsd}
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
                                <AvatarImage
                                  src={supporter.image}
                                  alt={supporter.name}
                                />
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
                                  <p>donated ₹{supporter.amountUsd}</p>
                                </div>
                                <CardDescription>
                                  {supporter.date}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>{supporter.message}</CardContent>
                        </div>
                        <div className="text-3xl text-success">
                          ₹{supporter.amountUsd}
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
