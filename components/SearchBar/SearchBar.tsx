import { Header, Body, Button, } from "@components"
import { useState } from "react";
import University from "public/assets/images/university.svg"
import Lecturer from "public/assets/images/lecturer.svg"

export const SearchBar = () => {
  const [selectBy, setSelectBy] = useState("Lecturer")
  const [isOpened, setIsOpened] = useState(false);
  
  const changeSelectBy = (input: string) => {
    setSelectBy(input)
    setIsOpened(false)
  }

  return (
    <div className="relative w-4/5 h-10 tablet:h-14 bg-white border-2 border-mariana rounded-full px-2 gap-2">
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
          <div className="w-[2px] h-10 bg-[#909090] rounded-full"></div>
        </div>
        <input type="text" className="w-full outline-none placeholder:text-xs placeholder:tablet:text-lg placeholder:text-mariana font-hauora" placeholder={`Search ${selectBy} Name`} />
      </div>
      <div>
      </div>

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
          className="text-mariana w-full flex flex-row "
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
