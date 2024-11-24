// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { FormItem } from "@/components/ui/form";

import { register } from "@/supabase/auth"; // Assuming 'register' is the function to handle registration
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Label } from "@radix-ui/react-label";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [registerPayload, setRegisterPayload] = useState({
    email: "",
    password: "",
  });

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: register, // This is the mutation function (ensure it's correctly implemented)
  });

  const handleSubmit = () => {
    const isEmailFilled = !!registerPayload.email;
    const isPasswordFilled = !!registerPayload.password;

    if (isEmailFilled && isPasswordFilled) {
      handleRegister(registerPayload);
    } else {
      // Handle validation error (optional)

      console.log("Email and password must be filled.");
    }
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3">
      <div className="h-[388px] w-[448px] max-w-md rounded-xl border bg-card text-card-foreground shadow">
        <div className="flex flex-col items-center justify-center space-y-1.5 p-6">
          <CardTitle className="text-center text-2xl font-bold tracking-tight">
            Log in to BitBlogs
          </CardTitle>
          <CardDescription className="text-center text-sm text-muted-foreground">
            Enter your credentials to access your account
          </CardDescription>
        </div>
        {/* <label></label> */}
        <div className="p-6 pt-0">
          <FormItem className="flex flex-col gap-1">
            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email
            </Label>
            <input
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              name="email"
              placeholder="John@example.com"
              value={registerPayload.email}
              onChange={(e) => {
                setRegisterPayload({
                  email: e.target.value,
                  password: registerPayload.password,
                });
              }}
            />
          </FormItem>

          <FormItem className="mt-4 flex flex-col gap-1">
            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Password
            </Label>
            <input
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              type="password"
              name="password"
              value={registerPayload.password}
              onChange={(e) => {
                setRegisterPayload({
                  email: registerPayload.email,
                  password: e.target.value,
                });
              }}
            />
          </FormItem>

          <button
            className="mt-4 inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div className="flex items-center justify-between p-6 pt-0">
          <a
            className="text-sm text-primary hover:underline"
            href="/forgot-password"
          >
            Forgot password?
          </a>
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signUp">
              <a className="text-primary hover:underline" href="/register">
                Sign up
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

// <div className="flex min-h-screen flex-grow flex-col items-center justify-center">
//   <div className="mx-auto w-full max-w-md rounded-xl border bg-card text-card-foreground shadow">
//     <div className="flex flex-col space-y-1.5 p-6">
//       <div className="text-center text-2xl font-bold tracking-tight">
//         Log in to BitBlogs
//       </div>
//       <div className="text-center text-sm text-muted-foreground">
//         Enter your credentials to access your account
//       </div>
//     </div>
//     <div className="p-6 pt-0">
//       <form className="space-y-4">
//         <div className="space-y-2">
//           <label
//             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             htmlFor="email"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
//             id="email"
//             placeholder="john@example.com"
//             required
//             value=""
//           />
//         </div>
//         <div className="space-y-2">
//           <label
//             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             htmlFor="password"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
//             id="password"
//             required
//             value=""
//           />
//         </div>
//         <button
//           className="inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
//           type="submit"
//         >
//           Log In
//         </button>
//       </form>
//     </div>
//     <div className="flex items-center justify-between p-6 pt-0">
//       <a
//         className="text-sm text-primary hover:underline"
//         href="/forgot-password"
//       >
//         Forgot password?
//       </a>
//       <p className="text-sm text-muted-foreground">
//         Don't have an account?{" "}
//         <Link to="/signUp" className="text-primary hover:underline">
//           Sign up
//         </Link>
//       </p>
//     </div>
//   </div>
// </div>

//
//
//
//

// return (
// <FormField
//   control={form.control}
//   name="username"
//   render={({ field }) => (
//     <FormItem>
//       <FormLabel>Username</FormLabel>
//       <FormControl>
//         <Input placeholder="shadcn" {...field} />
//       </FormControl>
//       <FormDescription>This is your public display name.</FormDescription>
//       <FormMessage />
//     </FormItem>
//   )}
// />

// /;

// function useMutation(arg0: {
//   mutationKey: string[];
//   mutationFn: ({
//     email,
//     password,
//   }: {
//     email: string;
//     password: string;
//   }) => Promise<import("@supabase/auth-js").AuthResponse>;
// }): { mutate: any } {
//   throw new Error("Function not implemented.");
// }
