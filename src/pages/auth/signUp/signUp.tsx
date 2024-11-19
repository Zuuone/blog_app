const SignUp = () => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow w-full max-w-md">
      {/* Outer flex container */}
      <div className="flex flex-col space-y-1.5 p-6">
        {/* Heading and subheading */}
        <div className="tracking-tight text-2xl font-bold text-center">
          Sign Up for BitBlogs
        </div>
        <div className="text-sm text-muted-foreground text-center">
          Create your account to start blogging
        </div>
      </div>

      {/* Form content */}
      <div className="p-6 pt-0">
        <form className="space-y-4">
          {/* Name input field */}
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              id="name"
              placeholder="John Doe"
              required
              value=""
            />
          </div>

          {/* Email input field */}
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              id="email"
              placeholder="john@example.com"
              required
              value=""
            />
          </div>

          {/* Password input field */}
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              id="password"
              required
              value=""
            />
          </div>

          {/* Confirm Password input field */}
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              id="confirm-password"
              required
              value=""
            />
          </div>

          {/* Submit Button */}
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Footer-like section for login redirect */}
      <div className="items-center p-6 pt-0 flex justify-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <a className="text-primary hover:underline" href="/login">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
