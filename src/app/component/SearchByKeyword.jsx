import React, { useState } from "react";

export default function SearchByKeyword() {
  const [defaultChecked, setDefaultChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const [nonChecked, setNonChecked] = useState(false);
  return (
    <div className="w-[15%] flex justify-center">
      <div className="w-[90%] flex flex-col">
        <div className="flex flex-col">
          <h4 className="text-[#191C77] font-bold text-lg mt-6">
            Search by Keywords
          </h4>
          <input
            type="text"
            placeholder="Search..."
            className="border-2 border-Gray-300 rounded-xl h-[3rem] pl-2 mt-4 focus:outline-none focus:border-Red-600"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-[#191C77] font-bold text-lg mt-12 mb-4">
            Sex you interest
          </h4>
          <div className="flex mb-2">
            <input
              type="checkbox"
              className="w-[1rem]"
              checked={defaultChecked}
              onChange={() => setDefaultChecked(!defaultChecked)}
            />
            <label
              className={`ml-2 ${
                defaultChecked ? "text-Gray-900" : "text-Gray-700"
              }`}
            >
              Defult
            </label>
          </div>
          <div className="flex mb-2">
            <input
              type="checkbox"
              className="w-[1rem]"
              checked={femaleChecked}
              onChange={() => setFemaleChecked(!femaleChecked)}
            />
            <label
              className={`ml-2 ${
                femaleChecked ? "text-Gray-900" : "text-Gray-700"
              }`}
            >
              Female
            </label>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              className="w-[1rem]"
              checked={nonChecked}
              onChange={() => setNonChecked(!nonChecked)}
            />
            <label
              className={`ml-2 ${
                nonChecked ? "text-Gray-900" : "text-Gray-700"
              }`}
            >
              Non-bunary people
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
