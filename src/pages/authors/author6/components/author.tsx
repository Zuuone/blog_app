import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { Avatar } from "@radix-ui/react-avatar";
// import { fromTheme } from "tailwind-merge";

const Author6 = () => {
  return (
    <div className="flex min-h-screen flex-grow flex-col items-center px-4 py-8">
      <Card className="mb-12">
        <CardHeader className="flex h-[244px] w-[896px] shadow-lg">
          <CardTitle className="flex-col items-center rounded-lg bg-card md:flex-row md:items-start">
            <div
              className="flex flex-col items-center rounded-lg bg-card md:flex-row md:items-start"
              style={{ opacity: 1, transform: "none" }}
            >
              <Avatar>
                <span className="relative mb-4 flex h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-primary md:mb-0 md:mr-8">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                    JD
                  </span>
                </span>
              </Avatar>
              <div className="h-[180px] w-[672px]">
                <div className="flex flex-col gap-1">
                  <div>
                    <div className="flex-grow text-center md:text-left">
                      <h1 className="mb-2 text-3xl font-bold">Jane Doe</h1>
                      <p className="mb-4 text-base text-muted-foreground">
                        Tech enthusiast, software engineer, and avid blogger.
                        Passionate about AI, web development, and the future of
                        technology.
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 flex justify-center space-x-4 md:justify-start">
                    <button className="inline-flex h-9 w-9 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-twitter h-4 w-4"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </button>
                    <button className="inline-flex h-9 w-9 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-facebook h-4 w-4"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </button>
                    <button className="inline-flex h-9 w-9 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin h-4 w-4"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </button>
                    <button className="inline-flex h-9 w-9 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github h-4 w-4"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                      <span className="sr-only">GitHub</span>
                    </button>
                  </div>
                  <div className="flex justify-center space-x-4 text-sm text-muted-foreground md:justify-start">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-users mr-1 h-4 w-4"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      1234 Followers
                    </span>
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-users mr-1 h-4 w-4"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      567 Following
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>
      <Tabs defaultValue="articles">
        <TabsList className="mb-8 grid h-9 w-[896px] grid-cols-2 items-center justify-center rounded-lg p-1 text-muted-foreground">
          <TabsTrigger value="articles" className="text-white">
            Articles
          </TabsTrigger>
          <TabsTrigger value="about" className="text-white">
            About
          </TabsTrigger>
        </TabsList>
        <TabsContent value="articles" className="flex flex-col gap-6">
          <CardDescription className="h-[448px] w-[896px]">
            <div style={{ opacity: 1, transform: "none" }}>
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="mb-4">
                    <img
                      src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&amp;width=400"
                      alt="Cover image for The Future of Blockchain Technology"
                      className="h-[200px] w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="text-2xl font-bold tracking-tight hover:text-primary">
                    <a href="/posts/1">The Future of Blockchain Technology</a>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <a className="hover:underline" href="/author/1">
                      John Doe
                    </a>
                    <span>•</span>
                    <span>May 15, 2023</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris...
                  </p>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <div className="flex space-x-2">
                    <div className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Blockchain
                    </div>
                    <div className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Technology
                    </div>
                    <div className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Future
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardDescription>
          <CardDescription className="h-[448px] w-[896px]">
            <div style={{ opacity: 1, transform: "none" }}>
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="mb-4">
                    <img
                      src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&amp;width=400"
                      alt="Cover image for Cryptocurrency: A Beginner's Guide"
                      className="h-[200px] w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="text-2xl font-bold tracking-tight hover:text-primary">
                    <a href="/posts/2">Cryptocurrency: A Beginner's Guide</a>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <a className="hover:underline" href="/author/2">
                      Jane Smith
                    </a>
                    <span>•</span>
                    <span>May 18, 2023</span>
                    <span>•</span>
                    <span>7 min read</span>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris...
                  </p>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <div className="flex space-x-2">
                    <div className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Blockchain
                    </div>
                    <div className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Technology
                    </div>
                    <div className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Future
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardDescription>
          <CardDescription className="h-[448px] w-[896px]">
            <div style={{ opacity: 1, transform: "none" }}>
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="mb-4">
                    <img
                      src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&amp;width=400"
                      alt="Cover image for Decentralized Finance (DeFi) Explained"
                      className="h-[200px] w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="text-2xl font-bold tracking-tight hover:text-primary">
                    <a href="/posts/3">
                      Decentralized Finance (DeFi) Explained
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <a className="hover:underline" href="/author/3">
                      Alex Johnson
                    </a>
                    <span>•</span>
                    <span>May 20, 2023</span>
                    <span>•</span>
                    <span>6 min read</span>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris...
                  </p>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <div className="flex space-x-2">
                    <div className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Blockchain
                    </div>
                    <div className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Technology
                    </div>
                    <div className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Future
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardDescription>
        </TabsContent>
        <TabsContent value="about">
          <CardDescription className="h-[448px] w-[896px]">
            <div
              data-state="active"
              data-orientation="horizontal"
              role="tabpanel"
              aria-labelledby="radix-:r10:-trigger-about"
              id="radix-:r10:-content-about"
              tabIndex={0}
              className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="font-semibold leading-none tracking-tight">
                    About Jane Doe
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-muted-foreground">
                    Jane Doe is a seasoned software engineer with over a decade
                    of experience in web development. She specializes in
                    JavaScript, React, and Node.js, and has a keen interest in
                    emerging technologies like AI and blockchain. Jane is a
                    frequent speaker at tech conferences and contributes to
                    various open-source projects.
                  </p>
                  <h3 className="mb-2 mt-4 font-semibold">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                      JavaScript
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                      React
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                      Node.js
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                      Python
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                      AI
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                      Blockchain
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                      Web Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardDescription>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Author6;
