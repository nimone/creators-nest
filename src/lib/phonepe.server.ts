import { StandardCheckoutClient, Env } from "pg-sdk-node"

const clientId = process.env.PHONEPE_CLIENT_ID!
const clientSecret = process.env.PHONEPE_CLIENT_SECRET!
const clientVersion = parseInt(process.env.PHONEPE_CLIENT_VERSION || "1")
const env =
  process.env.PHONEPE_ENV === "PRODUCTION" ? Env.PRODUCTION : Env.SANDBOX

export const phonepeClient = StandardCheckoutClient.getInstance(
  clientId,
  clientSecret,
  clientVersion,
  env
)
