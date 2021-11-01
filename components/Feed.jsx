import MiniProfile from "./MiniProfile"
import Posts from "./Posts"
import Stories from "./Stories"
import Suggestions from "./Suggestions"
import { useSession } from "next-auth/react"

function Feed() {
    const { data: session } = useSession();
    //console.log(session)
    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
            {/* Left Section */}
            <section className="col-span-2">
                {/* Stories */}
                <Stories />
                {/* Posts */}
                <Posts />
            </section>
            
            {/* Right Section */}
            {session && (
                <section className="hidden xl:inline-flex cols-span-1">
                    <div className="fixed top-20">
                        {/* Mini Profile */}
                        <MiniProfile />
                        <Suggestions />
                        {/* Suggestions */}
                    </div>
                </section>
            )}

                
        </main>
    )
}

export default Feed
