export default function ToggleDarkMode() {
    function toggleTheme(){
        document.documentElement.classList.toggle('dark')
    }

    return (
      <button
        title="Toggle Theme"
        onClick={toggleTheme}
        className="
        w-12 
        h-6 
        rounded-full 
        p-1 
        bg-gray-400 
        dark:bg-black
        relative 
        transition-colors 
        duration-500 
        ease-in
        focus:outline-none 
        focus:ring-2 
        focus:ring-black 
        dark:focus:ring-green-600 
        focus:border-transparent
      "
      >
        <div
          id="toggle"
          className="
            dark:ml-6  
            rounded-full 
            w-4 
            h-4 
            bg-gray-50 
            dark:bg-green-600 
            relative 
            ml-0 
            pointer-events-none 
            transition-all 
            duration-300 
            ease-out
        "
        ></div>
      </button>
    );
}