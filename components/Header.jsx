import Image from "next/image"

function Header() {
    return (
        <div>
            <div className="flex justify-between max-width-6xl">
            {/* Left */}
            <div className="relative hidden lg:inline-grid h-24 w-176 cursor-pointer">
                <Image 
                    src="/selfregulator.svg"
                    layout="fill" //fill to parent contain size
                    objectFit="contain" //keeps aspect ratio
                />
            </div>
            <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
            <Image 
                    src="/icon.svg"
                    layout="fill" //fill to parent contain size
                    objectFit="contain" //keeps aspect ratio
                />
            </div>
            {/* Middle - Search input feild */}

            {/* Right */}
            </div>
        </div>
    )
}

export default Header
