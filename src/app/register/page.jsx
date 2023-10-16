import React from "react";
import Link from "next/link";
import supabase from "../utils/db.js";
import Navbar from "../component/Navbar.jsx";
import RegisterStep1 from "../component/RegisterStep1.jsx";

const Userspage = () => {
  // console.log(supabase);
  return (
    <div className="w-screen h-screen relative">
      <div
        id="big-circle"
        className="bg-Beige-100 w-[100px] h-[100px] rounded-full absolute top-[173px] -left-[12px]"
      ></div>
      <div
        id="small-circle"
        className="bg-Beige-700 w-[10px] h-[10px] rounded-full absolute top-[298px] left-[81px]"
      ></div>
      {/* <p className="bg-main font-bold text-[60px]">Userspage</p>
      <button className="btn btn-outline btn-primary">Primary</button>
      <Link href={"/"} className="text-green-300 font-bold mr-3">
        Back
      </Link>
      <Link href={"/users/new"} className="text-purple-500 font-bold">
        Next
      </Link> */}
      <Navbar />
      <RegisterStep1 />
      <div className="bg-Red-300 h-[112px]">Footer</div>
    </div>
  );
};

export default Userspage;
