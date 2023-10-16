import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-Gray-100 w-[100%] h-[371px] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl font-medium cursor-pointer">
            Merry
            <span className="text-2xl text-Red-500 font-extrabold">Match</span>
          </p>
          <p className="text-Gray-700 font-semibold text-xl mt-5">
            New generation of online dating website for everyone
          </p>
          <hr className="w-[78%] h-[2px] mt-8 mb-3" />
          <p className="text-sm text-Gray-600 font-medium">
            copyright ©2022 merrymatch.com All rights reserved
          </p>
          <div className="flex mt-3">
            <Link href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank">
              <img
                src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/fb.svg"
                className="mr-2"
              />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <img
                src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/ig.svg"
                className="mr-2"
              />
            </Link>
            <Link
              href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoidGgifQ%3D%3D%22%7D"
              target="_blank"
            >
              <img src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/tw.svg" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
