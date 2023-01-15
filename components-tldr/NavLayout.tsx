type NavLayoutProps = {
  children: React.ReactNode;
};

export default function NavLayout({ children }: NavLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

function Navbar() {
  return (
    <>
      <span className="isolate inline-flex rounded-md shadow-sm">
        <button
          type="button"
          className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          Years
        </button>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          Months
        </button>
        <button
          type="button"
          className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          Days
        </button>
      </span>
    </>
  );
}
