function MiniProfile() {
    return (
      <div className="mt-14 ml-10 flex items-center justify-between">
        <img
          className="h-16 w-16 p-[2px] ml-10 rounded-full rounder cursor-pointer"
          src="/james.png"
          alt="profile pic"
        />

        <div>
            <h2>James Prentice</h2>
            <h3>Welcome to Instagram</h3>
        </div>

        <button>Sign out</button>
      </div>
    );
}

export default MiniProfile
