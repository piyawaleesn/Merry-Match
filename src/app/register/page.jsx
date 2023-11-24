"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Navbar from "../component/Navbar";
import FooterRegister from "../component/FooterRegister";
import RegisterStep1 from "../component/RegisterStep1";
import RegisterStep2 from "../component/RegisterStep2";
import RegisterStep3 from "../component/RegisterStep3";

const Userspage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const registerHandler = () => {
    const data = {
      // name: user.name,
      // username: user.username,
      email: email,
      password: password,
      // date_of_birth: user.date_of_birth,
      // location: user.location,
      // city: user.city,
      // sexual_identity: user.sexual_identity,
      // sexual_preference: user.sexual_preference,
      // recial_preference: user.recial_preference,
      // meeting_interests: user.meeting_interests,
      // hobbies_interests: user.hobbies_interests,
      // profile_image: user.profile_image,
      //role: user.role
    };
    try {
      axios
        .post("api/register", data)
        .then((response) => console.log(response))
        .catch((error) => console.log("register error from server", error))
        .finally(() => router.push("/login"));
    } catch (error) {
      console.log("register error", error);
    }

    //   const response = await fetch("/api/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (response.ok) {
    //     const result = await response.json();
    //     console.log(result);
    //     // Handle successful registration, e.g., redirect to a login page.
    //   } else {
    //     throw new Error("Failed to register.");
    //   }
    // } catch (error) {
    //   setError(error.message);
    // }
  };

  const [currentStep, setCurrentStep] = useState(1);
  const clickNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const clickBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    // <>
    //   <p className="bg-main font-bold text-[60px]">Userspage</p>
    //   <button className="btn btn-outline btn-primary">Primary</button>
    //   <Link href={"/"} className="text-green-300 font-bold mr-3">
    //     Back
    //   </Link>
    //   <Link href={"/users/new"} className="text-purple-500 font-bold">
    //     Next
    //   </Link>
    // </>

    // <div className="bg-white">
    //   <form action="" method="post">
    //     <div>
    //       <label htmlFor="">email</label>
    //       <input
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="">password</label>
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <button type="submit" onClick={registerHandler}>
    //       submit
    //     </button>
    //   </form>
    // </div>
    <div className="bg-main h-screen w-screen overflow-hidden flex flex-col">
      <Navbar />
      <div className="w-[100px] h-[100px] rounded-full bg-Beige-100 absolute top-[25%] left-[-1%]"></div>
      <div className="w-[8px] h-[8px] rounded-full bg-Beige-700 absolute top-[44%] left-[7%]"></div>
      {currentStep === 1 && <RegisterStep1 />}
      {currentStep === 2 && <RegisterStep2 />}
      {currentStep === 3 && <RegisterStep3 />}
      <FooterRegister
        onNextStep={clickNextStep}
        onBack={() => clickBack()}
        currentStep={currentStep}
      />
    </div>
  );
};

export default Userspage;
