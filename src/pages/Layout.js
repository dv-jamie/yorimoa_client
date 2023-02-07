import { Outlet } from "react-router-dom";
import Header from "../components/templetes/Header";
import styles from "./Layout.module.css";

function Layout() {
    return (
        <div className={styles.container}>
            <header className={styles.header_area}>
                <Header />
            </header>
            <main className={styles.main_area}>
                <Outlet
                    className={styles.main_area}
                />
            </main>
        </div>
    );
}

export default Layout;
