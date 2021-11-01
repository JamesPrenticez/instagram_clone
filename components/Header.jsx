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
import DarkModeButton from "./DarkModeButton"
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
    const {data: session} = useSession();
    //console.log(session)

    return (
        <div className="shadow-sm border-b bg-custom-background sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                {/* Left */}
                <div className="relative w-176 hidden lg:inline-grid  cursor-pointer ">
                    <h1 className="font-extrabold text-5xl mt-2 dark:text-green-600">SelfRegulator</h1>
                    {/* <Image 
                        src="/selfregulator.svg"
                        layout="fill" //fill to parent contain size
                        objectFit="contain" //keeps aspect ratio
                    /> */}
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
                            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                </div>

                {/* Right - Icons*/}
                <div className="flex items-center justify-end space-x-4">
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />
                    
                    
                    {session ? (
                        <>
                            <HomeIcon className="navBtn" />
                            <div className="relative navBtn">
                                <PaperAirplaneIcon className="navBtn rotate-45 translate-x-1 -translate-y-0.5"/>
                                <div className="absolute -top-1 -right-3 text-xs h-5 w-5 bg-red-500 text-white rounded-full flex items-center justify-center">
                                    3
                                </div>
                            </div>
                            <PlusCircleIcon className="navBtn" />
                            <UserGroupIcon className="navBtn" />
                            <HeartIcon className="navBtn" />
                            <DarkModeButton />
                            <img 
                                className="h-10 w-10 rounded-full cursor-pointer"
                                src={session.user.image}
                                alt="profile pic"
                                onClick={signOut}
                            />
                        </>
                    ) : 
                    (
                        <>
                            <button onClick={signIn}>Sign In</button>                        
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Header
