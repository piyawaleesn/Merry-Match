"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Userspage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

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

    <div className="bg-white">
      <form action="" method="post">
        <div>
          <label htmlFor="">email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={registerHandler}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Userspage;
