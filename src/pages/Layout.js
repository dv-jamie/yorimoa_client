import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/templetes/Header";
import Nav from "components/templetes/Nav";
import styles from "./Layout.module.css";

function Layout() {
    const location = useLocation()
    const pathname = location.pathname
    let headerStyle = styles.header_area
    let footerStyle = styles.footer_area

    const [isBottomSheetShow, setIsBottomSheetShow] = useState(false)
    
    useEffect(() => {
        document.body.classList.toggle("unscrollable", isBottomSheetShow)
    }, [isBottomSheetShow])

    switch (pathname) {
        case "/login":
        case "/diary":
        case "/recipe":
            headerStyle = `${styles.header_area} hide`
            footerStyle = `${styles.footer_area} hide`
            break
        case "/setting":
        case "/quit":
            footerStyle = `${styles.footer_area} hide`
            break
    }

    return (
        <div className={styles.container}>
            <header className={headerStyle}>
                <Header
                    isBottomSheetShow={isBottomSheetShow}
                    setIsBottomSheetShow={setIsBottomSheetShow}
                />
            </header>
            <main className={styles.main_area}>
                <Outlet
                    className={styles.main_area}
                />
            </main>
            <footer className={footerStyle}>
                <Nav />
            </footer>
        </div>
    );
}

export default Layout;
