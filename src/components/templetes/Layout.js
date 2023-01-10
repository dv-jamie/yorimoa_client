import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import styles from "./Layout.module.css";

function Layout() {
    const [isModalShow, setIsModalShow] = useState(false)

    useEffect(() => {
        document.body.classList.toggle("unscrollable", isModalShow)
    }, [isModalShow])

    return (
        <div>
            <header className={styles.header_area}>
                <Header />
            </header>
            <main className={styles.main_area}>
                <Outlet />
            </main>
            <footer className={styles.footer_area}>
                <Nav
                    isModalShow = {isModalShow}
                    setIsModalShow = {setIsModalShow}
                />
            </footer>
        </div>
    );
}

export default Layout;
