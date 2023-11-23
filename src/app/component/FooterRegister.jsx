import React from "react";

export default function FooterRegister() {
  return (
    <div className="w-screen h-[90px] border-t border-Gray-300 bg-white">
      <div className="flex justify-between">
        <p className="mt-5 ml-28 text-Gray-600">
          <span className="text-Gray-700">1</span>/3
        </p>
        <div className="flex mt-2 mr-24">
          <button className="border border-Red-500 text-Red-500 font-bold rounded-3xl w-[80px] h-[45px] mr-2 hover:text-white hover:bg-Red-500">
            Back
          </button>
          <button className="bg-Red-500 border border-Red-500 rounded-3xl w-[120px] h-[45px] text-white font-bold hover:bg-Red-600">
            Next step
          </button>
        </div>
      </div>
    </div>
  );
}
