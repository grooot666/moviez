import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"




export default function Home() {
  return (
    // body
    <div className="w-screen h-screen bg-[#0A0A0A]">
      {/* header */}
      <div className="flex gap-[100px] justify-center">
           <div className=" bg-white flex gap-[10px] ">
            <img  src="film.png" alt="" />
            <h4 className="text-[#4338CA]">Movie Z</h4>
           </div>
           <div className="flex gap-[10px]">
            <div>
            <Button variant="outline">Genre</Button>
            </div>
            <div className="">
             <input type="text" placeholder="Search..." />
            </div>
           </div>
      </div>
    </div>
  );
} 
