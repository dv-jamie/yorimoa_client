import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/templetes/Header";
import Nav from "components/templetes/Nav";
import styles from "./Layout.module.css";

function Layout() {
    const [isBottomSheetShow, setIsBottomSheetShow] = useState(false)
    
    useEffect(() => {
        document.body.classList.toggle("unscrollable", isBottomSheetShow)
    }, [isBottomSheetShow])

    return (
        <div className={styles.container}>
            <header className={styles.header_area}>
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
            <footer className={styles.footer_area}>
                <Nav />
            </footer>
        </div>
    );
}

export default Layout;
