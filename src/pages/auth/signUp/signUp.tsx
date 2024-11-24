import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex min-h-screen flex-grow flex-col items-center justify-center">
      <div className="w-full max-w-md rounded-xl border bg-card text-card-foreground shadow">
        {/* Outer flex container */}
        <div className="flex flex-col space-y-1.5 p-6">
          {/* Heading and subheading */}
          <div className="text-center text-2xl font-bold tracking-tight">
            Sign Up for BitBlogs
          </div>
          <div className="text-center text-sm text-muted-foreground">
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
