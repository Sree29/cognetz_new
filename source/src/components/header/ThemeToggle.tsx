"use client";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const currentTheme = storedTheme || (document.documentElement.getAttribute("data-theme") as "light" | "dark") || "dark";
        setTheme(currentTheme);
        document.documentElement.setAttribute("data-theme", currentTheme);

        const handleThemeChange = (e: Event) => {
            const customEvent = e as CustomEvent<"light" | "dark">;
            setTheme(customEvent.detail);
        };

        window.addEventListener("theme-change", handleThemeChange);
        return () => {
            window.removeEventListener("theme-change", handleThemeChange);
        };
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        window.dispatchEvent(new CustomEvent("theme-change", { detail: newTheme }));
    };

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
            style={{
                background: "transparent",
                border: "1px solid var(--border-color, rgba(255, 255, 255, 0.15))",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--primary, #ffffff)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
                fontSize: "20px"
            }}
        >
            <i className={theme === "light" ? "las la-moon" : "las la-sun"} />
        </button>
    );
};

export default ThemeToggle;
