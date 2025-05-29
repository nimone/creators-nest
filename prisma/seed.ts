import { prisma } from "@/lib/db.server"

const creatorId = "xRvbSAekymBMnBQGXb3olBylaNsWnrIc"

async function donations() {
  await prisma.donation.createMany({
    data: [
      {
        name: "Arjun Sharma",
        amount: 150,
        message:
          "Your React hooks tutorial changed the way I think about state management! Can't wait for more content like this.",
        recurring: true,
        creatorId,
      },
      {
        name: "Priya Patel",
        amount: 500,
        message:
          "The Next.js authentication series you made saved me days of research. Your explanations are so clear and concise!",
        recurring: false,
        creatorId,
      },
      {
        name: "Vikram Singh",
        amount: 250,
        message:
          "Thanks for the shoutout in your last livestream! Your TailwindCSS tips have completely transformed my workflow.",
        recurring: true,
        creatorId,
      },
      {
        name: "Anjali Desai",
        amount: 200,
        message:
          "Just implemented your Redux Toolkit pattern in our startup's app. It works beautifully! Keep the tutorials coming.",
        recurring: false,
        creatorId,
      },
      {
        name: "Raj Malhotra",
        amount: 300,
        message:
          "Your debugging walkthroughs have saved me countless hours. This donation is worth every rupee for what you've taught me.",
        recurring: false,
        creatorId,
      },
      {
        name: "Neha Kapoor",
        amount: 200,
        message:
          "Been following Your Code Lab for a year now. Your content has helped me land my first dev job! Here's to many more years.",
        recurring: true,
        creatorId,
      },
      {
        name: "Rahul Verma",
        amount: 800,
        message:
          "Your TypeScript series was a game-changer for our team. We've implemented your patterns across our entire codebase.",
        recurring: false,
        creatorId,
      },
      {
        name: "Meera Iyer",
        amount: 1200,
        message:
          "I'm teaching a coding bootcamp and your content has been invaluable as reference material. My students love your explanations!",
        recurring: true,
        creatorId,
      },
      {
        name: "Karthik Nair",
        amount: 600,
        message:
          "Just finished your API optimization tutorial and implemented it in our production app. Our response times improved by 40%!",
        recurring: false,
        creatorId,
      },
      {
        name: "Divya Reddy",
        amount: 300,
        message:
          "Your tutorials helped me transition from backend to full-stack. I've recommended Your Code Lab to everyone in my team.",
        recurring: true,
        creatorId,
      },
    ],
  })
}
async function products() {
  await prisma.product.createMany({
    data: [
      {
        name: "Modern React UI Component Library",
        description:
          "A collection of 50+ reusable React components built with TailwindCSS and fully customizable for your next web project.",
        price: 999,
        image:
          "https://ik.imagekit.io/ably/ghost/prod/2023/11/best-react-component-libraries.png?tr=w-1728,q-50",
        category: "templates",
        featured: true,
        type: "digital",
        sales: 4,
        revenue: 3996,
        creatorId,
      },
      {
        name: "Next.js Full-Stack Starter Kit",
        description:
          "Production-ready Next.js starter with authentication, database setup, API routes, and TailwindCSS pre-configured.",
        price: 1200,
        image:
          "https://nextjstemplates.com/_next/image?url=https%3A%2F%2Fcdn.nextjstemplates.com%2Fstarter.png&w=3840&q=100",
        category: "starters",
        featured: false,
        type: "digital",
        sales: 4,
        revenue: 4800,
        creatorId,
      },
      {
        name: "Web Performance Optimization Guide",
        description:
          "A comprehensive 75-page e-book on optimizing React applications for speed and performance with practical examples.",
        price: 999,
        image:
          "https://www.xenonstack.com/hubfs/web-performance-optimization.png",
        category: "ebooks",
        featured: false,
        type: "digital",
        sales: 3,
        revenue: 2997,
        creatorId,
      },
      {
        name: "Advanced React Patterns Masterclass",
        description:
          "A 6-hour video course covering advanced React patterns including render props, compound components, and custom hooks.",
        price: 2199,
        image: "https://i.ytimg.com/vi/vY0ln8dqX_U/maxresdefault.jpg",
        category: "courses",
        featured: true,
        type: "digital",
        sales: 3,
        revenue: 6597,
        creatorId,
      },
      {
        name: "Tailwind CSS Animation Pack",
        description:
          "100+ ready-to-use Tailwind CSS animations and transitions to enhance your UI with minimal effort.",
        price: 1199,
        image: "https://i.ytimg.com/vi/phWZ_f-Qndw/sddefault.jpg?v=67c54d18",
        category: "utilities",
        featured: false,
        type: "digital",
        sales: 2,
        revenue: 2398,
        creatorId,
      },
      {
        name: "Custom Code Review & Optimization",
        description:
          "I'll review your React/Next.js codebase, identify performance issues, and provide actionable recommendations.",
        price: 1599,
        image:
          "https://mlz8prml4nnc.i.optimole.com/cb:1kp5.54a9a/w:auto/h:auto/q:mauto/f:best/https://fullscale.io/wp-content/uploads/2025/01/code-review-best-practices-featured-image.png",
        category: "services",
        featured: true,
        type: "service",
        sales: 1,
        revenue: 1599,
        creatorId,
      },
    ],
  })
}

async function seed() {
  await donations()
  await products()
}
await seed()
