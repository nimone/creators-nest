import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { verifyAccess } from "@/lib/auth.server"
import { prisma } from "@/lib/db.server"
import ProfileForm from "@/components/ProfileForm"
import { AccountSettings } from "./account-settings"
import { Button } from "@/components/ui/button"
import ProfileSettings from "./profile-settings"
import { PaymentsSettings } from "./payment-settings"
// import { PaymentSettings } from "./components/payment-settings"

export default async function SettingsPage() {
  const { user } = await verifyAccess()
  const creatorPref = await prisma.creatorPref.findFirst({
    where: { userId: user.id },
  })

  return (
    <main>
      <header className="flex flex-col items-center gap-2 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your profile, account and payment settings
        </p>
      </header>
      <Tabs defaultValue="profile" className="space-y-4">
        <div className="mx-auto overflow-x-auto pb-2">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="profile" className="mx-auto w-2xl space-y-4">
          <Card className="max-w-screen-md">
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>
                Update your profile information and creator preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-6">
              <ProfileSettings user={user} creatorPref={creatorPref} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="account" className="mx-auto w-2xl space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
                Update your account information and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AccountSettings user={user} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="payments" className="mx-auto w-2xl space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
              <CardDescription>
                Manage your payment methods and payout preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PaymentsSettings />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
