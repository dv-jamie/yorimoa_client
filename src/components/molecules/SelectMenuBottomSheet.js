import { CloseOutline } from "assets/icons";
import AddIngredientBottomsheet from "./AddIngredientBottomsheet";
import styles from "./SelectMenuBottomsheet.module.css";

function SelectMenuBottomsheet({
    isBottomsheetShow,
    setIsBottomsheetShow,
}) {
    const clickAddButton = () => {
        setIsBottomsheetShow(true)
    }

    const clickUpdateButton = () => {
        console.log("update")
    }

    return (
        <div className={isBottomsheetShow
            ? "bottomsheet show"
            : "bottomsheet hide"
        }>
            <button
                className={styles.close_button}
                onClick={() => setIsBottomsheetShow(false)}
            >
                <CloseOutline />
            </button>
            <ul>
                <li
                    className={styles.list_item}
                    onClick={clickAddButton}
                >
                    재료 추가하기
                    <AddIngredientBottomsheet />
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