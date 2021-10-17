import Image from "next/image"
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"

function Header() {
    return (
        <div>
            <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
            {/* Left */}
            <div className="relative w-176 hidden lg:inline-grid  cursor-pointer">
                <Image 
                    src="/selfregulator.svg"
                    layout="fill" //fill to parent contain size
                    objectFit="contain" //keeps aspect ratio
                />
            </div>
            <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">

                <Image 
                    src="/icon.svg"
                    layout="fill" //fill to parent contain size
                    objectFit="contain" //keeps aspect ratio
                />
            </div>

            {/* Middle - Search input feild */}
            <div className="max-w-xs">
                <div className="relative mt-1 p-3 rounded-md">
                    <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="cursor-pointer h-5 w-5 text-gray-500" />        
                    </div>
                    <input  
                        className="bg-gray-50 block w-full pl-10 sm:text-sm border-red-600 rounded-md focus:ring-red-600 focus:border-red-600"
                        type="text"
                        placeholder="Search"
                    />
                </div>
            </div>

            {/* Right - Icons*/}

                <HomeIcon className="h-10 w-10" />

            </div>
        </div>
    )
}

export default Header
