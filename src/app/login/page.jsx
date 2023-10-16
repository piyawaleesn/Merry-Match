"use client";

import React from "react";
import Navbar from "../component/Navbar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";

export default function page() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email invalid").required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

  // const handleSubmit = async(values, {setErrors}) => {}
  return (
    <>
      <Navbar />
      <div className="bg-main flex justify-center pt-[6rem]">
        <img
          src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/circle-login.svg"
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
          <h2 className="text-5xl font-extrabold text-purple-500 mb-6">
            Welcome back to Merry Match
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            // onSubmit={handleSubmit}
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
                    className={`py-3 pr-4 px-3 border border-[1px] border-gray-400 rounded-xl w-[100%] focus:outline-none  focus:border-purple-500 ${
                      errors.email && touched.email
                        ? "border-red-600 border-1"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-xs absolute pl-2"
                  />
                  {errors.email && touched.email ? (
                    <img
                      src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/error-icon.svg"
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
                    className={`py-3 pr-4 px-3 border border-[1px] border-gray-400 rounded-xl w-[100%] focus:outline-none focus:border-purple-500 ${
                      errors.password && touched.password
                        ? "border-red-600 border-1"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600 text-xs absolute pl-2"
                  />
                  {errors.password && touched.password ? (
                    <img
                      src="https://hzhhjgfmkxwvwsdteigk.supabase.co/storage/v1/object/public/user-storage/icons/error-icon.svg"
                      alt="errorIcon"
                      className="absolute top-[56%] right-[3%]"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <button className="w-[100%] bg-red-600 rounded-full py-2 text-white font-bold mt-8">
                  Login
                </button>
              </Form>
            )}
          </Formik>
          <p className="mt-4">
            Don’t have an account?
            <span className="font-bold text-red-500 ml-2">
              <Link href={"/register"}>Register</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
