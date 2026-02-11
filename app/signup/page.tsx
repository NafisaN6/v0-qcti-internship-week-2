import type { Metadata } from "next"
import { AuthLayout } from "@/components/auth-layout"
import { SignUpForm } from "@/components/sign-up-form"

export const metadata: Metadata = {
  title: "Sign Up - PreParenting",
  description: "Create your free PreParenting account and join thousands of parents on their parenting journey.",
}

export default function SignUpPage() {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  )
}
