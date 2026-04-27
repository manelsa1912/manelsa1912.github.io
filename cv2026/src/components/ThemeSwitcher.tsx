import { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import { Sun, Moon } from "lucide-react";

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const main = document.querySelector("main");
    if (theme === "light") {
      setIsDark(false);
      main?.classList.remove("dark");
    } else {
      main?.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const main = document.querySelector("main");
    if (isDark) {
      main?.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      main?.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <Button
      isIconOnly
      variant="faded"
      radius="full"
      onPress={toggleTheme}
      className="bg-transparent px-2"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
};