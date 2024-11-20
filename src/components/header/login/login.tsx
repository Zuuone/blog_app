const Login: React.FC<{ loginText: string }> = ({ loginText }) => {
  return (
    <button className="inline-flex items-center justify-center gap-2  whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 ">
      {loginText}{" "}
    </button>
  );
};

export default Login;
