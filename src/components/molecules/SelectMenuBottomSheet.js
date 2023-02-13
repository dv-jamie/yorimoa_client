import { CloseOutline } from "assets/icons";
import styles from "./SelectMenuBottomsheet.module.css";

function SelectMenuBottomsheet({
    isBottomsheetShow,
    setIsBottomsheetShow,
    setIsTwoDepthBottomsheetShow
}) {
    const clickAddButton = () => {
        setIsBottomsheetShow(false)
        setIsTwoDepthBottomsheetShow(true)
    }

    const clickUpdateButton = () => {
        console.log("update")
    }

    return (
        <div className={isBottomsheetShow
            ? "bottomsheet show"
            : "bottomsheet hide"
        }>
            {/* 닫기 버튼 */}
            <div className={styles.button_wrap}>
                <button
                    className={styles.close_button}
                    onClick={() => setIsBottomsheetShow(false)}
                >
                    <CloseOutline />
                </button>
            </div>

            {/* 리스트 */}
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

export default SelectMenuBottomsheet;