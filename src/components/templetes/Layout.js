import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";

function Layout() {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            <Nav />
        </div>
    );
}

export default Layout;
