import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { categories } from "./page"

export default function AddProductSheet({}) {
  return (
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
        <form className="h-full px-4 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="product-name" className="text-sm font-medium">
                Product Name
              </label>
              <Input
                name="name"
                id="product-name"
                placeholder="Enter product name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="product-price" className="text-sm font-medium">
                Price (₹)
              </label>
              <Input
                id="product-price"
                type="number"
                name="price"
                placeholder="1999"
                required
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
            <Textarea
              id="product-description"
              name="description"
              rows={4}
              placeholder="Describe your product..."
              required
            ></Textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="product-category" className="text-sm font-medium">
                Category
              </label>
              <Select required name="category">
                <SelectTrigger className="border-amber-200 focus-visible:ring-amber-500 w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.slice(1).map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="product-type" className="text-sm font-medium">
                Product Type
              </label>
              <Select required name="type" defaultValue="digital">
                <SelectTrigger className="border-amber-200 focus-visible:ring-amber-500 w-full">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="digital">Digital Download</SelectItem>
                  <SelectItem value="service">Service</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Product Image</label>
            <Input type="url" name="image" required />
            {/* <div className="border-2 border-dashed border-amber-200 rounded-md p-6 text-center">
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
                        </div> */}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Product File</label>
            <Input type="url" name="file" />
          </div>
          <div className="mt-auto mb-4 grid grid-cols-2 gap-2">
            <SheetClose asChild>
              <Button variant="outline">Cancel</Button>
            </SheetClose>
            <Button>Publish Product</Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}
