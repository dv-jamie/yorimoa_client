import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import styles from "./Layout.module.css";

function Layout() {
    return (
        <div className={styles.container}>
            <header className={styles.header_area}>
                <Header />
            </header>
            <main className={styles.main_area}>
                <Outlet />
            </main>
            <footer className={styles.footer_area}>
                <Nav />
            </footer>
        </div>
    );
}

export default Layout;
