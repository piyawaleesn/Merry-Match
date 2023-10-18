"use client";

import React, { useState } from "react";
import Navbar from "../component/Navbar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSession, signIn } from "next-auth/react";
export default function page() {
  const router = useRouter();

  const handlerSubmit = async (values, { setErrors }) => {
    try {
      const response = await signIn("credentials", {
        email: values.email,
        password: values.password,
        // redirect: false,
      });
      if (response?.error) {
        setErrors({ password: response.error });
      } else {
        const session = await getSession();

        if (session?.user) {
          if (session.user.role === "admin") {
            router.push("/matchlist");
          } else {
            router.push("/");
          }
        } else {
          console.log("User not found");
        }
      }
    } catch (error) {
      console.log("Login error!!!", error);
    }
  };

  // const handlerLogin = () => {
  //   try {
  //     signIn("credentials", {
  //       email: user.email,
  //       password: user.password,
  //       redirect: true,
  //       callbackUrl: "/",
  //     });
  //   } catch (error) {
  //     console.log("Error while signing in");
  //   }
  // };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email invalid").required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

  return (
    <>
      <Navbar />
      <div className="bg-main flex justify-center pt-[6rem]">
        <img
          src="://hzhhjgfmkxwvwsdteigk.httpssupabase.co/storage/v1/object/public/user-storage/icons/circle-login.svg"
          className="relative left-[-10rem] top-[-10rem]"
        />
        <div className="w-[330px] h-[537px]">
          <img
            src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/img-login.svg"
            className="mt-[3rem]"
          />
        </div>
        <div className="w-[453px] ml-[10rem] mt-[5rem]">
          <p className="text-[#7B4429] text-xs font-semibold mb-3">LOGIN</p>
          <h2 className="text-5xl font-extrabold text-Purple-500 mb-6">
            Welcome back to Merry Match
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handlerSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="relative mb-6">
                  <label htmlFor="email">Email</label>
                  <br />
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    className={`py-3 pr-4 px-3 border border-[1px] border-Gray-400 rounded-xl w-[100%] focus:outline-none  focus:border-Purple-500 ${
                      errors.email && touched.email
                        ? "border-Red-600 border-1"
                        : ""
                    }`}
                  />

                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-Red-600 text-xs absolute pl-2"
                  />
                  {errors.email && touched.email ? (
                    <img
                      src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/error-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvZXJyb3ItaWNvbi5zdmciLCJpYXQiOjE2OTc1NDQyNDQsImV4cCI6MTcyOTA4MDI0NH0.UAF89Hy-GHqQMuVabil7ZIJJ_5EWW-jvwm9Ci41eWv8&t=2023-10-17T12%3A04%3A05.568Z"
                      alt="errorIcon"
                      className="absolute top-[56%] right-[3%]"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="relative">
                  <label htmlFor="password">Password</label>
                  <br />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    className={`py-3 pr-4 px-3 border border-[1px] border-Gray-400 rounded-xl w-[100%] focus:outline-none focus:border-Purple-500 ${
                      errors.password && touched.password
                        ? "border-Red-600 border-1"
                        : ""
                    }`}
                  />

                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-Red-600 text-xs absolute pl-2"
                  />
                  {errors.password && touched.password ? (
                    <img
                      src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/sign/user-storage/icons/error-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLXN0b3JhZ2UvaWNvbnMvZXJyb3ItaWNvbi5zdmciLCJpYXQiOjE2OTc1NDQyNDQsImV4cCI6MTcyOTA4MDI0NH0.UAF89Hy-GHqQMuVabil7ZIJJ_5EWW-jvwm9Ci41eWv8&t=2023-10-17T12%3A04%3A05.568Z"
                      alt="errorIcon"
                      className="absolute top-[56%] right-[3%]"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <button
                  className="w-[100%] bg-Red-600 rounded-full py-2 text-white font-bold mt-8 hover:bg-Red-400"
                  type="submit"
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
          <p className="mt-4">
            Don’t have an account?
            <span className="font-bold text-Red-500 ml-2">
              <Link href={"/register"}>Register</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
