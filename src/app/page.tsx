import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import ArrowIcon from "@/svgs/ArrowIcon";
import { Button } from "@/components/ui/button"
import SearchIcon from "@/svgs/Search.Icon";
import SunIcon from "@/svgs/SunIcon";


export function ButtonOutline() {
  return <Button variant="outline">Outline</Button>
}


export default function Home() {
  return (
    // body
    <div className="w-screen h-screen bg-[#0A0A0A]">
      {/* header */}
      <div className="flex gap-[400px] justify-center h-[59px] items-center">
           <div className=" flex gap-[10px] items-center">
            <img className="h-[20px]" src="film.png" alt="" />
            <h4 className="text-[#4338CA]">Movie Z</h4>
           </div>
           <div className="flex gap-[10px] items-center">
            <div>
            <Button className="bg-black text-white border-gray-700" variant="outline">
              < ArrowIcon/>
              Genre
              </Button>
            </div>
            <div className=" border rounded-[4px] border-gray-700 flex items-center] relative w-[320px]">
              <div className=" absolute w-[15px] mt-[8px] ml-[15px]">
                <SearchIcon/>

              </div>
           
             <input type="text"
              placeholder="search..." 
               className=" w-[100%] pl-[42px] pt-[5px] pb-[5px] bg-black text-gray-500 "
             />
            </div>
           </div>
            
           <div  className=" w-[36px] h-[36px] relative "  >
           <button className="w-[100%] h-[100%] absolute border rounded-[5px] border-gray-700">
            <div  className=" w-[100%] h-[100%] mt-[5px] ml-[5px] ">
            <SunIcon/>
            </div>
            </button>
           </div>
           
      </div>
    </div>
  );
} 
