import { useEffect, useState } from "react";
import { LightBulbIcon, MoonIcon } from "@heroicons/react/solid"

const DarkModeToggle = () => {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };
 
  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode",
      );
      console.log("init", initialColorValue);
      
      setDarkTheme(initialColorValue === "dark");
    }, []);
    useEffect(() => {
      if (darkTheme !== undefined) {
        if (darkTheme) {
          document.documentElement.setAttribute("data-theme", "dark");
          window.localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.removeAttribute("data-theme");
          window.localStorage.setItem("theme", "light");
        }
      }
    }, [darkTheme]);

    return (
      <>
        {darkTheme ? (
          <LightBulbIcon
            className="navBtn"
            onClick={() => setDarkTheme(!darkTheme)}
            onChange={handleToggle}
            />
            ) : (
              <MoonIcon 
              className="navBtn"
              onClick={() => setDarkTheme(!darkTheme)}
              onChange={handleToggle}
          />
        )}
        {/* <label>
          <input type="checkbox" checked={darkTheme} onChange={handleToggle} />
          Dark
        </label> */}
      </>
    );
}

export default DarkModeToggle

     {/* <button
        title="Toggle Theme"
        onClick={handleToggle}
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
      </button> */}