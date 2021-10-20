import Posts from "./Posts"
import Stories from "./Stories"

function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 xl:max-w-6xl mx-auto">
            {/* Left Section */}
            <section className="col-span-2">
                {/* Stories */}
                <Stories />
                {/* Posts */}
                <Posts />
            </section>
            
            {/* Right Section */}
            <section className="cols-span-1">
                {/* Mini Profile */}
                {/* Suggestions */}
            </section>
                
        </main>
    )
}

export default Feed
