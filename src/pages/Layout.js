import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/templetes/Header";
import Nav from "../components/templetes/Nav";
import styles from "./Layout.module.css";

function Layout() {
    const [themes, setThemes] = useState([])
    const [selectedThemes, setSelectedThemes] = useState([])
    const [isModalShow, setIsModalShow] = useState(false)
    const [modalType, setModalType] = useState(null)

    const getThemes = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/themes`)
        const themes = response.data
        const themeIds = Array(themes.length).fill().map((_, i) => i + 1)
        setThemes(themes)
        setSelectedThemes(themeIds)
    }

    useEffect(() => {
        getThemes()
    }, [])

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
                        themesContext: [themes],
                        selectedThemesContext: [selectedThemes, setSelectedThemes],
                        isModalShowContext: [isModalShow, setIsModalShow],
                        modalTypeContext: [modalType, setModalType],
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
