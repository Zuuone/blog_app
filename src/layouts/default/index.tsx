import { Link } from "react-router-dom";

const DefaultPage = () => {
  return (
    <main className="flex-grow px-4 py-8">
      <div className="container mx-auto flex flex-col gap-8 md:flex-row">
        <section className="flex flex-col space-y-8 md:w-2/3">
          <Link to="/posts/1">
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="mb-4">
                  <img
                    src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&amp;width=400"
                    alt="Cover image for The Future of Blockchain Technology"
                    className="h-[200px] w-full rounded-lg object-cover"
                  />
                </div>
                <div className="text-2xl font-bold tracking-tight">
                  The Future of Blockchain Technology
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Link
                    className="text-muted-foreground hover:underline"
                    to="/author/1"
                  >
                    John Doe
                  </Link>
                  <span>•</span>
                  <span>May 15, 2023</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris...
                </p>
              </div>
              <div className="flex items-center p-6 pt-0">
                <div className="flex space-x-2">
                  <Link to="/search">
                    <div className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Blockchain
                    </div>
                  </Link>
                  <Link to="/search">
                    <div className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Technology
                    </div>
                  </Link>
                  <Link to="/search">
                    <div className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Future
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/posts/2">
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="mb-4">
                  <img
                    src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&amp;width=400"
                    alt="Cover image for Cryptocurrency: A Beginner's Guide"
                    className="h-[200px] w-full rounded-lg object-cover"
                  />
                </div>
                <div className="text-2xl font-bold tracking-tight">
                  Cryptocurrency: A Beginner's Guide
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Link
                    className="text-muted-foreground hover:underline"
                    to="/author/2"
                  >
                    Jane Smith
                  </Link>
                  <span>•</span>
                  <span>May 18, 2023</span>
                  <span>•</span>
                  <span>7 min read</span>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris...
                </p>
              </div>
              <div className="flex items-center p-6 pt-0">
                <div className="flex space-x-2">
                  <Link to="/search">
                    <div className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Blockchain
                    </div>
                  </Link>
                  <Link to="/search">
                    <div className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Technology
                    </div>
                  </Link>
                  <Link to="/search">
                    <div className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Future
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/posts/3">
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="mb-4">
                  <img
                    src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&amp;width=400"
                    alt="Cover image for Decentralized Finance (DeFi) Explained"
                    className="h-[200px] w-full rounded-lg object-cover"
                  />
                </div>
                <div className="text-2xl font-bold tracking-tight">
                  Decentralized Finance (DeFi) Explained
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Link
                    className="text-muted-foreground hover:underline"
                    to="/author/3"
                  >
                    Alex Johnson
                  </Link>
                  <span>•</span>
                  <span>May 20, 2023</span>
                  <span>•</span>
                  <span>6 min read</span>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris...
                </p>
              </div>
              <div className="flex items-center p-6 pt-0">
                <div className="flex space-x-2">
                  <Link to="/search">
                    <div className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Blockchain
                    </div>
                  </Link>
                  <Link to="/search">
                    <div className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Technology
                    </div>
                  </Link>
                  <Link to="/search">
                    <div className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      Future
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        </section>

        <aside className="space-y-8 md:w-1/3">
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="font-semibold leading-none tracking-tight">
                Popular Tags
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-2">
                <Link to="/search">
                  <div className="inline-flex items-center rounded-md border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-white shadow transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    Blockchain
                  </div>
                </Link>
                <Link to="/search">
                  <div className="inline-flex items-center rounded-md border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-white shadow transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    Cryptocurrency
                  </div>
                </Link>
                <Link to="/search">
                  <div className="inline-flex items-center rounded-md border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-white shadow transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    Technology
                  </div>
                </Link>
                <Link to="/search">
                  <div className="inline-flex items-center rounded-md border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-white shadow transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    Programming
                  </div>
                </Link>
                <Link to="/search">
                  <div className="inline-flex items-center rounded-md border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-white shadow transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    AI
                  </div>
                </Link>
                <Link to="/search">
                  <div className="inline-flex items-center rounded-md border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-white shadow transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    Machine Learning
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="font-semibold leading-none tracking-tight">
                Featured Authors
              </div>
            </div>
            <div className="p-6 pt-0">
              <ul className="space-y-4">
                <li className="flex flex-col gap-6">
                  <Link className="flex items-center space-x-4" to="/author/4">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <img
                        className="aspect-square h-full w-full"
                        alt="Avatar of Alice Johnson"
                        src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=40&amp;width=40"
                      />
                    </span>
                    <div>
                      <span className="text-black hover:underline dark:text-white">
                        Alice Johnson
                      </span>
                      <p className="text-sm font-light text-black text-muted-foreground dark:text-white">
                        Blockchain Enthusiast
                      </p>
                    </div>
                  </Link>

                  <Link className="flex items-center space-x-4" to="/author/5">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <img
                        className="aspect-square h-full w-full"
                        alt="Avatar of Bob Smith"
                        src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=40&amp;width=40"
                      />
                    </span>
                    <div>
                      <span className="text-black hover:underline dark:text-white">
                        Bob Smith
                      </span>
                      <p className="text-sm font-light text-black text-muted-foreground dark:text-white">
                        Crypto Analyst
                      </p>
                    </div>
                  </Link>

                  <Link className="flex items-center space-x-4" to="/author/6">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <img
                        className="aspect-square h-full w-full"
                        alt="Avatar of Carol Williams"
                        src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=40&amp;width=40"
                      />
                    </span>
                    <div>
                      <span className="text-black hover:underline dark:text-white">
                        Carol Williams
                      </span>
                      <p className="text-sm font-light text-black text-muted-foreground dark:text-white">
                        Tech Journalist
                      </p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default DefaultPage;
