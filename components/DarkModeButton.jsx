import darkModeUseHook from "./DarkModeUseHook";
import { LightBulbIcon, MoonIcon } from "@heroicons/react/solid"

export default function DarkModeButton() {
  const [colorTheme, setTheme] = darkModeUseHook();
  return (
    <div>
      {colorTheme === "light" ? (
        <LightBulbIcon 
          className="navBtn"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonIcon 
          className="navBtn"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  )
}