import Link from "next/link";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const boxData = [
  {
    id: 1,
    img: "https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/emoji1-landing.svg",
    topic: "Upload your cool picture",
    detail: "Lorem ipsum is a placeholder text",
  },
  {
    id: 2,
    img: "https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/emoji2-landing.svg",
    topic: "Explore and find the one you like",
    detail: "Lorem ipsum is a placeholder text",
  },
  {
    id: 3,
    img: "https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/emoji3-landing.svg",
    topic: "Click ‘Merry’ for get to know!",
    detail: "Lorem ipsum is a placeholder text",
  },
  {
    id: 4,
    img: "https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/emoji4-landing.svg",
    topic: "Start chating and relationship ",
    detail: "Lorem ipsum is a placeholder text",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='bg-[url("https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/bg1-landingPage.svg")] w-full h-[758px]'>
        <div className="flex justify-center items-center">
          <div className="w-[250px] h-[470px] mr-12">
            <img
              src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/girl1-landingPage.svg"
              className="relative top-[17rem]"
            />
            <p className="absolute z-[2] right-[9rem] top-[19rem] bg-Red-700 py-3 px-6 text-center font-semibold text-xs text-white rounded-tl-3xl rounded-r-3xl">
              Hi! Nice to meet you
            </p>
          </div>
          <div className="w-[358px] flex flex-col justify-center items-center mt-[15rem]">
            <p className="text-white text-6xl font-black text-center">
              Make the first ‘Merry’
            </p>
            <p className="text-white text-xl font-semibold text-center mt-6">
              If you feel lonely, let’s start meeting
              <br /> new people in your area!
              <br />
              Dont’t forget to get Merry with us
            </p>
            <button className="text-white font-bold bg-Red-500 px-6 py-3 rounded-full mt-12 w-[163px] hover:bg-Red-400">
              Start matching!
            </button>
          </div>
          <div className="w-[250px] h-[470px] ml-12">
            <img
              src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/girl2-landingPage.svg"
              className="relative top-[-2rem]"
            />
            <p className="absolute left-[9rem] top-[23.5rem] bg-Red-700 py-3 px-6 text-center font-semibold text-xs text-white rounded-l-3xl rounded-tr-3xl">
              Nice to meet you too!
            </p>
            <img
              src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/tiny-white-heart.svg"
              className="absolute top-[24rem] left-[9.5rem]"
            />
          </div>
        </div>
      </div>
      <div className="h-[533px] bg-[#160404] flex justify-center">
        <div className="flex flex-col justify-center">
          <h2 className="text-Purple-300 font-extrabold text-5xl mb-6">
            Why Merry Match?
          </h2>
          <p className="text-white w-[549px] text-xl font-semibold">
            Merry Match is a new generation of online dating website for
            everyone
            <br />
            <span className="text-white text-base">
              Whether you’re committed to dating, meeting new people, expanding
              your social network, meeting locals while traveling, or even just
              making a small chat with strangers.
              <br /> This site allows you to make your own dating profile,
              discover new people, save favorite profiles, and let them know
              that you’re interested
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <img
            src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/img-landing-right.svg"
            className="w-[546px] h-[348px]"
          />
        </div>
      </div>
      <div className="h-[622px] bg-[#160404] flex flex-col items-center">
        <h2 className="text-Purple-300 font-extrabold text-5xl mb-12 mt-20">
          How to Merry
        </h2>
        <div className="flex gap-5 justify-center">
          {boxData.map((data) => (
            <div
              className="w-[262px] h-[348px] bg-Purple-900 rounded-3xl bg-opacity-20 flex flex-col items-center justify-center hover:scale-110 duration-500 cursor-pointer"
              key={data.id}
            >
              <img src={data.img} className="mt-6" />
              <h4 className="text-2xl text-white font-bold w-[194px] text-center mt-8">
                {data.topic}
              </h4>
              <p className="text-center w-[194px] text-white mt-3">
                {data.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[570px] bg-[#160404] flex justify-center items-center">
        <div className='bg-[url("https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/bg-box-landing-nonuser.svg")] h-[369px] w-[1120px] flex flex-col justify-center items-center'>
          <h2 className="font-extrabold text-white text-5xl w-[640px] text-center">
            Let’s start finding
            <br /> and matching someone new
          </h2>
          <button className="text-Red-600 font-bold bg-Red-100 rounded-full px-6 py-3 mt-12 hover:bg-Red-600 hover:text-Red-100">
            Start matching!
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
