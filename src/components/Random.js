import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
function Random() {
  const { gif, loading, fetdata } = useGif();
  function clickhandler() {
    fetdata();
  }
  return (
    <div className="w-1/2 border border-black flex flex-col items-center gap-y-5 mt-[15px] [background-color:#9197ae] rounded-lg">
      <h1 className="text-3xl mt-[15px] underline uppercase font-bold">
        A Random GIF
      </h1>
      {loading ? <Spinner></Spinner> : <img src={gif} width="450"></img>}
      <button
        className="w-10/12 mb-[20px] [background-color:#eff6ee] text-lg py-2 rounded-lg"
        onClick={clickhandler}
      >
        Generate gif
      </button>
    </div>
  );
}
export default Random;
