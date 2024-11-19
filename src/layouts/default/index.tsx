import { Link } from "react-router-dom";

const DefaultPage = () => {
  return (
    <main className="px-4 py-8 flex-grow">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <section className="md:w-2/3 space-y-8 flex flex-col">
          <Link to="/posts/1">
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="mb-4">
                  <img
                    src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&amp;width=400"
                    alt="Cover image for The Future of Blockchain Technology"
                    className="rounded-lg object-cover w-full h-[200px]"
                  />
                </div>
                <div className="tracking-tight text-2xl font-bold">
                  The Future of Blockchain Technology
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Link
                    className="hover:underline text-muted-foreground"
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
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      Blockchain
                    </div>
                  </Link>
                  <Link to="/search">
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      Technology
                    </div>
                  </Link>
                  <Link to="/search">
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
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
                    className="rounded-lg object-cover w-full h-[200px]"
                  />
                </div>
                <div className="tracking-tight text-2xl font-bold">
                  Cryptocurrency: A Beginner's Guide
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Link
                    className="hover:underline text-muted-foreground"
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
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 ">
                      Blockchain
                    </div>
                  </Link>
                  <Link to="/search">
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      Technology
                    </div>
                  </Link>
                  <Link to="/search">
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
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
                    className="rounded-lg object-cover w-full h-[200px]"
                  />
                </div>
                <div className="tracking-tight text-2xl font-bold">
                  Decentralized Finance (DeFi) Explained
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Link
                    className="hover:underline text-muted-foreground"
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
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      Blockchain
                    </div>
                  </Link>
                  <Link to="/search">
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      Technology
                    </div>
                  </Link>
                  <Link to="/search">
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      Future
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        </section>

        <aside className="md:w-1/3 space-y-8">
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="font-semibold leading-none tracking-tight">
                Popular Tags
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-2">
                <Link to="/search">
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-white shadow hover:bg-primary/80">
                    Blockchain
                  </div>
                </Link>
                <Link to="/search">
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-white shadow hover:bg-primary/80">
                    Cryptocurrency
                  </div>
                </Link>
                <Link to="/search">
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-white shadow hover:bg-primary/80">
                    Technology
                  </div>
                </Link>
                <Link to="/search">
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-white shadow hover:bg-primary/80">
                    Programming
                  </div>
                </Link>
                <Link to="/search">
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-white shadow hover:bg-primary/80">
                    AI
                  </div>
                </Link>
                <Link to="/search">
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-white shadow hover:bg-primary/80">
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
                      <span className="hover:underline text-black dark:text-white">
                        Alice Johnson
                      </span>
                      <p className="text-sm text-muted-foreground font-light  text-black dark:text-white">
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
                      <span className="hover:underline text-black dark:text-white">
                        Bob Smith
                      </span>
                      <p className="text-sm text-muted-foreground  font-light  text-black dark:text-white">
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
                      <span className="hover:underline text-black dark:text-white">
                        Carol Williams
                      </span>
                      <p className="text-sm text-muted-foreground font-light  text-black dark:text-white">
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
