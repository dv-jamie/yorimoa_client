import { CloseOutline } from "assets/icons";
import styles from "./EditIngredientBottomsheet.module.css";

function EditIngredientBottomsheet({
    isTwoDepthBottomsheetShow,
    setIsTwoDepthBottomsheetShow
}) {
    const clickDeleteButton = () => {
        console.log("add")
    }

    const clickEditButton = () => {
        console.log("add")
    }

    return (
        <div className={isTwoDepthBottomsheetShow
            ? `bottomsheet ${styles.add_bottomsheet} show`
            : `bottomsheet ${styles.add_bottomsheet} hide`
        }>
            {/* 닫기 버튼 */}
            <div className={styles.close_button_wrap}>
                <button
                    className={styles.close_button}
                    onClick={() => setIsTwoDepthBottomsheetShow(false)}
                >
                    <CloseOutline />
                </button>
            </div>

            {/* 리스트 */}
            <ul>
                <li className={styles.list_item}>
                    <label>상품명</label>
                    <div>
                        <input />
                    </div>
                </li>
                <li className={styles.list_item}>
                    <label>카테고리</label>
                    <div>카테..</div>
                </li>
                <li className={styles.list_item}>
                    <label>구매일</label>
                    <div>
                        <input />
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