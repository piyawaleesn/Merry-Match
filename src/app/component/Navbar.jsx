"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <div className="fixed left-0 top-0 right-0 z-10">
        <div className="h-[88px] flex justify-between px-16 shadow-md bg-main">
          <p
            className="text-2xl font-medium flex items-center cursor-pointer hover:scale-110 duration-300"
            onClick={() => router.push("/")}
          >
            Merry
            <span className="text-2xl text-Red-500 font-extrabold">Match</span>
          </p>
          <div className="flex items-center">
            <p className="text-Purple-800 font-bold px-6 py-8 cursor-pointer hover:text-Red-600">
              Why Merry Match?
            </p>
            <p className="text-Purple-800 font-bold px-6 py-8 cursor-pointer hover:text-Red-600">
              How to Merry
            </p>

            <button
              className="bg-Red-500 text-white font-bold w-[90px] h-[48px] rounded-3xl hover:bg-Red-400"
              type="button"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
