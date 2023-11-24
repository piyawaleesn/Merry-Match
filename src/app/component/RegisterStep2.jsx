import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function RegisterStep2() {
  return (
    <div className="flex justify-center">
      <div className="w-[930px] h-[500px] flex flex-col mt-[130px]">
        <div className="flex">
          <div className="flex flex-col w-[453px]">
            <p className="text-xs text-Beige-700 font-semibold">REGISTER</p>
            <h2 className="text-4xl font-extrabold text-Purple-500 w-[400px]">
              Join us and start matching
            </h2>
          </div>
          <div className="flex items-end">
            <div className="h-[74px] w-[74px] border border-Gray-300 rounded-xl flex justify-center items-center">
              <div className="bg-Gray-200 text-Gray-600 font-bold w-[42px] h-[42px] rounded-xl flex justify-center items-center">
                1
              </div>
            </div>
            <div className="w-[260px] h-[74px] border border-Purple-500 rounded-xl flex justify-start items-center p-3 mr-2 ml-2">
              <div className="w-[42px] h-[42px] bg-Gray-200 rounded-xl text-Purple-500 font-bold flex justify-center items-center mr-4">
                2
              </div>
              <div className="flex flex-col">
                <p className="text-Gray-700 text-xs font-medium">Step 2/3</p>
                <p className="text-Purple-500 font-extrabold">
                  Identities and Interests
                </p>
              </div>
            </div>
            <div className="h-[74px] w-[74px] border border-Gray-300 rounded-xl flex justify-center items-center">
              <div className="bg-Gray-200 text-Gray-600 font-bold w-[42px] h-[42px] rounded-xl flex justify-center items-center">
                3
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[2.5rem]">
          <h4 className="text-xl text-Purple-500 font-bold mb-[1rem]">
            Identities and Interests
          </h4>
          <Formik>
            <Form>
              <div className="flex">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm">
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm"
                  />
                </div>
                <div className="flex flex-col ml-[15px]">
                  <label htmlFor="name" className="text-sm">
                    Date Of Birth
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="ต้องเปลี่ยนเป็นวันเกิด"
                    className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm"
                  />
                </div>
              </div>
              <div className="flex mt-5">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm">
                    Location
                  </label>
                </div>
                <div className="flex flex-col ml-[15px]">
                  <label htmlFor="name" className="text-sm">
                    City
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="ต้องเปลี่ยนเป็นวันเกิด"
                    className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm"
                  />
                </div>
              </div>
              <div className="flex mt-5">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm">
                    Username
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="At least 6 charactor"
                    className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm"
                  />
                </div>
                <div className="flex flex-col ml-[15px]">
                  <label htmlFor="name" className="text-sm">
                    Email
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name@website.com"
                    className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm"
                  />
                </div>
              </div>
              <div className="flex mt-5">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm">
                    Password
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="At least 8 charactor"
                    className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm"
                  />
                </div>
                <div className="flex flex-col ml-[15px]">
                  <label htmlFor="name" className="text-sm">
                    Confirm Password
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="At least 8 charactor"
                    className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm"
                  />
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
