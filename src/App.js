import logo from "./logo.svg";
import "./App.css";
import Tag from "./components/Tag";
import Random from "./components/Random";

function App() {
  return (
    <div className="w-full h-full flex flex-col [background-color:#273043] items-center relative">
      <h1
        className="bg-white rounded-lg w-11/12 text-center
       text-3xl px-10 py-2 font-bold mt-[40px]"
      >
        Random GIF Generator
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}

export default App;
