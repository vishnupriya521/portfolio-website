import { useState, useEffect } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed top-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50"
    >
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;