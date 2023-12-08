import React from "react";
import Navbar from "../component/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="bg-main w-screen h-screen flex justify-center items-center">
        <div className="flex">
          <div className="w-[24rem] h-[26rem]">
            <img
              className="w-[100%] h-[100%] rounded-3xl object-cover"
              src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/profile-fake.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvcHJvZmlsZS1mYWtlLmpwZyIsImlhdCI6MTcwMjA0OTYyNywiZXhwIjoxNzMzNTg1NjI3fQ.aE4PPBTPL8n8T9gtSbaHgG_4GjX6FUpqszxw8E664iA&t=2023-12-08T15%3A33%3A47.618Z"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-Gray-900 font-extrabold text-5xl">
              Danny <span className="text-Gray-700 ml-2">25</span>
            </h2>
            <div className="flex">
              <img
                className="w-[24px] h-24px]"
                src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/icon-location.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvaWNvbi1sb2NhdGlvbi5zdmciLCJpYXQiOjE3MDIwNTAxOTUsImV4cCI6MTczMzU4NjE5NX0.TXW9yArs-A1VGmvdvgrJvuhh6tCuJNBvz8s9ZxbGvf8&t=2023-12-08T15%3A43%3A15.258Z"
              />
              <p className="text-Gray-700 text-xl font-semibold">
                Bangkok, Thailand
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
