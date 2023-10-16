export default function RegisterStep1() {
  return (
    <section
      id="register-step1"
      className="h-[88%] flex items-center justify-center "
    >
      <main className="h-[674px] w-[930px] relative top-[80px]">
        {/* <header className="text-Beige-700 text-[14px]">REGISTER</header> */}
        <div className="flex flex-row justify-between items-center h-[116px]">
          <span className="text-Purple-500 font-extrabold text-[46px] w-[453px]">
            Join us and start matching
          </span>
          <div
            id="step"
            className="flex flex-row justify-evenly items-start w-[473px]"
          >
            <div className="flex flex-row w-[246px] h-[80px] border border-Purple-500 rounded-[16px] justify-start items-center ">
              <span className="bg-gray-200 w-[48px] h-[48px]  flex items-center justify-center rounded-[16px] m-[16px] text-[24px] font-bold text-Purple-500">
                1
              </span>
              <div className="flex flex-col">
                <span className="font-medium text-[12px] text-gray-700">
                  step 1/3
                </span>
                <span className="font-extrabold text-[16px]  text-Purple-500">
                  Basic information
                </span>
              </div>
            </div>
            <div className="w-[80px] h-[80px] border border-gray-300 rounded-[16px] flex items-center justify-center ">
              <span className="bg-gray-200 w-[48px] h-[48px] rounded-[16px] grid place-items-center text-gray-600 font-bold text-[24px]">
                2
              </span>
            </div>
            <div className="w-[80px] h-[80px] border border-gray-300 rounded-[16px] flex items-center justify-center ">
              <span className="bg-gray-200 w-[48px] h-[48px] rounded-[16px] grid place-items-center text-gray-600 font-bold text-[24px]">
                3
              </span>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
