import { Outlet } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../hooks/useTheme";

function Layout() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${isDark ? "bg-[#141625] text-[#e8dcc8]" : "bg-[#fafafa] text-[#171717]"}`}>
      <div className="fixed top-4 right-8 z-50">
        <ThemeToggle />
      </div>
      <main className="flex justify-center mx-10">
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
