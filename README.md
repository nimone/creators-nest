# 🎨 Creators Nest

Creators Nest is a unified web platform that empowers creators — artists, developers, musicians, writers, and more — by providing a space to **sell digital products** and receive **direct support** from supporters through localized payment methods in India like UPI, PhonePe, Paytm, Wallets, etc.

Checkout live at: https://cn.nism.me

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Motivation](#motivation)
- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [License](#license)
- [Contact](#contact)

---

## 🧩 About the Project

> A platform built for the creator economy in India and beyond.

**Creators Nest** combines two key elements of creator monetization:

- A **Marketplace** where creators can list and sell digital goods.
- A **Support page** where fans can donate or support one-time using local payment systems.

Our mission is to reduce dependency on global platforms that don't support local payments or charge high fees, and instead offer a simple, creator-first experience.

---

## 💡 Motivation

While platforms like Patreon, Gumroad, and BuyMeACoffee offer partial solutions, they often:

- Don’t support Indian payment methods.
- Have high platform/service fees.
- Lack localized experience or hybrid functionality.

**Creators Nest** aims to bridge that gap — building a **Made-for-India** solution to directly empower local creators with:

- UPI-based donations.
- A simple store interface.
- Affordable platform with minimal fees.

---

## 🚀 Features

- 🛒 Creator Storefront to sell digital goods
- 💰 Support/Donate with UPI, Cards, Wallets, etc
- 📊 Dashboard to view earnings, supporters, and analytics
- 🔐 Secure Authentication with Better Auth
- ⚙️ Profile and Payment Settings Management
- 🎯 Responsive, mobile-first design

---

## 🖼 Screenshots

<!-- You can upload screenshots/gifs and link here -->

> Coming soon...

---

## 🧪 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Git
- Docker
- [Razorpay](https://x.razorpay.com) credentials (for test mode)
- [Google OAuth](https://www.better-auth.com/docs/authentication/google) credentials (for Login with Google to work)

### Installation

1. **Clone the repo**

```bash
git clone https://github.com/nimone/creators-nest.git
cd creators-nest
```

2. Set up environment variables

Example .env:

```
DATABASE_URL="file:../db/db.sqlite"

NEXT_PUBLIC_SELF_URL=<Your Domain or http://localhost:3000>

# BetterAuth configuration
BETTER_AUTH_URL=<Your Domain or http://localhost:3000>
BETTER_AUTH_SECRET=<Random SECRET>
GOOGLE_CLIENT_ID=<Obtain from Google Console for Google OAuth to work>
GOOGLE_CLIENT_SECRET=<From Google Console>

# Razorpay Config
RAZORPAY_KEY_ID=<Obtain from https://x.razorpay.com>
RAZORPAY_KEY_SECRET=<Obtain from Rayorpay>
NEXT_PUBLIC_RAZORPAY_KEY_ID=<Same as RAZORPAY_KEY_ID>


# Deployment configuration
SSL_EMAIL=<Your EMAIL>
DOMAIN=<YOUR DOMAIN>
PORT=5000
```

3. Run the application

Make sure you are in the root directory (where docker-compose.yml is located), then run:

```bash
docker compose up --build
```

## ⚙️ Available Scripts

```bash
bun run dev       # Runs the dev server app
bun run build     # Builds for production
bun run start     # Runs production build
```

## 📄 License

Distributed under the MIT License. See LICENSE for more information.

## 📫 Contact

Project by Nishant Mogha

Email: nimogha@gmail.com
GitHub: @nimone
