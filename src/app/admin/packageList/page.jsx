import React from "react";
import Sidebar from "../../component/SidebarAdmin";

export default function page() {
  return (
    <>
      <div className="w-full flex bg-main">
        <Sidebar />
        <div className="text-Red-500 text-2xl">
          This is pakage list for admin
        </div>
      </div>
    </>
  );
}
