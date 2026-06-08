import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-[#fafafa] text-[#171717]">
            <main className="flex justify-center mx-10">
                <div className="w-full">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default Layout;
