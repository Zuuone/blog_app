import { CardDescription, CardTitle } from "@/components/ui/card";
import { FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { register } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [registerPayload, setRegisterPayload] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: register, // This is the mutation function (ensure it's correctly implemented)
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isEmailFilled = !!registerPayload.email;
    const isPasswordFilled = !!registerPayload.password;
    const isNameFilled = !!registerPayload.name;
    const isConfirmPassowrdFilled = !!registerPayload.confirmPassword;

    if (
      isEmailFilled &&
      isPasswordFilled &&
      isNameFilled &&
      isConfirmPassowrdFilled &&
      isPasswordFilled === isConfirmPassowrdFilled
    ) {
      handleRegister(registerPayload);
    } else {
      // Handle validation error (optional)

      console.log("Name, Email, password and confirm password must be filled.");
    }
  };
  return (
    <div className="flex min-h-screen flex-grow flex-col items-center justify-center">
      <div className="w-full max-w-md rounded-xl border bg-card text-card-foreground shadow">
        {/* Outer flex container */}
        <div className="flex flex-col space-y-1.5 p-6">
          {/* Heading and subheading */}
          <CardTitle className="text-center text-2xl font-bold tracking-tight">
            Sign Up for BitBlogs
          </CardTitle>
          <CardDescription className="text-center text-sm text-muted-foreground">
            Enter your credentials to access your account
          </CardDescription>
        </div>

        {/* Form content */}
        <div className="p-6 pt-0">
          <form className="space-y-4">
            {/* Name input field */}
            <div className="space-y-2">
              <FormItem className="flex flex-col gap-1">
                <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Name
                </Label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  name="name"
                  placeholder="John Doe"
                  value={registerPayload.name}
                  onChange={(e) => {
                    setRegisterPayload({
                      name: e.target.value,
                      email: registerPayload.email,
                      password: registerPayload.password,
                      confirmPassword: registerPayload.confirmPassword,
                    });
                  }}
                />
              </FormItem>
            </div>

            {/* Email input field */}
            <div className="space-y-2">
              <FormItem className="flex flex-col gap-1">
                <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </Label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  name="email"
                  placeholder="John@examle.com"
                  value={registerPayload.email}
                  onChange={(e) => {
                    setRegisterPayload({
                      name: registerPayload.name,
                      email: e.target.value,
                      password: registerPayload.password,
                      confirmPassword: registerPayload.confirmPassword,
                    });
                  }}
                />
              </FormItem>
            </div>

            {/* Password input field */}
            <div className="space-y-2">
              <FormItem className="flex flex-col gap-1">
                <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Password
                </Label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  name="password"
                  type="password"
                  placeholder="*******"
                  value={registerPayload.password}
                  onChange={(e) => {
                    setRegisterPayload({
                      name: registerPayload.name,
                      email: registerPayload.email,
                      password: e.target.value,
                      confirmPassword: registerPayload.confirmPassword,
                    });
                  }}
                />
              </FormItem>
            </div>

            {/* Confirm Password input field */}
            <div className="space-y-2">
              <FormItem className="flex flex-col gap-1">
                <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Confirm Password
                </Label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  name="confirmpassowrd"
                  type="password"
                  placeholder="*******"
                  value={registerPayload.confirmPassword}
                  onChange={(e) => {
                    setRegisterPayload({
                      name: registerPayload.name,
                      email: registerPayload.email,
                      password: registerPayload.password,
                      confirmPassword: e.target.value,
                    });
                  }}
                />
              </FormItem>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Footer-like section for login redirect */}
        <div className="flex items-center justify-center p-6 pt-0">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/signIn">
              <a className="text-primary hover:underline" href="/login">
                Log in
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
