import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Heart,
  CreditCard,
  Gift,
  Zap,
  ChevronRight,
  Check,
  Star,
  ArrowRight,
  Music,
  Mic,
  Radio,
  Video,
  BookOpen,
  Code,
  Camera,
  Pencil,
  Palette,
  Globe,
  NotebookPenIcon,
  StoreIcon,
  MessageCircleHeartIcon,
} from "lucide-react"
import { auth } from "@/lib/auth.server"
import { headers } from "next/headers"
import { ComponentProps } from "react"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default async function LandingPage() {
  const session = await auth.api.getSession({ headers: await headers() })

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-amber-50 to-white">
      <Header user={session?.user || null} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-6 md:py-12 lg:py-16">
          <div className="relative mx-auto px-4 md:px-6 space-y-12">
            <div className="grid grid-cols-12 gap-6 justify-items-center">
              <div className="col-span-3 space-y-12 place-self-end self-end">
                {/* <img
                  src="/images/influencer.svg"
                  alt="Influencer"
                  className="size-52"
                /> */}
                <img
                  src="/images/educator.svg"
                  alt="Educator"
                  className="size-96"
                />
              </div>
              <div className="col-span-6 w-full space-y-6 pt-6 md:pt-12 lg:pt-16">
                <div className="space-y-4 text-center">
                  <Badge>✨ Creators deserve support! ✨</Badge>
                  <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Let your fans{" "}
                    <span className="bg-gradient-to-r from-amber-500 to-primary bg-clip-text text-transparent">
                      support your creative work
                    </span>
                  </h1>
                  <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                    A fun, friendly way for your audience to support your
                    awesome work. Join thousands of creators who are building
                    sustainable income with Creators Nest.
                  </p>
                </div>
                <div className="flex gap-2 justify-center">
                  <Link href="/auth/login">
                    <Button size="lg" className="animate-pulse">
                      Create your page
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#working">
                    <Button size="lg" variant="outline">
                      See how it works
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Tiny platform fees</span>
                  <Check className="ml-2 h-4 w-4 text-primary" />
                  <span>Instant payouts</span>
                  <Check className="ml-2 h-4 w-4 text-primary" />
                  <span>🇮🇳 Made in India for Indian Creators</span>
                </div>
              </div>
              <div className="col-span-3 space-y-12 place-self-start self-end">
                <img
                  src="/images/artist.svg"
                  alt="Artist"
                  className="size-86"
                />
                {/* <img
                  src="/images/developer.svg"
                  alt="Developer"
                  className="size-64"
                /> */}
              </div>
            </div>
            <div className="flex justify-evenly">
              <img
                src="/images/musicians.svg"
                alt="Musician"
                className="w-96"
              />
              <img
                src="/images/podcasters.svg"
                alt="Podcasters"
                className="w-[500px]"
              />
            </div>
          </div>
        </section>

        {/* Creator Types Section */}
        <section
          id="creators"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-amber-50 to-orange-50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge>All creators are welcome!</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Who can use Creators Nest?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  If you create awesome stuff, we're here to help you get
                  supported. Check out all the creative folks already using
                  Creators Nest!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mt-12">
              {[
                { icon: <Palette className="h-8 w-8" />, name: "Artists" },
                { icon: <Music className="h-8 w-8" />, name: "Musicians" },
                { icon: <Mic className="h-8 w-8" />, name: "Podcasters" },
                { icon: <Radio className="h-8 w-8" />, name: "Streamers" },
                { icon: <Video className="h-8 w-8" />, name: "YouTubers" },
                { icon: <BookOpen className="h-8 w-8" />, name: "Educators" },
                { icon: <Pencil className="h-8 w-8" />, name: "Bloggers" },
                { icon: <Code className="h-8 w-8" />, name: "Developers" },
                { icon: <Palette className="h-8 w-8" />, name: "Designers" },
                { icon: <Camera className="h-8 w-8" />, name: "Photographers" },
                {
                  icon: <NotebookPenIcon className="h-8 w-8" />,
                  name: "Writers",
                },
                { icon: <Globe className="h-8 w-8" />, name: "Non Profits" },
              ].map((creator, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 rounded-lg border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
                >
                  <div className="rounded-full bg-gradient-to-r from-amber-100 to-orange-100 p-3 text-amber-500">
                    {creator.icon}
                  </div>
                  <h3 className="text-lg font-bold">{creator.name}</h3>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground">
                Don't see your creative passion listed? No worries! Creators
                Nest works for{" "}
                <span className="font-bold text-amber-500">
                  all kinds of creators
                </span>
                !
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge>Super cool features!</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything you need to get the support you deserve
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fun, easy tools to help you receive support, connect with your
                  fans, and turn your passion into income!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col space-y-3 rounded-lg border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200">
                <MessageCircleHeartIcon className="h-10 w-10 text-amber-500" />
                <h3 className="text-xl font-bold">Your Support Page</h3>
                <p className="text-muted-foreground">
                  Create your fun, personalized page where fans can support your
                  work and leave sweet messages!
                </p>
              </div>
              <div className="flex flex-col space-y-3 rounded-lg border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200">
                <CreditCard className="h-10 w-10 text-amber-500" />
                <h3 className="text-xl font-bold">Easy Peasy Payments</h3>
                <p className="text-muted-foreground">
                  Accept payments via UPI, credit card, and other popular
                  methods. Specially designed for creators in India 🇮🇳!
                </p>
              </div>
              <div className="flex flex-col space-y-3 rounded-lg border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200">
                <Gift className="h-10 w-10 text-amber-500" />
                <h3 className="text-xl font-bold">VIP Membership Tiers</h3>
                <p className="text-muted-foreground">
                  Offer monthly support options with exclusive perks for your
                  biggest fans. They'll love it!
                </p>
              </div>
              <div className="flex flex-col space-y-3 rounded-lg border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200">
                <Zap className="h-10 w-10 text-amber-500" />
                <h3 className="text-xl font-bold">Tiny Plaform Fees</h3>
                <p className="text-muted-foreground">
                  Keep more of what you earn with our tiny plaform fees as
                  compared to other platforms. No more 30% cuts!
                </p>
              </div>
              <div className="flex flex-col space-y-3 rounded-lg border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200">
                <StoreIcon className="h-10 w-10 text-amber-500" />
                <h3 className="text-xl font-bold">Your Own Digital Store</h3>
                <p className="text-muted-foreground">
                  Start selling your digital products, merch, and more directly
                  to your fans in minutes. Easy peasy!
                </p>
              </div>
              <div className="flex flex-col space-y-3 rounded-lg border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200">
                <Heart className="h-10 w-10 text-amber-500" />
                <h3 className="text-xl font-bold">Supporter Wall of Fame</h3>
                <p className="text-muted-foreground">
                  Show off your amazing supporters and their lovely messages on
                  your page. Spread the love! ❤️
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="working"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-amber-50 to-orange-50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge>It's super easy!</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How Creators Nest works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started in minutes and start collecting virtual coffees
                  from your awesome fans!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-4 group">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-amber-200 to-orange-200 text-amber-900 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-3xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Create your page</h3>
                <p className="text-center text-muted-foreground">
                  Sign up (it takes 2 minutes!) and make your Creators Nest page
                  super cute with your branding, bio, and links.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 group">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-amber-200 to-orange-200 text-amber-900 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-3xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Share with your fans</h3>
                <p className="text-center text-muted-foreground">
                  Share your unique link with your followers across social media
                  and in your content. Make it rain! ☔
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 group">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-amber-200 to-orange-200 text-amber-900 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-3xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Get caffeinated!</h3>
                <p className="text-center text-muted-foreground">
                  Watch the virtual coffees (and real money) roll in when fans
                  support your amazing work. Woohoo! 🎉
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/auth/login">
                <Button size="lg">
                  Create your page
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge>No hidden fees!</Badge>

                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple, transparent pricing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  No monthly fees. Tiny platform fees. Just a small transaction
                  fee when you receive support. More money in your pocket!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col rounded-lg border border-amber-200 bg-white shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Basic</h3>
                  <div className="mt-4 text-center">
                    <span className="text-4xl font-bold">Free</span>
                    <span className="text-muted-foreground">/forever</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-amber-500" />
                      <span>Custom support page</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-amber-500" />
                      <span>Accept one-time payments</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-amber-500" />
                      <span>Supporter wall</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-amber-500" />
                      <span>5% plaform fee</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col p-6 pt-0">
                  <Link href="/auth/login" className="w-full">
                    <Button variant="outline" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border border-amber-200 bg-white shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200 relative scale-105">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular!
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <div className="mt-4 text-center">
                    <span className="text-4xl font-bold">₹499</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-amber-500" />
                      <span>All Basic features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-amber-500" />
                      <span>Monthly memberships</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-amber-500" />
                      <span>Custom thank you messages</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-amber-500" />
                      <span>3.5% plaform fee</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col p-6 pt-0">
                  <Link href="/auth/login" className="w-full">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border border-amber-200 bg-white shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Premium</h3>
                  <div className="mt-4 text-center">
                    <span className="text-4xl font-bold">₹1199</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-amber-500" />
                      <span>All Pro features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-amber-500" />
                      <span>Multiple membership tiers</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-amber-500" />
                      <span>Analytics dashboard</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-amber-500" />
                      <span>2.9% plaform fee</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 pt-0">
                  <Link href="/auth/login" className="w-full">
                    <Button variant="outline" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-amber-50 to-orange-50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                  The love is real!
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Creators are raving about us
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it - see what creators are saying
                  about their Creators Nest experience!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col space-y-4 rounded-lg border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Creators Nest has completely changed how I monetize my art!
                  My fans love sending me virtual coffees, and I love waking up
                  to new supporter notifications. It's like Christmas every
                  day!"
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="rounded-full bg-gradient-to-r from-amber-100 to-orange-100 p-1">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">
                      Illustrator & Comic Artist
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "As a podcaster, I was looking for a fun way to monetize
                  beyond boring ads. Creators Nest gave me exactly what I needed
                  - now my listeners buy me virtual coffees and I can actually
                  afford real ones! ☕"
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="rounded-full bg-gradient-to-r from-amber-100 to-orange-100 p-1">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">
                      Podcast Host
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "The membership tiers feature is AMAZING for my newsletter! My
                  coffee crew (what I call my supporters) gets exclusive
                  content, and I get to write full-time. Win-win!"
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="rounded-full bg-gradient-to-r from-amber-100 to-orange-100 p-1">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Emma Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">
                      Newsletter Writer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge>Got questions?</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Frequently asked questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about Creators Nest. Still have
                  questions? We're here to help!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
              <div className="space-y-4 rounded-lg border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200">
                <h3 className="text-xl font-bold">How do I get paid?</h3>
                <p className="text-muted-foreground">
                  Connect your PayPal, Stripe, or bank account to receive
                  payments. Funds are typically available within 1-2 business
                  days. Easy peasy lemon squeezy! 🍋
                </p>
              </div>
              <div className="space-y-4 rounded-lg border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200">
                <h3 className="text-xl font-bold">What are the fees?</h3>
                <p className="text-muted-foreground">
                  Creators Nest charges a small plaform fee (2.9-5% depending on
                  your plan) plus payment processor fees. More money in your
                  pocket! 💰
                </p>
              </div>
              <div className="space-y-4 rounded-lg border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200">
                <h3 className="text-xl font-bold">
                  Can I offer subscriptions?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! With our Pro and Premium plans, you can offer
                  monthly membership tiers with different perks for your
                  supporters. They'll feel like VIPs! ⭐
                </p>
              </div>
              <div className="space-y-4 rounded-lg border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200">
                <h3 className="text-xl font-bold">
                  Is Creators Nest available worldwide?
                </h3>
                <p className="text-muted-foreground">
                  Yes indeed! Creators from over 150 countries can use Creators
                  Nest to receive support from their audience globally. We're
                  bringing creators and fans together worldwide! 🌎
                </p>
              </div>
              <div className="space-y-4 rounded-lg border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200">
                <h3 className="text-xl font-bold">Can I customize my page?</h3>
                <p className="text-muted-foreground">
                  You bet! Customize your page with your profile picture, cover
                  image, bio, links to your social media, and more. Make it as
                  unique as you are! ✨
                </p>
              </div>
              <div className="space-y-4 rounded-lg border border-amber-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200">
                <h3 className="text-xl font-bold">How do I get started?</h3>
                <p className="text-muted-foreground">
                  Simply sign up for a free account (takes 2 minutes!),
                  customize your page, and share your unique link with your
                  audience to start receiving support. It's that easy! 🚀
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge>Ready for some coffee? ☕</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Let's get you started!
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of creators who are building sustainable income
                  with Creators Nest. Your fans are waiting to support you!
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2 sm:flex-row">
                  <Input type="email" placeholder="Enter your email" />
                  <Button type="submit">Get Started</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  Free to join. By signing up, you agree to our terms of
                  service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function Badge({ children }: ComponentProps<"div">) {
  return (
    <div className="inline-flex items-center rounded-full border border-primary/20 bg-accent px-3 py-1 text-sm font-semibold text-amber-700">
      {children}
    </div>
  )
}
