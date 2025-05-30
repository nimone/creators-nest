import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Coffee,
  Download,
  HandCoins,
  Heart,
  HeartIcon,
  Search,
  ShoppingCart,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { auth } from "@/lib/auth.server"
import { headers } from "next/headers"
import { prisma } from "@/lib/db.server"
import { notFound } from "next/navigation"
import SupportDialog from "./support-dialog"
import BuyButton from "./buy-button"

export const metadata: Metadata = {
  title: "Nishant Mogha's Store - Creators Nest",
  description: "Browse and purchase digital products from Nishant Mogha",
}

// Sample data for categories
const categories = [
  { id: "all", name: "All Products", count: 6 },
  { id: "templates", name: "Templates", count: 1 },
  { id: "ebooks", name: "E-Books", count: 1 },
  { id: "courses", name: "Courses", count: 1 },
  { id: "audio", name: "Audio", count: 1 },
  { id: "services", name: "Services", count: 1 },
]

export default async function StorePublicPage({
  params,
}: {
  params: { username: string }
}) {
  const { username } = await params
  const creator = await prisma.user.findFirst({
    where: { username },
    include: {
      creatorPref: true,
    },
  })
  if (!creator || !creator.creatorPref) return notFound()

  const session = await auth.api.getSession({ headers: await headers() })
  const products = await prisma.product.findMany({
    where: { creatorId: creator.id },
  })
  const supporters = await prisma.donation.findMany({
    where: { creatorId: creator.id },
  })
  return (
    <div>
      <Header user={session?.user || null} />
      <main className="flex-1">
        {/* Creator header */}
        <section className="relative">
          <div className="h-48 w-full bg-amber-100">
            {/* <img
              src={creator.image || "/placeholder.svg"}
              alt="Cover"
              className="object-cover opacity-50"
            /> */}
          </div>
          <div className="container relative -mt-14 mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
              <Avatar className="h-32 w-32 border-4 border-white shadow-md">
                <AvatarImage
                  src={creator.image ?? undefined}
                  alt={creator.name}
                />
                <AvatarFallback className="bg-amber-100 text-amber-800 text-4xl">
                  {creator.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold">{creator.name}</h1>
                <p className="text-muted-foreground">@{creator.username}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline">
                  <Heart />
                  Follow
                </Button>
                <SupportDialog
                  creator={{
                    name: creator.name,
                    id: creator.id,
                    creatorPref: creator.creatorPref,
                  }}
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="max-w-6xl text-muted-foreground mb-4 md:mb-0 text-center md:text-left">
                {creator.creatorPref.bio}
              </p>
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold">{creator.followers}</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{products.length}</p>
                  <p className="text-sm text-muted-foreground">Products</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-8 bg-amber-100" />

        {/* Store content */}
        <section className="container mx-auto px-4 md:px-6 pb-12 space-y-6">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <Card className="md:col-span-4">
              <CardHeader className="flex gap-2 justify-between">
                <div>
                  <CardTitle>Supporters</CardTitle>
                  <CardDescription>
                    Total {supporters.length} supporters donated this month.
                  </CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <SupportDialog
                    creator={{
                      name: creator.name,
                      id: creator.id,
                      creatorPref: creator.creatorPref,
                    }}
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                {supporters.map((supporter) => (
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
            {/* Products grid */}
            <div className="md:col-span-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold">Digital Store</h2>
                <p className="text-muted-foreground">
                  Browse and purchase digital products from {creator.name}
                </p>
              </div>
              <div className="space-y-6">
                {/* Featured products */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Featured Products</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-4">
                    {products
                      .filter((product) => product.featured)
                      .map((product) => (
                        <Card
                          key={product.id}
                          className="border-amber-200 hover:shadow-md transition-shadow overflow-hidden p-0"
                        >
                          <div className="relative bg-amber-50">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="object-cover w-full"
                            />
                            <Badge className="absolute top-2 left-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                              Featured
                            </Badge>
                            <div className="absolute bottom-2 left-2">
                              {product.type === "digital" && (
                                <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                                  <Download className="h-3 w-3 mr-1" /> Digital
                                </Badge>
                              )}
                              {product.type === "service" && (
                                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                                  <Coffee className="h-3 w-3 mr-1" /> Service
                                </Badge>
                              )}
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <div>
                              <h3 className="font-medium line-clamp-1">
                                {product.name}
                              </h3>
                              <Badge
                                variant="outline"
                                className="mt-1 bg-amber-50 text-amber-800 border-amber-200"
                              >
                                {product.category.charAt(0).toUpperCase() +
                                  product.category.slice(1)}
                              </Badge>
                              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                                {product.description}
                              </p>
                            </div>
                          </CardContent>
                          <CardFooter className="p-4 pt-0 flex justify-between items-center">
                            <div className="text-lg font-bold">
                              ₹{product.price.toFixed(2)}
                            </div>
                            <BuyButton
                              amount={product.price}
                              productName={product.name}
                              productId={product.id}
                            />
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </div>

                {/* All products */}
                <div>
                  <h3 className="text-xl font-bold mb-4">All Products</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-4">
                    {products.map((product) => (
                      <Card
                        key={product.id}
                        className="border-amber-200 hover:shadow-md transition-shadow overflow-hidden p-0"
                      >
                        <div className="relative  bg-amber-50">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="object-cover w-full"
                          />
                          {product.featured && (
                            <Badge className="absolute top-2 left-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                              Featured
                            </Badge>
                          )}
                          <div className="absolute bottom-2 left-2">
                            {product.type === "digital" && (
                              <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                                <Download className="h-3 w-3 mr-1" /> Digital
                              </Badge>
                            )}
                            {product.type === "service" && (
                              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                                <Coffee className="h-3 w-3 mr-1" /> Service
                              </Badge>
                            )}
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <div>
                            <h3 className="font-medium line-clamp-1">
                              {product.name}
                            </h3>
                            <Badge
                              variant="outline"
                              className="mt-1 bg-amber-50 text-amber-800 border-amber-200"
                            >
                              {product.category.charAt(0).toUpperCase() +
                                product.category.slice(1)}
                            </Badge>
                            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                              {product.description}
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex justify-between items-center">
                          <div className="text-lg font-bold">
                            ₹{product.price.toFixed(2)}
                          </div>
                          <BuyButton
                            amount={product.price}
                            productName={product.name}
                            productId={product.id}
                          />
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
