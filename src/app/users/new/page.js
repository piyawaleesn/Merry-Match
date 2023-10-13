import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="bg-green-400 text-white-100">new</div>
      <Link href={"/users"} className="font-bold text-purple-600">
        Back to users
      </Link>
    </>
  );
};

export default page;
