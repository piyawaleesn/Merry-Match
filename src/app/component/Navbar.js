import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="fixed left-0 top-0 right-0 z-10">
        <div className="h-[88px] flex justify-between px-16 shadow-md bg-main">
          <p className="text-2xl font-medium flex items-center cursor-pointer hover:scale-110 duration-300">
            Merry
            <span className="text-2xl text-red-500 font-extrabold">Match</span>
          </p>
          <div className="flex items-center">
            <p className="text-Purple-800 font-bold px-6 py-8 cursor-pointer hover:text-red-600">
              Why Merry Match?
            </p>
            <p className="text-Purple-800 font-bold px-6 py-8 cursor-pointer hover:text-red-600">
              How to Merry
            </p>
            <Link href={"/login"}>
              <button className="bg-red-500 text-white font-bold w-[90px] h-[48px] rounded-3xl hover:bg-red-400">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
