import { useTheme } from "../hooks/useTheme";

function ThemeToggle() {
    const {isDark, toggle } = useTheme()
    return <button
        onClick={toggle}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/15 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-sm font-medium cursor-pointer"
    >
        {isDark ? 'Light Mode' : "Dark Mode"}
    </button>;
}

export default ThemeToggle;