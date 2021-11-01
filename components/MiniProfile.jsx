import { signOut, useSession } from "next-auth/react"

function MiniProfile() {
  const { data: session } = useSession();
  //console.log(session)
    return (
      <div className="mt-10 ml-10 flex items-center justify-between">
        <img
          className="h-16 w-16 p-[2px] border rounded-full cursor-pointer"
          src={session?.user.image}
          alt="profile pic"
        />

        <div className="flex-1 mx-4">
            <h2 className="font-bold text-custom-textColor">{session?.user.username}</h2>
            <h3 className="text-sm text-gray-400">Welcome to SelfRegulator</h3>
        </div>

        <button 
          className="ml-[30px] text-blue-400 hover:text-red-400 text-sm font-semibold"
          onClick={signOut}
        >
          Sign out
        </button>
      </div>
    );
}

export default MiniProfile
