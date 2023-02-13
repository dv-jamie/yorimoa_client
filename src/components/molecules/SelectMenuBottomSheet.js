import { CloseOutline } from "assets/icons";
import { BottomSheetType } from "type";
import styles from "./SelectMenuBottomSheet.module.css";

function SelectMenuBottomSheet({
    isBottomSheetShow,
    setIsBottomSheetShow,
    bottomSheetType,
    setBottomSheetType,
}) {
    const clickAddButton = () => {
        setIsBottomSheetShow(true)
        setBottomSheetType(BottomSheetType.ADD_INGREDIENT)
    }

    const clickUpdateButton = () => {
        console.log("update")
    }

    return (
        <div className={isBottomSheetShow
            ? "bottomsheet show"
            : "bottomsheet hide"
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

export default SelectMenuBottomSheet;