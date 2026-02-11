import type { Metadata } from "next"
import { AuthLayout } from "@/components/auth-layout"
import { SignInForm } from "@/components/sign-in-form"

export const metadata: Metadata = {
  title: "Sign In - PreParenting",
  description: "Sign in to your PreParenting account to access personalized parenting tips and resources.",
}

export default function SignInPage() {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  )
}
