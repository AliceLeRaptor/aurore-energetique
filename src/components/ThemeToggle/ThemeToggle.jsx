import { useEffect, useState } from "preact/hooks";

export default function ThemeToggle() {
  const getUserPreferedColorScheme = () => {
    // Local storage
    const localStorageTheme = localStorage?.getItem("theme") ?? "";
    if (["dark", "light"].includes(localStorageTheme)) {
      return localStorageTheme;
    }

    // Browser default
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  };

  const [currentTheme, setCurrentTheme] = useState(
    getUserPreferedColorScheme(),
  );

  useEffect(() => {
    if (currentTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    window.localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  };

  return (
    <button onClick={toggleTheme} class="Header-themeToggle">
      Mode {currentTheme === "light" ? "sombre" : "clair"}
      <svg width="24" height="24" aria-hidden="true" focusable="false">
        <use
          href={`/src/assets/${currentTheme === "light" ? "moon" : "sun"}.svg#${currentTheme === "light" ? "moon" : "sun"}`}
        />
      </svg>
    </button>
  );
}
