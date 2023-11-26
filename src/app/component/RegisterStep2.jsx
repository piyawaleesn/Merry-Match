import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

export default function RegisterStep2() {
  const [selected, setSelected] = useState([]);
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
          <form>
            <div className="flex">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm">
                  Sexual dentities
                </label>
                <select className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm focus:outline-none focus:border-Red-500">
                  <option value="" hidden>
                    --Select Sexual Identities--
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="lgbtq+">LGBTQ+</option>
                </select>
              </div>
              <div className="flex flex-col ml-[15px]">
                <label htmlFor="name" className="text-sm">
                  Sexual preferences
                </label>
                <select className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm focus:outline-none focus:border-Red-500">
                  <option value="" hidden>
                    --Select Sexual Preferences--
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="lgbtq+">LGBTQ+</option>
                </select>
              </div>
            </div>
            <div className="flex mt-5">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm">
                  Racial preferences
                </label>
                <select className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm focus:outline-none focus:border-Red-500">
                  <option value="" hidden>
                    --Select Racial Preferences--
                  </option>
                  <option value="asian">Asian</option>
                  <option value="american">American</option>
                  <option value="europien">Europien</option>
                </select>
              </div>
              <div className="flex flex-col ml-[15px]">
                <label htmlFor="name" className="text-sm">
                  Meeting interests
                </label>
                <select className="border-Gray-400 border rounded-md w-[420px] h-[40px] pl-2 text-sm focus:outline-none focus:border-Red-500">
                  <option value="" hidden>
                    --Select Meeting Interests--
                  </option>
                  <option value="friend">Friend</option>
                  <option value="ons">ONS</option>
                  <option value="fwb">FWB</option>
                  <option value="long-term">Long-term relationship</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col mt-5">
              <label htmlFor="text" className="text-sm">
                Hobbies / Interests (Maximum 10)
              </label>
              <div className="w-[855px] h-[40px]">
                <TagsInput
                  value={selected}
                  onChange={setSelected}
                  name="tags"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
