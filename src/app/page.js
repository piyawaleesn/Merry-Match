import Link from "next/link";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='bg-[url("https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/bg1-landingPage.svg")] w-full h-[758px]'>
        <div className="flex justify-center items-center">
          <img src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/girl1-landingPage.svg" />
          <div className="w-[358px]">
            <p className="text-white">Make the first ‘Merry’</p>
            <p className="text-white">
              If you feel lonely, let’s start meeting new people in your area!
              Dont’t forget to get Merry with us
            </p>
            <button className="text-white font-bold bg-red-500">
              Start matching!
            </button>
          </div>
          <img src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/girl2-landingPage.svg" />
        </div>
      </div>
    </>
  );
}
