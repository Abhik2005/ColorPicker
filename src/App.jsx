import { useState, useRef,useCallback,useEffect } from "react";
import { FaCopy } from "react-icons/fa";

export default function App() {
  const [red, setRed] = useState(203);
  const [blue, setBlue] = useState(162);
  const [green, setGreen] = useState(204);
  const [alpha, setAlpha] = useState(1);
  const [bubble, setBubble] = useState(true);

  const rgb = `rgb(${red}, ${green}, ${blue},${alpha})`;

  const changeValueOfRed = (e) => {
    setRed(e.target.value)
  };
  const changeValueofBlue = (e) => {
    setBlue(e.target.value);
  };

  const changeValueofGreen = (e) => {
    setGreen(e.target.value);
  };

  const changeValueofAlpha = (e) => {
    setAlpha(e.target.value);
  };

  const copyColor = useCallback(() => {
    var copyText = document.querySelector(".copyText");
    if (bubble) {
      document.querySelector(".copyBtn").style.color = "green";
      window.navigator.clipboard.writeText(copyText.innerText);
    }
    setTimeout(function () {
      document.querySelector(".copyBtn").style.color = "black";
    }, 5000);
  }, [rgb]);

  return (
    <>
      <div className=" main w-full h-screen bg-blue-600 flex items-center justify-center">
        <div className="colorBox py-5 px-5 bg-gray-400 flex flex-col items-center justify-between gap-3 rounded-xl">
          <div
            className=" copyBox w-96 h-20 bg-black text-center flex items-center justify-between rounded-lg px-10"
            style={{ backgroundColor: rgb }}
          >
            <h1 className=" copyText text-2xl text-zinc-100">
              rgba({red},{green},{blue},{alpha})
            </h1>
            <span
              className=" copyBtn text-2xl cursor-pointer text-stone-700"
              onClick={copyColor}
            >
              <FaCopy />
            </span>
          </div>
          <div className="inputBox w-ful flex py-2 gap-3 items-center justify-between px-2">
            <div className=" flex flex-col justify-center items-center">
              <h1>Red</h1>
              <input
                type="range"
                id="red"
                value={red}
                max={255}
                min={0}
                onChange={changeValueOfRed}
              />
              <label htmlFor="red">{red}</label>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <h1>GREEN</h1>
              <input
                type="range"
                id="green"
                value={green}
                max={255}
                min={0}
                onChange={changeValueofGreen}
              />
              <label htmlFor="green">{green}</label>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <h1>BLUE</h1>
              <input
                type="range"
                id="blue"
                value={blue}
                max={255}
                min={0}
                onChange={changeValueofBlue}
              />
              <label htmlFor="blue">{blue}</label>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <h1>ALPHA</h1>
              <input
                type="range"
                id="alpha"
                value={alpha}
                min={0}
                max={1}
                step={0.001}
                onChange={changeValueofAlpha}
              />
              <label htmlFor="alpha">{alpha}</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
