import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <header>
      <div className="w-full fixed top-0 z-50">
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image
              onClick={() => router.push("/")}
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>

          <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
            <input
              type="text"
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            />
            <SearchIcon className="h-12 p-4" />
          </div>

          <div className="flex items-center text-white  text-xs space-x-6 mx-6 whitespace-nowrap">
            <div onClick={!session ? signIn : signOut} className="link">
              <p className="hover:underline border-yellow-300 font-extrabold text-xs md:text-sm text-amazon_blue p-1 bg-white">
                {session ? `Hi ${session.user.name.split(" ")[0]}` : "Sign Up"}
              </p>
              {/* <p className="font-extrabold md:text-sm">Account & Lists</p> */}
            </div>

            <div
              className="cursor-pointerlink"
              onClick={() => router.push("/orders")}
            >
              <p>Returns</p>
              <p className="font-extrabold md:text-sm">& Orders</p>
            </div>

            <div
              onClick={() => router.push("/checkout")}
              className="relative link flex items-center"
            >
              <span className="absolute top-0 righ0' md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                {items.length}
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                Basket
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-2 bg-amazon_blue-light text-white text-sm">
          <p className="link flex items-center">
            <MenuIcon className="h-6 mr-1" />
            All
          </p>
          <p className="link">Prime Video</p>
          <p className="link">Amazon Business</p>
          <p className="link">Todays deals</p>
          <p className="link hidden lg:inline-flex">Electronics</p>
          <p className="link hidden lg:inline-flex">Food & grocery</p>
          <p className="link hidden lg:inline-flex">Prime</p>
          <p className="link hidden lg:inline-flex">Buy Again</p>
          <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
          <p className="link hidden lg:inline-flex">Health & Personel care</p>
        </div>
      </div>
    </header>
  );
};

export default Header;