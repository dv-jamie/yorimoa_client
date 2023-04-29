import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { CloseOutline } from "assets/icons";
import { BottomsheetType } from "type";
import RefrigeratorFilteringWrap from "components/molecules/RefrigeratorFilteringWrap";
import styles from "./AddIngredientBottomSheet.module.css";

function AddIngredientBottomsheet({
    bottomsheetType,
    isTwoDepthBottomsheetShow,
    setIsTwoDepthBottomsheetShow,

    refrigeratorCategories,
    selectedCategory,
    setSelectedCategory,
}) {
    const [isInputFilled, setIsInputFilled] = useState(false);

    const nameRef = useRef();
    const dateRef = useRef();

    const changeInputValue = () => {
        const name = nameRef.current.value;
        const date = dateRef.current.value;

        if (name.length === 0 || !selectedCategory || date.length === 0) {
            setIsInputFilled(false);
        } else {
            setIsInputFilled(true);
        }
    };

    const clickAddButton = async () => {
        const name = nameRef.current.value;
        const date = dateRef.current.value;

        if (name.length === 0 || !selectedCategory || date.length === 0) return;

        const createRefrigeratorDto = {
            name,
            boughtAt: new Date(date),
            categoryId: selectedCategory,
        };
        await axios.post(`${process.env.REACT_APP_API_URL}/refrigerators`, {
            ...createRefrigeratorDto,
        });
        nameRef.current.value = "";
        dateRef.current.value = "";
        setIsTwoDepthBottomsheetShow(false);
    };

    useEffect(() => {
        changeInputValue();
    }, [selectedCategory]);

    return (
        <div
            className={
                isTwoDepthBottomsheetShow &&
                bottomsheetType === BottomsheetType.ADD_INGREDIENT
                    ? `bottomsheet ${styles.add_bottomsheet} show`
                    : `bottomsheet ${styles.add_bottomsheet} hide`
            }
        >
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
                    <label>재료명</label>
                    <div className={styles.input_wrap}>
                        <input
                            placeholder="ex) 스테이크용소고기 (최대 18자)"
                            maxLength="18"
                            ref={nameRef}
                            onChange={changeInputValue}
                        />
                    </div>
                </li>
                <li className={styles.list_item}>
                    <label>카테고리</label>
                    <RefrigeratorFilteringWrap
                        className={styles.category_wrap}
                        categories={refrigeratorCategories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                </li>
                <li className={styles.list_item}>
                    <label>구매일</label>
                    <div className={styles.input_wrap}>
                        <input
                            type="date"
                            ref={dateRef}
                            onChange={changeInputValue}
                        />
                    </div>
                </li>
            </ul>

            {/* 하단 버튼 영역 */}
            <div className={styles.button_wrap}>
                <button
                    className={
                        isInputFilled
                            ? `${styles.button} ${styles.add_button}`
                            : `${styles.button} ${styles.add_button} ${styles.disabled_button}`
                    }
                    onClick={clickAddButton}
                >
                    추가하기
                </button>
            </div>
        </div>
    );
}

export default AddIngredientBottomsheet;
