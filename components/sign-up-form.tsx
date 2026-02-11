"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Check,
  X,
} from "lucide-react"
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

const signUpSchema = z
  .object({
    name: z
      .string()
      .min(1, "Name is required")
      .min(2, "Name must be at least 2 characters"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[0-9]/, "Must contain at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type SignUpValues = z.infer<typeof signUpSchema>

function PasswordStrength({ password }: { password: string }) {
  const checks = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "One uppercase letter", met: /[A-Z]/.test(password) },
    { label: "One number", met: /[0-9]/.test(password) },
  ]

  if (!password) return null

  return (
    <div className="mt-2 flex flex-col gap-1.5">
      {checks.map((check) => (
        <div key={check.label} className="flex items-center gap-2">
          {check.met ? (
            <Check className="h-3.5 w-3.5 text-primary" />
          ) : (
            <X className="h-3.5 w-3.5 text-muted-foreground" />
          )}
          <span
            className={`text-xs ${check.met ? "text-primary" : "text-muted-foreground"}`}
          >
            {check.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    mode: "onTouched",
  })

  const passwordValue = watch("password", "")

  const onSubmit = async (_data: SignUpValues) => {
    setSubmitState("loading")

    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simulate a conflict error for specific email
    if (_data.email === "taken@example.com") {
      setSubmitState("error")
      return
    }

    setSubmitState("success")
  }

  return (
    <Card className="border-border shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-serif text-2xl">
          Create your account
        </CardTitle>
        <CardDescription>
          Join thousands of parents on their journey
        </CardDescription>
      </CardHeader>

      <CardContent>
        {submitState === "success" && (
          <div className="mb-6 flex items-start gap-3 rounded-lg bg-primary/10 p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Account created!
              </p>
              <p className="text-sm text-muted-foreground">
                This is a demo -- no real account was created. You would
                normally receive a confirmation email.
              </p>
            </div>
          </div>
        )}

        {submitState === "error" && (
          <div className="mb-6 flex items-start gap-3 rounded-lg bg-destructive/10 p-4">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Email already taken
              </p>
              <p className="text-sm text-muted-foreground">
                An account with this email already exists. Try{" "}
                <Link
                  href="/signin"
                  className="font-medium text-primary hover:underline"
                >
                  signing in
                </Link>{" "}
                instead.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="signup-name">Full Name</Label>
            <Input
              id="signup-name"
              type="text"
              placeholder="Jane Doe"
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "signup-name-error" : undefined}
              className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
              {...register("name")}
            />
            {errors.name && (
              <p
                id="signup-name-error"
                className="flex items-center gap-1.5 text-sm text-destructive"
                role="alert"
              >
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="signup-email">Email</Label>
            <Input
              id="signup-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "signup-email-error" : undefined}
              className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
              {...register("email")}
            />
            {errors.email && (
              <p
                id="signup-email-error"
                className="flex items-center gap-1.5 text-sm text-destructive"
                role="alert"
              >
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="signup-password">Password</Label>
            <div className="relative">
              <Input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                autoComplete="new-password"
                aria-invalid={!!errors.password}
                aria-describedby={
                  errors.password ? "signup-password-error" : undefined
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
            <PasswordStrength password={passwordValue} />
            {errors.password && (
              <p
                id="signup-password-error"
                className="flex items-center gap-1.5 text-sm text-destructive"
                role="alert"
              >
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="signup-confirm-password">Confirm Password</Label>
            <div className="relative">
              <Input
                id="signup-confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                autoComplete="new-password"
                aria-invalid={!!errors.confirmPassword}
                aria-describedby={
                  errors.confirmPassword
                    ? "signup-confirm-password-error"
                    : undefined
                }
                className={`pr-10 ${errors.confirmPassword ? "border-destructive focus-visible:ring-destructive" : ""}`}
                {...register("confirmPassword")}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p
                id="signup-confirm-password-error"
                className="flex items-center gap-1.5 text-sm text-destructive"
                role="alert"
              >
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.confirmPassword.message}
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
                Creating account...
              </>
            ) : (
              "Create Account"
            )}
          </Button>
        </form>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Try signing up with{" "}
          <span className="font-mono text-foreground">taken@example.com</span>{" "}
          to see the error state.
        </p>
      </CardContent>

      <CardFooter className="justify-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-medium text-primary hover:underline"
          >
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
