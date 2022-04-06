function Navbar() {
  return (
    <div className="mb-16 flex flex-row items-center justify-between">
      <div className="mr-16">
        <span className="cursor-pointer font-unicaone text-4xl transition duration-200 text-slate-500 hover:text-teal-500 = font-extrabold">
          NSD
        </span>
      </div>
      <div className="hidden lg:flex flex-row space-x-4 text-slate-500 text-lg cursor-pointer font-firacode">
        <span className="transition duration-200 hover:text-teal-600">
          Home
        </span>
        <span className="transition duration-200 hover:text-teal-600">
          Work
        </span>
        <span className="transition duration-200 hover:text-teal-600">
          Projects
        </span>
      </div>
      <div class="flex lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
