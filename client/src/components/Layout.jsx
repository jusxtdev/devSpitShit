import { Outlet } from "react-router-dom";

function Layout() {
    return <div className="min-h-screen w-full overflow-x-hidden bg-[#222831] text-[#EEEEEE]">
        <main>
            <Outlet />
        </main>
    </div>;
}

export default Layout;