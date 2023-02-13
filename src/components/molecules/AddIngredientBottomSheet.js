import styles from "./AddIngredientBottomsheet.module.css";

function AddIngredientBottomsheet({
    isBottomsheetShow,
    setIsBottomsheetShow
}) {
    const clickAddButton = () => {
        console.log("add")
    }

    return (
        <div className={isBottomsheetShow
            ? `bottomsheet ${styles.add_bottomsheet} show`
            : "bottomsheet hide"
        }>
            <ul>
                <li>
                    <label>상품명</label>
                    <input />
                </li>
                <li>
                    <label>카테고리</label>
                    <div>카테..</div>
                </li>
                <li>
                    <label>구매일</label>
                    <input />
                </li>
            </ul>

            <button
                className={styles.add_button}
                onClick={clickAddButton}
            >
                추가하기
            </button>
        </div>
    );
}

export default AddIngredientBottomsheet;