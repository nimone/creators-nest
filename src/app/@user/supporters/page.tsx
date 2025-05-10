import Link from "next/link"
import type { Metadata } from "next"
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
  Download,
  Filter,
  Heart,
  MessageSquare,
  Search,
  SlidersHorizontal,
  Star,
  ThumbsUp,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Supporters - SupportSip",
  description: "View and manage your supporters on SupportSip",
}

// Sample data for supporters
const supporters = [
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
    <div className="flex min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white border-b border-amber-200 px-4 py-3">
          <div className="container flex items-center gap-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Link>
            <h1 className="text-xl font-bold ml-4">Your Supporters</h1>
          </div>
        </header>

        {/* Supporters content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="container max-w-6xl">
            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card className="border-amber-200 hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Supporters
                  </CardTitle>
                  <Users className="h-4 w-4 text-amber-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">247</div>
                  <p className="text-xs text-muted-foreground">
                    Lifetime total
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 hover:shadow-md transition-shadow">
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

              <Card className="border-amber-200 hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Coffees
                  </CardTitle>
                  <Coffee className="h-4 w-4 text-amber-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,089</div>
                  <p className="text-xs text-muted-foreground">
                    Lifetime total
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Top Supporter
                  </CardTitle>
                  <Star className="h-4 w-4 text-amber-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">200 ☕</div>
                  <p className="text-xs text-muted-foreground">Jordan Rivera</p>
                </CardContent>
              </Card>
            </div>

            {/* Tabs and filters */}
            <div className="mb-6">
              <Tabs defaultValue="all" className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <TabsList className="bg-amber-100 text-amber-900">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:bg-white"
                    >
                      All Supporters
                    </TabsTrigger>
                    <TabsTrigger
                      value="recurring"
                      className="data-[state=active]:bg-white"
                    >
                      Monthly Members
                    </TabsTrigger>
                    <TabsTrigger
                      value="one-time"
                      className="data-[state=active]:bg-white"
                    >
                      One-time
                    </TabsTrigger>
                  </TabsList>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-initial">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search supporters..."
                        className="pl-8 border-amber-200 focus-visible:ring-amber-500 w-full sm:w-[200px]"
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-amber-200 hover:bg-amber-100"
                    >
                      <Filter className="h-4 w-4" />
                      <span className="sr-only">Filter</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-amber-200 hover:bg-amber-100"
                    >
                      <SlidersHorizontal className="h-4 w-4" />
                      <span className="sr-only">Options</span>
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-muted-foreground">
                      Showing 10 of 247 supporters
                    </p>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Select defaultValue="recent">
                      <SelectTrigger className="w-full sm:w-[180px] border-amber-200 focus-visible:ring-amber-500">
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
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-amber-200 hover:bg-amber-100"
                    >
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                  </div>
                </div>

                <TabsContent value="all" className="space-y-4">
                  {/* Timeline of supporters */}
                  <div className="space-y-4">
                    {supporters.map((supporter) => (
                      <Card
                        key={supporter.id}
                        className="border-amber-200 hover:shadow-md transition-shadow overflow-hidden"
                      >
                        <div className="flex flex-col md:flex-row">
                          {/* Left sidebar with supporter info */}
                          <div className="w-full md:w-64 p-4 bg-amber-50 border-b md:border-b-0 md:border-r border-amber-200 flex flex-row md:flex-col items-center md:items-start gap-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage
                                src={supporter.image || "/placeholder.svg"}
                                alt={supporter.name}
                              />
                              <AvatarFallback className="bg-amber-100 text-amber-800">
                                {supporter.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">
                                  {supporter.name}
                                </h3>
                                {supporter.isRecurring && (
                                  <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                                    <Heart className="h-3 w-3 mr-1" /> Monthly
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground">
                                First supported {supporter.firstSupported}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Total: {supporter.coffeeCount} coffees
                              </p>
                              <div className="hidden md:flex mt-2 gap-1">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 px-2 text-xs"
                                >
                                  <MessageSquare className="h-3 w-3 mr-1" />
                                  Message
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 px-2 text-xs"
                                >
                                  <ThumbsUp className="h-3 w-3 mr-1" />
                                  Thank
                                </Button>
                              </div>
                            </div>
                          </div>

                          {/* Right content with message and details */}
                          <div className="flex-1 p-4">
                            <div className="flex flex-col h-full">
                              <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center">
                                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                                    {supporter.amount} coffees ($
                                    {supporter.amountUsd})
                                  </Badge>
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  {supporter.date}
                                </span>
                              </div>
                              <p className="text-sm flex-1">
                                {supporter.message}
                              </p>
                              <div className="flex md:hidden mt-3 gap-1 justify-end">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 px-2 text-xs"
                                >
                                  <MessageSquare className="h-3 w-3 mr-1" />
                                  Message
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 px-2 text-xs"
                                >
                                  <ThumbsUp className="h-3 w-3 mr-1" />
                                  Thank
                                </Button>
                              </div>
                            </div>
                          </div>
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
                  {/* Timeline of recurring supporters */}
                  <div className="space-y-4">
                    {supporters
                      .filter((supporter) => supporter.isRecurring)
                      .map((supporter) => (
                        <Card
                          key={supporter.id}
                          className="border-amber-200 hover:shadow-md transition-shadow overflow-hidden"
                        >
                          <div className="flex flex-col md:flex-row">
                            {/* Left sidebar with supporter info */}
                            <div className="w-full md:w-64 p-4 bg-amber-50 border-b md:border-b-0 md:border-r border-amber-200 flex flex-row md:flex-col items-center md:items-start gap-4">
                              <Avatar className="h-12 w-12">
                                <AvatarImage
                                  src={supporter.image || "/placeholder.svg"}
                                  alt={supporter.name}
                                />
                                <AvatarFallback className="bg-amber-100 text-amber-800">
                                  {supporter.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <h3 className="font-medium">
                                    {supporter.name}
                                  </h3>
                                  <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                                    <Heart className="h-3 w-3 mr-1" /> Monthly
                                  </Badge>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  First supported {supporter.firstSupported}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Total: {supporter.coffeeCount} coffees
                                </p>
                                <div className="hidden md:flex mt-2 gap-1">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 px-2 text-xs"
                                  >
                                    <MessageSquare className="h-3 w-3 mr-1" />
                                    Message
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 px-2 text-xs"
                                  >
                                    <ThumbsUp className="h-3 w-3 mr-1" />
                                    Thank
                                  </Button>
                                </div>
                              </div>
                            </div>

                            {/* Right content with message and details */}
                            <div className="flex-1 p-4">
                              <div className="flex flex-col h-full">
                                <div className="flex justify-between items-start mb-2">
                                  <div className="flex items-center">
                                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                                      {supporter.amount} coffees ($
                                      {supporter.amountUsd})
                                    </Badge>
                                  </div>
                                  <span className="text-xs text-muted-foreground">
                                    {supporter.date}
                                  </span>
                                </div>
                                <p className="text-sm flex-1">
                                  {supporter.message}
                                </p>
                                <div className="flex md:hidden mt-3 gap-1 justify-end">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 px-2 text-xs"
                                  >
                                    <MessageSquare className="h-3 w-3 mr-1" />
                                    Message
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 px-2 text-xs"
                                  >
                                    <ThumbsUp className="h-3 w-3 mr-1" />
                                    Thank
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                  </div>

                  {/* Pagination for recurring */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Showing 1-5 of 42 monthly members
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
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 border-amber-200 hover:bg-amber-100"
                      >
                        4
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 border-amber-200 hover:bg-amber-100"
                      >
                        5
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

                <TabsContent value="one-time" className="space-y-4">
                  {/* Timeline of one-time supporters */}
                  <div className="space-y-4">
                    {supporters
                      .filter((supporter) => !supporter.isRecurring)
                      .map((supporter) => (
                        <Card
                          key={supporter.id}
                          className="border-amber-200 hover:shadow-md transition-shadow overflow-hidden"
                        >
                          <div className="flex flex-col md:flex-row">
                            {/* Left sidebar with supporter info */}
                            <div className="w-full md:w-64 p-4 bg-amber-50 border-b md:border-b-0 md:border-r border-amber-200 flex flex-row md:flex-col items-center md:items-start gap-4">
                              <Avatar className="h-12 w-12">
                                <AvatarImage
                                  src={supporter.image || "/placeholder.svg"}
                                  alt={supporter.name}
                                />
                                <AvatarFallback className="bg-amber-100 text-amber-800">
                                  {supporter.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <h3 className="font-medium">
                                    {supporter.name}
                                  </h3>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  First supported {supporter.firstSupported}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Total: {supporter.coffeeCount} coffees
                                </p>
                                <div className="hidden md:flex mt-2 gap-1">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 px-2 text-xs"
                                  >
                                    <MessageSquare className="h-3 w-3 mr-1" />
                                    Message
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 px-2 text-xs"
                                  >
                                    <ThumbsUp className="h-3 w-3 mr-1" />
                                    Thank
                                  </Button>
                                </div>
                              </div>
                            </div>

                            {/* Right content with message and details */}
                            <div className="flex-1 p-4">
                              <div className="flex flex-col h-full">
                                <div className="flex justify-between items-start mb-2">
                                  <div className="flex items-center">
                                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                                      {supporter.amount} coffees ($
                                      {supporter.amountUsd})
                                    </Badge>
                                  </div>
                                  <span className="text-xs text-muted-foreground">
                                    {supporter.date}
                                  </span>
                                </div>
                                <p className="text-sm flex-1">
                                  {supporter.message}
                                </p>
                                <div className="flex md:hidden mt-3 gap-1 justify-end">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 px-2 text-xs"
                                  >
                                    <MessageSquare className="h-3 w-3 mr-1" />
                                    Message
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 px-2 text-xs"
                                  >
                                    <ThumbsUp className="h-3 w-3 mr-1" />
                                    Thank
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                  </div>

                  {/* Pagination for one-time */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      Showing 1-5 of 205 one-time supporters
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
                        21
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
                    Share your SupportSip page with your audience to start
                    receiving support. When people buy you coffees, they'll
                    appear here.
                  </CardDescription>
                  <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0">
                    Share Your Page
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
