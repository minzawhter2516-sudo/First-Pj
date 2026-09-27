
import React, { useEffect, useRef, useState } from 'react'
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp
} from "react-icons/md"

function Dropdown() {
    const [isopen,setIsopen]=useState(false);
    const menuItems=["Home","Setting","Logout"];
    const dropdownRef=useRef(null);
    useEffect(()=>{
        const ClickHandle=(e)=>{
        if(!dropdownRef.current?.contains(e.target))
            setIsopen(false);
        }
        if(isopen){
            document.addEventListener("mousedown",
                ClickHandle
            )
        }
        return()=>document.removeEventListener("mousedown",
            ClickHandle
        )
    },[isopen])
  return (
    <div ref={dropdownRef} className="max-w-[400px] text-white 
    mx-auto py-2">
        <button onClick={()=>setIsopen(prev=>!prev)} 
        className="bg-blue-600 rounded-md py-2
        text-white hover:bg-blue-500 duration-300
        px-2 py-2 flex items-center justify-center
        cursor-pointer w-full

        "><span className='uppercase font-bold
        '>Dropdown Menu </span>
        {isopen?(
            <MdOutlineKeyboardArrowUp/>
        ):<MdOutlineKeyboardArrowDown/>
        }
        </button>
        {
            isopen && (
                <div className="bg-white rounded
             mt-2 text-black">
                    {
                    menuItems.map((item)=>
                        <a key={item} href={item}
                        className="block px-2 py-2
                        hover:bg-gray-100">
                            {item}
                        </a>
                    )
                        }
                    
                </div>
            )
        }
      
    </div>
  )
}

export default Dropdown
