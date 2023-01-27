import { Header, Body, Button, } from "@components"
import { useState } from "react";
import University from "public/assets/images/university.svg"
import Lecturer from "public/assets/images/lecturer.svg"
import Dropdown from "./DropDown";

export const SearchBar = () => {
  const [selectBy, setSelectBy] = useState("Lecturer")
  const [isOpened, setIsOpened] = useState(false);
  const [inputVal, setInputVal] = useState("")

  const changeSelectBy = (input: string) => {
    setSelectBy(input)
    setIsOpened(false)
  }

  return (
    <div className={`${inputVal ? "rounded-[3rem] pb-4" : "rounded-full"} relative flex flex-col w-4/5 h-full bg-white border-2 border-mariana px-2 gap-21`}>
      <div className="flex flex-row items-center justify-between gap-2 h-full">
        <div className="flex flex-row w-1/2 tablet:w-1/4 h-full items-center justify-center">
          <Button 
            preset="link" 
            className="text-mariana w-full flex flex-row "
            rightIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            }
            onClick={() => setIsOpened(!isOpened)}
          >
            <div className="flex items-center justify-center tablet:gap-1">
              <Body preset="p2">Search By</Body>
              {selectBy == "Lecturer" ? <Lecturer /> : <University />}
            </div>

          </Button>
          <div className="w-[2px] h-8 bg-[#909090] rounded-full"></div>
        </div>
        <input onInput={e => setInputVal((e.target as HTMLInputElement).value)} value={inputVal} type="text" className="w-full outline-none text-xs tablet:text-lg placeholder:text-xs placeholder:tablet:text-lg placeholder:text-mariana font-hauora" placeholder={`Search ${selectBy} Name`} />
        <div>
      </div>
      </div>
      <Dropdown data={{status: "loading", searchString: inputVal, searchBy: selectBy}}/>

      {/* Dropdown */}
      <div 
        className={
          `${isOpened ? 'opacity-100 py-4' : 'h-0 opacity-0'} ease-in-out duration-200 absolute rounded-xl shadow-xl bg-white w-1/5 top-14 flex flex-col items-center justify-center`}
      >
        <Button 
          preset="link"
          padding="py-1" 
          className="text-mariana w-3/4 flex flex-row hover:bg-whipcream "
          onClick={() => changeSelectBy("Lecturer")}
        >
          <div className="flex flex-row items-center justify-center gap-1">
            <Lecturer /><Body preset="p2">Lecturer Name</Body> 
          </div>
        </Button>
        <Button 
          preset="link"
          padding="py-1" 
          className="text-mariana w-3/4 flex flex-row hover:bg-whipcream "
          onClick={() => changeSelectBy("University/College")}
        >
          <div className="flex flex-row items-center justify-center gap-1">
            <University /> <Body preset="p2">University Name</Body> 
          </div>
        </Button>
      </div>
    </div>
  );
}
