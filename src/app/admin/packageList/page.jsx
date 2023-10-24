"use client";

import React, { useState } from "react";
import Sidebar from "../../component/SidebarAdmin";
import { useRouter } from "next/navigation";
import Loading from "../../component/LoadingPage";

export default function page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlerAddPackage = () => {
    setLoading(true);
    router.push("/admin/addPackage");
  };

  const clickEdit = () => {
    setLoading(true);
    router.push("/admin/editPackage");
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="w-screen h-screen flex bg-main">
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
              <button
                className="bg-Red-500 rounded-full text-white font-semibold w-[160px] h-[48px] ml-6 hover:bg-Red-400"
                onClick={handlerAddPackage}
              >
                + Add Package
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <table className="w-[85%] mt-8 mb-8 rounded-lg overflow-hidden">
              <thead className="h-[41px] bg-Gray-300">
                <tr>
                  <th className="w-[48px]"></th>
                  <th className="w-[80px] text-start pl-5 text-sm font-medium text-Gray-800">
                    Icon
                  </th>
                  <th className="w-[180px] text-start pl-5 text-sm font-medium text-Gray-800">
                    Package name
                  </th>
                  <th className="w-[180px] text-start pl-5 text-sm font-medium text-Gray-800">
                    Merry limit
                  </th>
                  <th className="w-[200px] text-start pl-5 text-sm font-medium text-Gray-800">
                    Created date
                  </th>
                  <th className="w-[200px] text-start pl-5 text-sm font-medium text-Gray-800">
                    Updated date
                  </th>
                  <th className="w-[120px]"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-Gray-200 h-[24px]">
                  <td className="pl-5 py-[2rem]">1</td>
                  <td className="pl-5">icon</td>
                  <td className="pl-5">name</td>
                  <td className="pl-5">limit</td>
                  <td className="pl-5">created date</td>
                  <td className="pl-5">updated date</td>
                  <td>
                    <div className="flex justify-evenly">
                      <img
                        className="inline cursor-pointer"
                        src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/delete.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvZGVsZXRlLnN2ZyIsImlhdCI6MTY5ODEzNzY4MiwiZXhwIjoxNzI5NjczNjgyfQ.DihXNuk54Lg5180sh3WonSPyJVX5MmBRv4b_4mQQ9aA&t=2023-10-24T08%3A54%3A42.334Z"
                      />
                      <img
                        className="inline cursor-pointer"
                        src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/edit.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvZWRpdC5zdmciLCJpYXQiOjE2OTgxMzc3MTQsImV4cCI6MTcyOTY3MzcxNH0.FOcamFE3pVbdEhfczykKuIfzZ8d-dTGVc3LL0jva-XE&t=2023-10-24T08%3A55%3A14.721Z"
                        onClick={clickEdit}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
