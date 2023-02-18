import { Link, useLocation, useNavigate } from "react-router-dom";
import { BottomsheetType } from "type";
import {
    BackOutline,
    PencilOutline,
    SettingOutline
} from "../../assets/icons"
import styles from "./Header.module.css";

function Header({
    pageTitle,
    setBottomsheetType,
    setIsBottomsheetShow
}) {
    const backButtonStyle = `${styles.button} ${styles.back_button}`
    const navigate = useNavigate()
    const location = useLocation()
    const pathname = location.pathname

    const clickPencilIcon = () => {
        setBottomsheetType(BottomsheetType.SELECT_MENU)
        setIsBottomsheetShow(true)
    }

    const clickCompleteButton = (pathname) => {
        navigate(pathname)
    }

    switch (pathname) {
        // 뒤로가기 버튼 있는 헤더
        case "/setting":
        case "/quit":
            return (
                <div className={`${styles.container} ${styles.back_container}`}>
                    <button
                        className={backButtonStyle}
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

        // 뒤로가기 + 완료 버튼 있는 헤더
        case "/refrigerator/edit":
            return (
                <div className={`${styles.container} ${styles.back_container}`}>
                    <button
                        className={backButtonStyle}
                        onClick={() => {navigate(-1)}}
                    >
                        <BackOutline
                            width={24}
                            height={24}
                        />
                    </button>
                    <button
                        className={`${styles.button} ${styles.complete_button}`}
                        onClick={() => clickCompleteButton("/refrigerator")}
                    >
                        완료
                    </button>
                </div>
            );
        
        // 기본 헤더
        default:
            return (
                <div className={styles.container}>
                    <ul className={styles.nav}>
                        <li onClick={clickPencilIcon}>
                            <PencilOutline
                                width={24}
                                height={24}
                            />
                        </li>
                        <li>
                            <Link to="/setting">
                                <SettingOutline
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            );
    }
}

export default Header;