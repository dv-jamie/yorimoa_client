import { useLocation, useNavigate } from "react-router-dom";
import {
    BackOutline,
    PencilOutline,
    SettingOutline
} from "../../assets/icons"
import styles from "./Header.module.css";

function Header({
    pageTitle,
    setIsBottomsheetShow
}) {
    const navigate = useNavigate()
    const location = useLocation()
    const pathname = location.pathname

    switch (pathname) {
        case "/setting":
        case "/quit":
            // 뒤로가기 버튼 있는 헤더
            return (
                <div className={`${styles.container} ${styles.back_container}`}>
                    <button
                        className={styles.back_button}
                        onClick={() => {navigate(-1)}}
                    >
                        <BackOutline
                            width={24}
                            height={24}
                        />
                    </button>
                    <h1 className={styles.page_title}>{pageTitle}</h1>
                    <div className={styles.blank}></div>
                </div>
            );
        default:
            // 기본 헤더
            return (
                <div className={styles.container}>
                    <ul className={styles.nav}>
                        <li onClick={() => setIsBottomsheetShow(true)}>
                            <PencilOutline
                                width={24}
                                height={24}
                            />
                        </li>
                        <li>
                            <SettingOutline
                                width={24}
                                height={24}
                            />
                        </li>
                    </ul>
                </div>
            );
    }
}

export default Header;