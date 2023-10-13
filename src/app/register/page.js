import React from "react";
import Link from "next/link";
import supabase from "../utils/db.js";

const Userspage = () => {
  // console.log(supabase);
  return (
    <>
      <p className="bg-main font-bold text-[60px]">Userspage</p>
      <button className="btn btn-outline btn-primary">Primary</button>
      <Link href={"/"} className="text-green-300 font-bold mr-3">
        Back
      </Link>
      <Link href={"/users/new"} className="text-purple-500 font-bold">
        Next
      </Link>
    </>
  );
};

export default Userspage;
