function MiniProfile() {
    return (
      <div className="mt-14 ml-10 flex items-center justify-between">
        <img
          className="h-16 w-16 p-[2px] ml-10 rounded-full rounder cursor-pointer"
          src="/james.png"
          alt="profile pic"
        />

        <div className="flex-1 mx-4">
            <h2 className="font-bold">James Prentice</h2>
            <h3 className="text-sm text-gray-400">Welcome to Self Regulator</h3>
        </div>

        <button className="text-blue-400 text-sm font-semibold">Sign out</button>
      </div>
    );
}

export default MiniProfile
