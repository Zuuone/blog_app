const SearchButton = () => {
  return (
    <div className="relative ">
      <button
        className="relative flex items-center bg-transparent p-0 "
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:r0:"
        data-state="closed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-search text-muted-foreground"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
      </button>
    </div>
  );
};

export default SearchButton;
