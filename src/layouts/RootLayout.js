import { NavLink, Outlet } from "react-router-dom";

export function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <h1>Jobsrouter</h1>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>
                    <NavLink to="careers">Careers</NavLink>
                </nav>
            
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}