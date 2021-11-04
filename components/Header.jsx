import DarkModeToggle from "./DarkMode"
import {
    PlusCircleIcon,
    MenuIcon,
    ClipboardListIcon
} from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from '../atoms/modal';

function Header() {
    const {data: session} = useSession();
    const router = useRouter();
    const [open, setOpen] = useRecoilState(modalState);
    //console.log(session)

    return (
        <div className="shadow-sm border-b border-custom-tertiaryAccent bg-custom-primary sticky top-0 z-50 fade">
            <div className="grid grid-cols-2 md:max-w-3xl lg:grid-cols-3 xl:max-w-6xl mx-auto">
                {/* Left */}
                <div className="col-span-1 lg:col-span-2">
                    <div onClick={() => router.push('/')} className="relative w-176 hidden lg:inline-grid cursor-pointer ">
                        <h1 className="h-16 mt-1 font-extrabold text-5xl text-custom-secondaryAccent">SelfRegulator</h1>
                    </div>
                    <div onClick={() => router.push('/')} className="h-16 relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                        <img 
                            className="h-16 w-16 mt-1"
                            src="/icon.svg"
                        />
                    </div>
                </div>

                {/* Right*/}
                <div className="col-span-1 inline-flex items-center justify-end space-x-4">
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />
                    {session ? (
                        <>
                            <HomeIcon onClick={() => router.push('/')} className="navBtn" />
                            <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
                            <ClipboardListIcon  onClick={() => router.push('/tools')} className="navBtn" />
                            <DarkModeToggle />
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
                            <DarkModeToggle />
                            <button 
                                className="text-custom-secondary w-32 p-2 font-bold border border-gray-600 rounded hover:border-green-600 hover:text-green-600" 
                                onClick={() => router.push('/auth/signin')} 
                            >
                                Sign In
                            </button>                        
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Header
