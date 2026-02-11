"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Eye, EyeOff, AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
})

type SignInValues = z.infer<typeof signInSchema>

export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    mode: "onTouched",
  })

  const onSubmit = async (_data: SignInValues) => {
    setSubmitState("loading")

    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simulate a demo error for specific email
    if (_data.email === "error@example.com") {
      setSubmitState("error")
      return
    }

    setSubmitState("success")
  }

  return (
    <Card className="border-border shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-serif text-2xl">Welcome back</CardTitle>
        <CardDescription>
          Sign in to access your parenting resources
        </CardDescription>
      </CardHeader>

      <CardContent>
        {submitState === "success" && (
          <div className="mb-6 flex items-start gap-3 rounded-lg bg-primary/10 p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Sign in successful!
              </p>
              <p className="text-sm text-muted-foreground">
                This is a demo -- no real authentication is connected.
              </p>
            </div>
          </div>
        )}

        {submitState === "error" && (
          <div className="mb-6 flex items-start gap-3 rounded-lg bg-destructive/10 p-4">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Unable to sign in
              </p>
              <p className="text-sm text-muted-foreground">
                The email or password you entered is incorrect. Please try
                again.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="signin-email">Email</Label>
            <Input
              id="signin-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "signin-email-error" : undefined}
              className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
              {...register("email")}
            />
            {errors.email && (
              <p
                id="signin-email-error"
                className="flex items-center gap-1.5 text-sm text-destructive"
                role="alert"
              >
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="signin-password">Password</Label>
              <button
                type="button"
                className="text-xs font-medium text-primary hover:underline"
                onClick={() =>
                  alert("This is a demo. Password reset is not available.")
                }
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <Input
                id="signin-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                aria-invalid={!!errors.password}
                aria-describedby={
                  errors.password ? "signin-password-error" : undefined
                }
                className={`pr-10 ${errors.password ? "border-destructive focus-visible:ring-destructive" : ""}`}
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p
                id="signin-password-error"
                className="flex items-center gap-1.5 text-sm text-destructive"
                role="alert"
              >
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="mt-2 w-full"
            disabled={submitState === "loading"}
          >
            {submitState === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Try signing in with{" "}
          <span className="font-mono text-foreground">error@example.com</span>{" "}
          to see the error state.
        </p>
      </CardContent>

      <CardFooter className="justify-center">
        <p className="text-sm text-muted-foreground">
          {"Don't have an account? "}
          <Link
            href="/signup"
            className="font-medium text-primary hover:underline"
          >
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
