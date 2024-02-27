import React from "react";
import MainNav from "./main-nav";
import { IoStorefrontOutline } from "react-icons/io5";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="border-b px-4">
      <div className="flex h-16  items-center justify-between space-x-2 ">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-3 rounded-3xl border border-solid px-2 py-1 ">
            <div className="flex  items-center justify-between space-x-1">
              <IoStorefrontOutline />
              <Link href={'/'}>
              <div className="">
                Shoe <p className="hidden md:inline">Store</p>
              </div>
              </Link>
              
            </div>
          </div>

          <MainNav />
        </div>
        <AuthShowcase/>
      </div>
    </div>
  );
};
function AuthShowcase() {
  const { data: sessionData } = useSession();
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-black no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
export default Navbar;
