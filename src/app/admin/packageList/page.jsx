import React from "react";
import Sidebar from "../../component/SidebarAdmin";

export default function page() {
  return (
    <>
      <div className="w-screen flex bg-main">
        <Sidebar />
        <div className="flex flex-col w-[100%]">
          <div className="h-[80px] bg-white border-b border-Gray-400 flex justify-evenly">
            <h4 className="h-full font-semibold text-2xl flex items-center w-[568px]">
              Merry Package
            </h4>
            <div className="flex items-center w-[496px] h-full">
              <div className="relative">
                <img
                  className="absolute top-3 left-3"
                  src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/search.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvc2VhcmNoLnN2ZyIsImlhdCI6MTY5ODA2OTU3NCwiZXhwIjoxNzI5NjA1NTc0fQ.74xaUYZHQeQb9e3LbbybjaoI6Ah5Dkac5eAVVUgo1Ro&t=2023-10-23T13%3A59%3A34.430Z"
                />
                <input
                  className="border border-Gray-300 rounded-xl focus:outline-none h-[48px] w-[320px] pl-12 focus:border-Red-500"
                  type="text"
                  placeholder="search..."
                />
              </div>
              <button className="bg-Red-500 rounded-full text-white font-semibold w-[160px] h-[48px] ml-6 hover:bg-Red-400">
                + Add Package
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
