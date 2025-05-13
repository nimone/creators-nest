import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { PaymentCard } from "@/components/PaymentCard"
import SupportDialog from "./support-dialog"
import BuyButton from "./buy-button"

export const metadata: Metadata = {
  title: "Nishant Mogha's Store - Creators Nest",
  description: "Browse and purchase digital products from Nishant Mogha",
}

// Sample data for products
const products = [
  {
    id: 1,
    name: "Character Design Template Pack",
    description:
      "A collection of 10 professional character design templates to kickstart your creative projects.",
    price: 999,
    image:
      "https://img.freepik.com/free-vector/hipster-character-with-fantastic-accessories_1045-129.jpg",

    category: "templates",
    featured: true,
    type: "digital",
    dateAdded: "2 months ago",
  },
  {
    id: 2,
    name: "Digital Art Brushes Collection",
    description:
      "50+ custom Procreate brushes perfect for digital illustrations and concept art.",
    price: 1200,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSaaTZwqip-RpNeZxyQSQ2HeqtvQgZgtnb9A&s",

    category: "brushes",
    featured: false,
    type: "digital",
    dateAdded: "3 months ago",
  },
  {
    id: 3,
    name: "Fantasy World Building Guide",
    description:
      "A comprehensive 75-page e-book on creating immersive fantasy worlds for your stories and games.",
    price: 999,
    image:
      "https://blog-cdn.reedsy.com/directories/admin/attachments/large_Grishaverse-map-9d3bac.jpg",
    category: "ebooks",
    featured: false,
    type: "digital",
    dateAdded: "1 month ago",
  },
  {
    id: 4,
    name: "Color Theory Masterclass",
    description:
      "A 2-hour video course teaching you everything about color theory for digital artists.",
    price: 2199,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3YUkfzVfW4tEjIWvt2KRk4EEZaAl0vvdpg&s",
    category: "courses",
    featured: true,
    type: "digital",
    dateAdded: "2 weeks ago",
  },
  {
    id: 5,
    name: "Ambient Music Pack",
    description:
      "10 royalty-free ambient tracks perfect for your videos, games, or creative projects.",
    price: 1199,
    image:
      "https://media.fab.com/image_previews/gallery_images/edf06b40-84d2-4ee2-bf5b-4ad74e1241e0/87d2e938-e4de-4a9b-8ff5-48c1cde7dab0.png",
    category: "audio",
    featured: false,
    type: "digital",
    dateAdded: "1 week ago",
  },
  {
    id: 6,
    name: "Custom Character Portrait",
    description:
      "I'll create a custom digital portrait of your character in my signature style.",
    price: 1599,
    image:
      "https://img.freepik.com/free-vector/hand-drawn-flat-profile-icon_23-2149069709.jpg?semt=ais_hybrid&w=740",
    category: "services",
    featured: true,
    type: "service",
    dateAdded: "3 weeks ago",
  },
]

// Sample data for categories
const categories = [
  { id: "all", name: "All Products", count: 6 },
  { id: "templates", name: "Templates", count: 1 },
  { id: "brushes", name: "Brushes", count: 1 },
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
          <div className="container relative -mt-16 mx-auto px-4 md:px-6">
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
                    creatorPref: creator.creatorPref,
                  }}
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="max-w-2xl text-muted-foreground mb-4 md:mb-0 text-center md:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis quibusdam quisquam nemo voluptatem sapiente eius
                recusandae in, consequuntur aliquam aspernatur autem accusantium
                labore voluptas itaque eaque, assumenda aut, eos atque.
              </p>
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold">1232</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Products</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-8 bg-amber-100" />

        {/* Store content */}
        <section className="container mx-auto px-4 md:px-6 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold">Digital Store</h2>
              <p className="text-muted-foreground">
                Browse and purchase digital products from {creator.name}
              </p>
            </div>
            <div className="w-full md:w-auto flex gap-2">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 border-amber-200 focus-visible:ring-amber-500 w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <div className="w-full md:w-64 shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Categories</h3>
                  <ul className="space-y-1">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <Link
                          href={`#${category.id}`}
                          className={`flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ₹{
                            category.id === "all"
                              ? "bg-amber-100 text-amber-900 font-medium"
                              : "hover:bg-amber-50"
                          }`}
                        >
                          <span>{category.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        placeholder="Min"
                        className="border-amber-200 focus-visible:ring-amber-500"
                      />
                      <span>-</span>
                      <Input
                        type="number"
                        placeholder="Max"
                        className="border-amber-200 focus-visible:ring-amber-500"
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-amber-200 hover:bg-amber-100"
                    >
                      Apply
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Product Type</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        className="rounded text-amber-500 focus:ring-amber-500"
                        defaultChecked
                      />
                      <span>Digital Downloads</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        className="rounded text-amber-500 focus:ring-amber-500"
                        defaultChecked
                      />
                      <span>Services</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Products grid */}
            <div className="flex-1">
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
