const Login: React.FC<{ loginText: string }> = ({ loginText }) => {
  return (
    <button className="[&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
      {loginText}{" "}
    </button>
  );
};

export default Login;
