import { CloseOutline } from "assets/icons";
import styles from "./UploadBottomSheet.module.css";

function UploadBottomSheet({
    isBottomSheetShow,
    setIsBottomSheetShow
}) {
    const clickAddButton = () => {
        console.log("add")
    }

    const clickUpdateButton = () => {
        console.log("update")
    }

    return (
        <div className={isBottomSheetShow
            ? `${styles.container} show`
            : `${styles.container} hide`
        }>
            <button
                className={styles.close_button}
                onClick={() => setIsBottomSheetShow(false)}
            >
                <CloseOutline />
            </button>
            <ul>
                <li
                    className={styles.list_item}
                    onClick={clickAddButton}
                >
                    재료 추가하기
                </li> 
                <li
                    className={styles.list_item}
                    onClick={clickUpdateButton}
                >
                    재료 수정하기
                </li> 
            </ul>
        </div>
    );
}

export default UploadBottomSheet;