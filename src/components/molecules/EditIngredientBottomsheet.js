import { useState } from "react";
import axios from "axios";
import { BottomsheetType } from "type";
import { CloseOutline } from "assets/icons";
import RefrigeratorFilteringWrap from "./RefrigeratorFilteringWrap";
import styles from "./AddIngredientBottomsheet.module.css";

function EditIngredientBottomsheet({
    clickedRefrigerator,
    bottomsheetType,
    isBottomsheetShow,
    setIsBottomsheetShow,
    refrigeratorCategories,
    selectedCategory,
    setSelectedCategory,
}) {
    const size = 10

    const [nameValue, setNameValue] = useState(clickedRefrigerator.name)
    const [boughtAtValue, setBoughtAtValue] = useState(clickedRefrigerator.boughtAt.slice(0, 10))

    const [refrigerators, setRefrigerators] = useState([])
    const [keyword, setKeyword] = useState("")
    const [page, setPage] = useState(0)

    const getRefrigerators = async () => {
        const { data: getRefrigerators } = await axios.get(`${process.env.REACT_APP_API_URL}/refrigerators`, {
            params: {
                categoryId: selectedCategory,
                keyword,
                size,
                page
            }
        })

        const refrigerators = getRefrigerators.data.list
        setRefrigerators(refrigerators)
    }

    const clickDeleteButton = async () => {
        await axios.delete(`${process.env.REACT_APP_API_URL}/refrigerators/${clickedRefrigerator.id}`)
        setIsBottomsheetShow(false)
        getRefrigerators()
    }

    const clickEditButton = async () => {
        const updateRefrigeratorDto = {
            name: nameValue,
            boughtAt: boughtAtValue,
            categoryId: selectedCategory
        }
        await axios.patch(`${process.env.REACT_APP_API_URL}/refrigerators/${clickedRefrigerator.id}`, {
            ...updateRefrigeratorDto
        })
        setIsBottomsheetShow(false)
        getRefrigerators()
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
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
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
                        value={boughtAtValue}
                        onChange={(e) => setBoughtAtValue(e.target.value)}
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