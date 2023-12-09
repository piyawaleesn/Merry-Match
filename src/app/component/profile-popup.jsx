import React from "react";
import Navbar from "./Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="bg-main w-screen h-screen flex justify-center items-center">
        <div className="flex ">
          <div className="flex flex-col">
            <div className="w-[24rem] h-[26rem] mr-[5rem] mt-[7rem]">
              <img
                className="w-[100%] h-[100%] rounded-3xl object-cover bg-center"
                src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/profile-fake.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvcHJvZmlsZS1mYWtlLmpwZyIsImlhdCI6MTcwMjA0OTYyNywiZXhwIjoxNzMzNTg1NjI3fQ.aE4PPBTPL8n8T9gtSbaHgG_4GjX6FUpqszxw8E664iA&t=2023-12-08T15%3A33%3A47.618Z"
              />
            </div>
            <div className="flex mt-2">
              <p className="text-Gray-700 text-sm ml-3">
                1<span className="text-Gray-600">/2</span>
              </p>
              <div className="flex ml-[18rem]">
                <p className="text-Gray-600 text-xl mr-4 cursor-pointer">🡨</p>
                <p className="text-Gray-600 text-xl cursor-pointer">🡪</p>
              </div>
            </div>
            <div className="flex">
              <img
                className="cursor-pointer absolute top-[77%] left-[25%]"
                src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/not-button.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvbm90LWJ1dHRvbi5zdmciLCJpYXQiOjE3MDIxMzMxOTYsImV4cCI6MTczMzY2OTE5Nn0.XgumDlHlw7umIA7Mr-Y3KjYwdPn5az9tFhR0vyWRwqo&t=2023-12-09T14%3A46%3A37.568Z"
              />
              <img
                className="cursor-pointer absolute top-[77%] left-[31%]"
                src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/love-button.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvbG92ZS1idXR0b24uc3ZnIiwiaWF0IjoxNzAyMTMzMjI0LCJleHAiOjE3MzM2NjkyMjR9.UevP3kRa_k5SYGH7m4XnxFTgelIHYabCmhqIDxLMGNs&t=2023-12-09T14%3A47%3A05.221Z"
              />
            </div>
          </div>
          <div className="flex flex-col mt-[5rem]">
            <h2 className="text-Gray-900 font-extrabold text-5xl">
              Danny <span className="text-Gray-700 ml-2">25</span>
            </h2>
            <div className="flex mt-4">
              <img
                className="w-[24px] h-24px]"
                src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/icon-location.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvaWNvbi1sb2NhdGlvbi5zdmciLCJpYXQiOjE3MDIwNTAxOTUsImV4cCI6MTczMzU4NjE5NX0.TXW9yArs-A1VGmvdvgrJvuhh6tCuJNBvz8s9ZxbGvf8&t=2023-12-08T15%3A43%3A15.258Z"
              />
              <p className="text-Gray-700 text-xl font-semibold">
                Bangkok, Thailand
              </p>
            </div>
            <div className="flex mt-8">
              <div className="flex flex-col mr-[4rem]">
                <p className="text-lg text-Gray-900 mb-2">Sexual identities</p>
                <p className="text-lg text-Gray-900 mb-2">Sexual preferences</p>
                <p className="text-lg text-Gray-900 mb-2">Racial preferences</p>
                <p className="text-lg text-Gray-900">Meeting interests </p>
              </div>
              <div className="flex flex-col">
                <p className="text-Gray-700 text-xl font-bold mb-2">Female</p>
                <p className="text-Gray-700 text-xl font-bold mb-2">Male</p>
                <p className="text-Gray-700 text-xl font-bold mb-2">
                  Indefinite
                </p>
                <p className="text-Gray-700 text-xl font-bold">
                  Long-term relationship
                </p>
              </div>
            </div>
            <h4 className="text-2xl text-Gray-900 font-bold mt-8">About me</h4>
            <p className="text-Gray-900 mt-3">I know nothing..but you</p>
            <h4 className="text-2xl text-Gray-900 font-bold mt-8">
              Hobbies and Interests
            </h4>
            <div className="flex flex-wrap gap-3 w-[25rem] mt-4">
              <div className="border-Purple-300 border rounded-lg text-Purple-600 px-[16px] py-[8px]">
                dragon
              </div>
              <div className="border-Purple-300 border rounded-lg text-Purple-600 px-[16px] py-[8px]">
                romantic relationship
              </div>
              <div className="border-Purple-300 border rounded-lg text-Purple-600 px-[16px] py-[8px]">
                political
              </div>
              <div className="border-Purple-300 border rounded-lg text-Purple-600 px-[16px] py-[8px]">
                black hair
              </div>
              <div className="border-Purple-300 border rounded-lg text-Purple-600 px-[16px] py-[8px]">
                friendly
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
