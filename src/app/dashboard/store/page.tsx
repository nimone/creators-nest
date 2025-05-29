import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
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
  Coffee,
  Download,
  Edit,
  FileText,
  Filter,
  Grid3x3,
  ImageIcon,
  List,
  Package,
  Plus,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  Trash,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export const metadata: Metadata = {
  title: "Store - Creators Nest",
  description: "Manage your digital products and store on Creators Nest",
}

// Sample data for products
const products = [
  {
    id: 1,
    name: "Character Design Template Pack",
    description:
      "A collection of 10 professional character design templates to kickstart your creative projects.",
    price: 900,
    image:
      "https://img.freepik.com/free-vector/hipster-character-with-fantastic-accessories_1045-129.jpg",
    category: "templates",
    sales: 124,
    revenue: 1982.76,
    published: true,
    featured: true,
    type: "digital",
    dateAdded: "2 months ago",
  },
  {
    id: 2,
    name: "Digital Art Brushes Collection",
    description:
      "50+ custom Procreate brushes perfect for digital illustrations and concept art.",
    price: 1299,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSaaTZwqip-RpNeZxyQSQ2HeqtvQgZgtnb9A&s",
    category: "brushes",
    sales: 87,
    revenue: 1130.13,
    published: true,
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
    image: "/placeholder.svg?height=300&width=300",
    category: "ebooks",
    sales: 56,
    revenue: 559.44,
    published: true,
    featured: false,
    type: "digital",
    dateAdded: "1 month ago",
  },
  {
    id: 4,
    name: "Color Theory Masterclass",
    description:
      "A 2-hour video course teaching you everything about color theory for digital artists.",
    price: 2099,
    image: "/placeholder.svg?height=300&width=300",
    category: "courses",
    sales: 42,
    revenue: 1049.58,
    published: true,
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
    image: "/placeholder.svg?height=300&width=300",
    category: "audio",
    sales: 31,
    revenue: 588.69,
    published: true,
    featured: false,
    type: "digital",
    dateAdded: "1 week ago",
  },
  {
    id: 6,
    name: "Custom Character Portrait",
    description:
      "I'll create a custom digital portrait of your character in my signature style.",
    price: 999,
    image: "/placeholder.svg?height=300&width=300",
    category: "services",
    sales: 18,
    revenue: 899.82,
    published: true,
    featured: true,
    type: "service",
    dateAdded: "3 weeks ago",
  },
  {
    id: 7,
    name: "Digital Painting Process Files",
    description:
      "Get access to my complete process files including layers and time-lapse for 5 artworks.",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "resources",
    sales: 24,
    revenue: 719.76,
    published: false,
    featured: false,
    type: "digital",
    dateAdded: "4 days ago",
  },
  {
    id: 8,
    name: "Portfolio Review Session",
    description:
      "1-hour video call where I'll review your art portfolio and provide detailed feedback.",
    price: 799,
    image: "/placeholder.svg?height=300&width=300",
    category: "services",
    sales: 12,
    revenue: 959.88,
    published: true,
    featured: false,
    type: "service",
    dateAdded: "1 month ago",
  },
]

// Sample data for categories
const categories = [
  { id: "all", name: "All Products", count: 8 },
  { id: "templates", name: "Templates", count: 1 },
  { id: "brushes", name: "Brushes", count: 1 },
  { id: "ebooks", name: "E-Books", count: 1 },
  { id: "courses", name: "Courses", count: 1 },
  { id: "audio", name: "Audio", count: 1 },
  { id: "services", name: "Services", count: 2 },
  { id: "resources", name: "Resources", count: 1 },
]

export default function StorePage() {
  return (
    <div>
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="space-y-2 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Your Store</h1>
          <p className="text-muted-foreground">
            Manage your digital products, templates, courses, or services to
            sell to your supporters.
          </p>
        </header>

        {/* Store content */}
        <main className="flex-1 overflow-auto">
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="border-amber-200 hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Products
                </CardTitle>
                <Package className="h-4 w-4 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+2</span> this month
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Sales
                </CardTitle>
                <ShoppingCart className="h-4 w-4 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">394</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+47</span> this month
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <Coffee className="h-4 w-4 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹1,890.06</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+₹245.32</span> this month
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Best Seller
                </CardTitle>
                <Download className="h-4 w-4 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold truncate">
                  Character Templates
                </div>
                <p className="text-xs text-muted-foreground">124 sales</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs and filters */}
          <div className="mb-6">
            <Tabs defaultValue="products" className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <TabsList className="bg-amber-100 text-amber-900">
                  <TabsTrigger
                    value="products"
                    className="data-[state=active]:bg-white"
                  >
                    Products
                  </TabsTrigger>
                  <TabsTrigger
                    value="orders"
                    className="data-[state=active]:bg-white"
                  >
                    Orders
                  </TabsTrigger>
                  <TabsTrigger
                    value="customers"
                    className="data-[state=active]:bg-white"
                  >
                    Customers
                  </TabsTrigger>
                  <TabsTrigger
                    value="settings"
                    className="data-[state=active]:bg-white"
                  >
                    Store Settings
                  </TabsTrigger>
                </TabsList>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button>
                      <Plus />
                      Add Product
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Add New Product</SheetTitle>
                      <SheetDescription>
                        Create a new digital product to sell in your store.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="px-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="product-name"
                            className="text-sm font-medium"
                          >
                            Product Name
                          </label>
                          <Input
                            id="product-name"
                            placeholder="Enter product name"
                            className="border-amber-200 focus-visible:ring-amber-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="product-price"
                            className="text-sm font-medium"
                          >
                            Price (₹)
                          </label>
                          <Input
                            id="product-price"
                            type="number"
                            placeholder="19.99"
                            className="border-amber-200 focus-visible:ring-amber-500"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="product-description"
                          className="text-sm font-medium"
                        >
                          Description
                        </label>
                        <textarea
                          id="product-description"
                          rows={4}
                          placeholder="Describe your product..."
                          className="w-full rounded-md border border-amber-200 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                        ></textarea>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="product-category"
                            className="text-sm font-medium"
                          >
                            Category
                          </label>
                          <Select>
                            <SelectTrigger className="border-amber-200 focus-visible:ring-amber-500">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.slice(1).map((category) => (
                                <SelectItem
                                  key={category.id}
                                  value={category.id}
                                >
                                  {category.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="product-type"
                            className="text-sm font-medium"
                          >
                            Product Type
                          </label>
                          <Select defaultValue="digital">
                            <SelectTrigger className="border-amber-200 focus-visible:ring-amber-500">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="digital">
                                Digital Download
                              </SelectItem>
                              <SelectItem value="service">Service</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Product Image
                        </label>
                        <div className="border-2 border-dashed border-amber-200 rounded-md p-6 text-center">
                          <div className="flex flex-col items-center gap-2">
                            <ImageIcon className="h-8 w-8 text-amber-300" />
                            <p className="text-sm text-muted-foreground">
                              Drag and drop your product image here, or click to
                              browse
                            </p>
                            <Button
                              variant="outline"
                              size="sm"
                              className="mt-2 border-amber-200 hover:bg-amber-100"
                            >
                              Upload Image
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Product File
                        </label>
                        <div className="border-2 border-dashed border-amber-200 rounded-md p-6 text-center">
                          <div className="flex flex-col items-center gap-2">
                            <FileText className="h-8 w-8 text-amber-300" />
                            <p className="text-sm text-muted-foreground">
                              Drag and drop your digital product file here, or
                              click to browse
                            </p>
                            <Button
                              variant="outline"
                              size="sm"
                              className="mt-2 border-amber-200 hover:bg-amber-100"
                            >
                              Upload File
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <SheetFooter className="grid grid-cols-2">
                      <SheetClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </SheetClose>
                      <Button>Publish Product</Button>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>

              <TabsContent value="products" className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-initial">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search products..."
                        className="pl-8"
                      />
                    </div>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name} ({category.count})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Select defaultValue="recent">
                      <SelectTrigger className="w-full sm:w-[180px] ">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recent">Most Recent</SelectItem>
                        <SelectItem value="oldest">Oldest First</SelectItem>
                        <SelectItem value="price-high">
                          Price (High to Low)
                        </SelectItem>
                        <SelectItem value="price-low">
                          Price (Low to High)
                        </SelectItem>
                        <SelectItem value="sales-high">Best Selling</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Products list view */}
                <div className="space-y-4">
                  {products.map((product) => (
                    <Card
                      key={product.id}
                      className="border-amber-200 hover:shadow-md transition-shadow overflow-hidden p-4"
                    >
                      <div className="flex flex-col sm:flex-row">
                        {/* Product image */}
                        <div className="sm:w-60 h-60 sm:h-auto relative">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="object-cover p-2 rounded-lg"
                          />
                          {product.featured && (
                            <Badge className="absolute top-2 left-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                              Featured
                            </Badge>
                          )}
                          {!product.published && (
                            <Badge className="absolute top-2 left-2 bg-gray-500 text-white border-0">
                              Draft
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

                        {/* Product details */}
                        <div className="flex-1 p-4">
                          <div className="flex flex-col h-full">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-medium text-lg">
                                  {product.name}
                                </h3>
                                <Badge
                                  variant="outline"
                                  className="mt-1 bg-amber-50 text-amber-800 border-amber-200"
                                >
                                  {product.category.charAt(0).toUpperCase() +
                                    product.category.slice(1)}
                                </Badge>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold">
                                  ₹{product.price.toFixed(2)}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  Added {product.dateAdded}
                                </p>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground flex-1 mb-4">
                              {product.description}
                            </p>
                            <div className="flex flex-wrap justify-between items-end mt-auto">
                              <div className="flex flex-col xs:flex-row gap-2 xs:gap-4 text-sm">
                                <div className="flex items-center">
                                  <ShoppingCart className="h-4 w-4 mr-1 text-amber-500" />
                                  <span>{product.sales} sales</span>
                                </div>
                                <div className="flex items-center">
                                  <Coffee className="h-4 w-4 mr-1 text-amber-500" />
                                  <span>
                                    ₹{product.revenue.toFixed(2)} revenue
                                  </span>
                                </div>
                              </div>
                              <div className="flex gap-2 mt-3 xs:mt-0">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-amber-200 hover:bg-amber-100"
                                >
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit
                                </Button>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="border-amber-200 hover:bg-amber-100"
                                    >
                                      <SlidersHorizontal className="h-4 w-4" />
                                      <span className="sr-only">
                                        More options
                                      </span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>
                                      Options
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                      <Edit className="h-4 w-4 mr-2" />
                                      Edit Product
                                    </DropdownMenuItem>
                                    {product.published ? (
                                      <DropdownMenuItem>
                                        <Eye className="h-4 w-4 mr-2" />
                                        Unpublish
                                      </DropdownMenuItem>
                                    ) : (
                                      <DropdownMenuItem>
                                        <Eye className="h-4 w-4 mr-2" />
                                        Publish
                                      </DropdownMenuItem>
                                    )}
                                    {product.featured ? (
                                      <DropdownMenuItem>
                                        <Star className="h-4 w-4 mr-2" />
                                        Remove from Featured
                                      </DropdownMenuItem>
                                    ) : (
                                      <DropdownMenuItem>
                                        <Star className="h-4 w-4 mr-2" />
                                        Mark as Featured
                                      </DropdownMenuItem>
                                    )}
                                    <DropdownMenuItem>
                                      <Copy className="h-4 w-4 mr-2" />
                                      Duplicate
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-500">
                                      <Trash className="h-4 w-4 mr-2" />
                                      Delete Product
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Empty state (hidden when there are products) */}
                <div className="hidden">
                  <Card className="border-amber-200 text-center p-8">
                    <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
                      <div className="rounded-full bg-amber-100 p-4">
                        <Package className="h-8 w-8 text-amber-500" />
                      </div>
                      <CardTitle>No products yet</CardTitle>
                      <CardDescription>
                        Start selling your digital products, templates, courses,
                        or services to your supporters.
                      </CardDescription>
                      <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Your First Product
                      </Button>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="orders" className="space-y-4">
                <Card className="border-amber-200">
                  <CardHeader>
                    <CardTitle>Orders</CardTitle>
                    <CardDescription>
                      View and manage your product orders
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Order management interface will appear here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="customers" className="space-y-4">
                <Card className="border-amber-200">
                  <CardHeader>
                    <CardTitle>Customers</CardTitle>
                    <CardDescription>
                      View and manage your store customers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Customer management interface will appear here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-4">
                <Card className="border-amber-200">
                  <CardHeader>
                    <CardTitle>Store Settings</CardTitle>
                    <CardDescription>
                      Configure your store preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Store settings interface will appear here.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Add Product Form (hidden by default, would be shown in a modal or separate page) */}
        </main>
      </div>
    </div>
  )
}

// Additional icons needed
function Eye({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function Copy({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}

function Star({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
