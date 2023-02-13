import UploadBottomSheet from "components/molecules/UploadBottomSheet";
import {
    PencilOutline,
    SettingOutline
} from "../../assets/icons"
import styles from "./Header.module.css";

function Header({
    isBottomSheetShow,
    setIsBottomSheetShow
}) {
    return (
        <div className={isBottomSheetShow
            ? `${styles.container} overlap`
            : `${styles.container}`
        }>
            <ul className={styles.nav}>
                <li onClick={() => setIsBottomSheetShow(true)}>
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
            <UploadBottomSheet
                isBottomSheetShow={isBottomSheetShow}
                setIsBottomSheetShow={setIsBottomSheetShow}
            />
        </div>
    );
}

export default Header;