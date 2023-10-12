import React from "react";
import Mycomponent from "../component/mycomponent";
import supabase from "../utils/db.js";

const Userspage = () => {
  console.log(supabase);
  return (
    <>
      <p className="bg-red-500 font-bold font-custom text-[60px]">Userspage</p>
      <button className="btn btn-outline btn-primary">Primary</button>
      <Mycomponent />
    </>
  );
};

export default Userspage;
