import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import styles from "./Layout.module.css";

function Layout() {
    const [isModalShow, setIsModalShow] = useState(false)
    const [modalType, setModalType] = useState(null)

    useEffect(() => {
        document.body.classList.toggle("unscrollable", isModalShow)
    }, [isModalShow])

    return (
        <div className={styles.container}>
            <header className={styles.header_area}>
                <Header />
            </header>
            <main className={styles.main_area}>
                <Outlet
                    context={{
                        isModalShowContext: [isModalShow, setIsModalShow],
                        modalTypeContext: [modalType, setModalType]
                    }}
                    className={styles.main_area}
                />
            </main>
            <footer className={styles.footer_area}>
                <Nav
                    isModalShow = {isModalShow}
                    setIsModalShow = {setIsModalShow}
                    modalType = {modalType}
                    setModalType = {setModalType}
                />
            </footer>
        </div>
    );
}

export default Layout;
