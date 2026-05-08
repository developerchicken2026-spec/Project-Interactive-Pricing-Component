import { useState } from "react";
import bgimage from "./assets/images/bg-pattern.svg";
import circles from "./assets/images/pattern-circles.svg";
import iconSlider from "./assets/images/icon-slider.svg";
import iconCheck from "./assets/images/icon-check.svg";

function App() {
  const [sliderValue, setSliderValue] = useState(50);
  const [isYearly, setIsYearly] = useState(false);

  const getViewsText = (val) => {
    if (val < 20) return "10K";
    if (val < 40) return "50K";
    if (val < 60) return "100K";
    if (val < 80) return "500K";
    return "1M";
  };

  return (
    <section className="w-full flex flex-col items-center relative bg-slate-50 min-h-screen overflow-hidden">
      <img
        src={bgimage}
        alt="bg image"
        className="w-full h-100 md:h-80 object-cover"
      />
      <div className="absolute top-30 md:top-12 left-0 w-full text-center">
        <img
          src={circles}
          alt="cricles"
          className="absolute -top-8 md:w-[12rem] left-1/2 -translate-x-1/2 w-auto h-auto"
        />
        <h1 className="relative font-bold text-xl md:text-3xl mb-4 text-teal-400 ">
          Simple, traffic-based pricing
        </h1>
        <p className="text-cyan-400 font-medium md:text-2xl">
          sign-up for our 30-day trial.
        </p>
        <p className="text-blue-400 font-medium md:text-2xl">
          No credit card required.
        </p>
      </div>
      <div className="w-full px-4 flex flex-col items-center justify-center relative">
        <div className="max-w-[640px] w-full md:h-auto -mt-30 md:-mt-25 bg-white p-8  flex flex-col rounded-xl justify-center items-center top-80">
          <div className="flex flex-col text-center w-full">
            <h2 className="mb-8 text-lg md:text-2xl font-bold text-slate-500 tracking-widest">
              {getViewsText(sliderValue)} pageviews
            </h2>
            <div className="relative w-full h-10 flex items-center">
              <div className="absolute w-full h-2 bg-slate-200 rounded-full"></div>
              <div
                className="absolute h-2 bg-gradient-to-r from-cyan-300 to-teal-400 rounded-full shadow-[0_0_15px_rgba(165,243,252,0.5)]"
                style={{ width: `${sliderValue}%` }}
              ></div>
              <div
                className="absolute w-10 h-10 bg-cyan-500 rounded-full shadow-xl shadow-cyan-200 flex items-center justify-center z-10 pointer-events-none"
                style={{ left: `calc(${sliderValue}% - 20px)` }}
              >
                <img src={iconSlider} alt="icon" className="w-6" />
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={(e) => setSliderValue(e.target.value)}
                className="absolute w-full h-full opacity-0 cursor-pointer z-20"
              />
            </div>
            <div className="md:text-5xl mt-8 text-3xl font-bold text-slate-800">
              $
              {isYearly
                ? (sliderValue * 0.32 * 0.75).toFixed(2)
                : (sliderValue * 0.32).toFixed(2)}
              <span className="text-sm text-slate-400">/ month</span>
            </div>
          </div>
          <div className="flex items-center w-full justify-center mt-8 ml-8">
            <span className="text-[12px] md:text-lg text-slate-400 font-medium">
              Monthly Billing
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`md:mx-4  w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                isYearly ? "bg-cyan-400" : "bg-slate-300"
              } mx-2`}
            >
              <span
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  isYearly ? "translate-x-6" : "translate-x-0"
                }`}
              ></span>
            </button>
            <span
              className={`md:text-lg text-[12px] font-medium ${isYearly ? "text-cyan-400 font-bold" : "text-slate-400"}`}
            >
              Yearly Billing{" "}
              <u className="inline ml-1 w-1/2 md:mr-4 ml-2 px-2 py-1 rounded-full h-auto bg-orange-100 text-orange-400 font-bold no-underline">
                -25%
              </u>
            </span>
          </div>
          <hr className="h-[1px] border-0 w-[calc(100%+4rem)] bg-gray-300 mt-8" />
          <div className="w-full flex flex-col mt-8 justify-center items-center">
            <ul className="flex flex-col gap-6">
              <li className="flex justify-center items-center">
                <img src={iconCheck} alt="icon check" className="w-4" />
                <span className="text-slate-400 ml-4">Unlimited websites</span>
              </li>
              <li className="flex justify-center items-center">
                <img src={iconCheck} alt="icon check" className="w-4" />
                <span className="text-slate-400 ml-4">100% data ownership</span>
              </li>
              <li className="flex justify-center items-center">
                <img src={iconCheck} alt="icon check" className="w-4" />
                <span className="text-slate-400 ml-4">Email reports</span>
              </li>
            </ul>
            <button className="mt-8 w-[calc(50%+4rem)] rounded-full py-3 text-indigo-200 bg-slate-800 font-medium flex items-center justify-center hover:bg-green-400 hover:text-green-50 hover:scale-105 active:scale-95 hover:shadow-xl transform transition-transform duration-300 border-2 border-transparent hover:border-indigo-400">
              Start my trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default App;
