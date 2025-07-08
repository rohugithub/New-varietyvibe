"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

import { AccountLayout } from "@/components/AccountLayout"
import { AccountOverview } from "@/components/AccountOverview"

export default function AccountPage() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (!session) {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-gray-50">
     
      <AccountLayout>
        <AccountOverview />
      </AccountLayout>
    </div>
  )
}
