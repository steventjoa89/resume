import Link from "next/link";
import MenuButton from "./MenuButton";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <nav className="fixed w-full top-0 z-50 px-4 md:px-16 lg:px-24 xl:px-32 py-4 border-b transition-all duration-300 border-neutral-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="#!">123456</Link>

          <div className="hidden md:flex gap-3">
            {/* {links.map((link: ILink) => (
            <Link
              key={link.name}
              href={link.href}
              className="py-1 px-3 hover:text-zinc-500"
            >
              {link.name}
            </Link>
          ))} */}
          </div>

          <button
            className="md:hidden"
            // onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Icon
            {/* <MenuIcon className="size-6.5" /> */}
          </button>

          <Link
            href="#!"
            className="hidden md:inline-block py-2.5 px-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] bg-orange-500 text-white rounded-full"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </>
    // <nav className="relative bg-gray-800">
    //   <div className="mx-auto max-w-11/12 px-2 sm:px-6 lg:px-8 py-3">
    //     <div className="relative flex h-16 items-center justify-between">
    //       {/* <div className="absolute inset-y-0 left-0 flex items-center"> */}
    //       <div className="flex shrink-0 items-center">
    //         <h1 className="text-xl text-white tracking-widest">Steven Tan</h1>
    //       </div>
    //       {/* </div> */}

    //       <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end text-white">
    //         <div className="hidden sm:ml-6 sm:block">
    //           <div className="flex space-x-4">
    //             <a
    //               href="#"
    //               aria-current="page"
    //               className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
    //             >
    //               Dashboard
    //             </a>
    //             <a
    //               href="#"
    //               className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
    //             >
    //               Team
    //             </a>
    //           </div>
    //         </div>
    //       </div>

    //       <MenuButton />
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;
