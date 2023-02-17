import { CloseOutline } from "assets/icons";
import { Link } from "react-router-dom";
import { BottomsheetType } from "type";
import styles from "./SelectMenuBottomsheet.module.css";

function SelectMenuBottomsheet({
    bottomsheetType,
    setBottomsheetType,
    isBottomsheetShow,
    setIsBottomsheetShow,
    setIsTwoDepthBottomsheetShow
}) {
    const clickAddButton = () => {
        setBottomsheetType(BottomsheetType.ADD_INGREDIENT)
        setIsBottomsheetShow(false)
        setIsTwoDepthBottomsheetShow(true)
    }

    return (
        <div className={
            isBottomsheetShow && bottomsheetType === BottomsheetType.SELECT_MENU
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
                    onClick={() => setIsBottomsheetShow(false)}
                >
                    <Link to="/refrigerator/edit">
                        재료 수정하기
                    </Link>
                </li> 
            </ul>
        </div>
    );
}

export default SelectMenuBottomsheet;