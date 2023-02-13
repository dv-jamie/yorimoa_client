import { useLocation, useNavigate } from "react-router-dom";
import {
    BackOutline,
    PencilOutline,
    SettingOutline
} from "../../assets/icons"
import SelectMenuBottomsheet from "components/molecules/SelectMenuBottomsheet";
import styles from "./Header.module.css";

function Header({
    isBottomsheetShow,
    setIsBottomsheetShow
}) {
    const navigate = useNavigate()
    const location = useLocation()
    const pathname = location.pathname

    switch (pathname) {
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
                    <h1 className={styles.page_title}>탈퇴하기</h1>
                    <div className={styles.blank}></div>
                </div>
            );
        default:
            // 기본 헤더
            return (
                <div className={isBottomsheetShow
                    ? `${styles.container} overlap`
                    : `${styles.container}`
                }>
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
        
                    {/* 업로드 바텀시트 */}
                    <SelectMenuBottomsheet
                        isBottomsheetShow={isBottomsheetShow}
                        setIsBottomsheetShow={setIsBottomsheetShow}
                    />
                </div>
            );
    }
}

export default Header;