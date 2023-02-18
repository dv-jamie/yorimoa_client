import { CloseOutline } from "assets/icons";
import { BottomsheetType } from "type";
import styles from "./AddIngredientBottomsheet.module.css";
import RefrigeratorFilteringWrap from "./RefrigeratorFilteringWrap";

function EditIngredientBottomsheet({
    clickedRefrigerator,
    bottomsheetType,
    isBottomsheetShow,
    setIsBottomsheetShow,
    refrigeratorCategories
}) {
    console.log(clickedRefrigerator.name)

    const clickDeleteButton = () => {
        setIsBottomsheetShow(false)
    }

    const clickEditButton = () => {
        setIsBottomsheetShow(false)
    }

    return (
        <div className={
            isBottomsheetShow && bottomsheetType === BottomsheetType.EDIT_INGREDIENT
                ? `bottomsheet ${styles.add_bottomsheet} show`
                : `bottomsheet ${styles.add_bottomsheet} hide`
        }>
            {/* 닫기 버튼 */}
            <div className={styles.close_button_wrap}>
                <button
                    className={styles.close_button}
                    onClick={() => setIsBottomsheetShow(false)}
                >
                    <CloseOutline />
                </button>
            </div>

            {/* 리스트 */}
            <ul>
                <li className={styles.list_item}>
                    <label>상품명</label>
                    <div className={styles.input_wrap}>
                        <input
                            placeholder="ex) 스테이크용소고기"
                            value={clickedRefrigerator.name}
                        onChange={() => console.log("name")}
                        />
                    </div>
                </li>
                <li className={styles.list_item}>
                    <label>카테고리</label>
                    <RefrigeratorFilteringWrap
                        className={styles.category_wrap}
                        categories={refrigeratorCategories}
                    />
                </li>
                <li className={styles.list_item}>
                    <label>구매일</label>
                    <div className={styles.input_wrap}>
                    <input
                        type="date"
                        value={"2023-01-01"}
                        // value={clickedRefrigerator.boughtAt}
                        onChange={() => console.log("date")}
                    />
                    </div>
                </li>
            </ul>

            {/* 하단 버튼 영역 */}
            <div className={styles.button_wrap}>
                <button
                    className={`${styles.button} ${styles.delete_button}`}
                    onClick={clickDeleteButton}
                >
                    삭제하기
                </button>
                <button
                    className={`${styles.button} ${styles.edit_button}`}
                    onClick={clickEditButton}
                >
                    수정하기
                </button>
            </div>
        </div>
    );
}

export default EditIngredientBottomsheet;