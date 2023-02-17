import { useEffect } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import { BottomsheetType, ColorType } from "type";
import { BagFill, SpoonFill } from "assets/icons";
import styles from "./RefrigeratorTable.module.css";

function RefrigetraotrTable({
    categories,
    refrigerators,
    setRefrigerators,
    setBottomsheetType
}) {
    const today = new Date()
    const NAVER_SERACH_URL = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="
    
    const location = useLocation()
    const pathname = location.pathname
    
    const { isBottomsheetShowContext } = useOutletContext()
    const [isBottomsheetShow, setIsBottomsheetShow] = isBottomsheetShowContext

    const clickIngredientName = ({ id, name }) => {
        if(pathname === "/refrigerator") {
            window.open(`${NAVER_SERACH_URL}${name}+레시피`, "_blank")
        } else {
            setBottomsheetType(BottomsheetType.EDIT_INGREDIENT)
            setIsBottomsheetShow(true)
        }
    }

    const clickIcon = (type) => {
        refrigerators[type] = refrigerators[type] ? false : true
    }

    // useEffect(() => {
    //     setRefrigerators(refrigerators)
    // }, clickIcon)

    return (
        <div className={styles.container}>
            {refrigerators.length === 0
                ? <p className={styles.no_data}>아직 추가된 재료가 없습니다.</p>
                : <>
                    {/* 아이콘 설명 영역 */}
                    <ul className={styles.explain_wrap}>
                        <li className={styles.tag}>
                            <SpoonFill
                                fill={ColorType.MAIN_ORANGE}
                            />
                            <span>빨리 먹을 것</span>
                        </li>
                        <li className={styles.tag}>
                            <BagFill
                                fill={ColorType.MAIN_YELLOW}
                            />
                            <span>빨리 살 것</span>
                        </li>
                    </ul>

                    {/* 테이블 영역 */}
                    {categories.map(category => {
                        const ingredientsByCategory = refrigerators.filter(refrigerator => {
                            return refrigerator.category === category.id
                        })
                        if(ingredientsByCategory.length === 0) return
        
                        return (
                            <ul key={category.id} className={styles.table}>
                                <label className={styles.category_name}>
                                    {category.name}
                                </label>
        
                                <ul className={styles.row}>
                                    <li className={styles.column}>재료명</li>
                                    <li className={styles.column}>경과일</li>
                                </ul>
        
                                {ingredientsByCategory.map(ingredient => {
                                    const id = ingredient.id
                                    const name = ingredient.name
                                    const boughtAt = ingredient.boughtAt;
                                    const diffMSec = today.getTime() - today.getTime();
                                    const diffDate = diffMSec / (24 * 60 * 60 * 1000);
        
                                    return (
                                        <ul key={id} className={styles.row}>
                                            {/* 재료명 */}
                                            <li className={`${styles.column} ${styles.ingredient_name_wrap}`}>
                                                <span
                                                    className={styles.ingredient_name}
                                                    onClick={() => clickIngredientName({ id, name })}
                                                    >
                                                    {name}
                                                </span>
                                                <span
                                                    className={styles.icon}
                                                    onClick={() => clickIcon("eatTag")}
                                                >
                                                    <SpoonFill
                                                        fill={ingredient.eatTag
                                                            ? ColorType.MAIN_ORANGE
                                                            : ColorType.GAINSBRO
                                                        }
                                                    />
                                                </span>
                                                <span
                                                    className={styles.icon}
                                                    onClick={() => clickIcon("buyTag")}
                                                >
                                                    <BagFill
                                                        fill={ingredient.buyTag
                                                            ? ColorType.MAIN_YELLOW
                                                            : ColorType.GAINSBRO
                                                        }
                                                    />
                                                </span>
                                            </li>
        
                                            {/* 구매경과일 */}
                                            <li className={styles.column}>
                                                {diffDate}일
                                            </li>
                                        </ul>
                                    )
                                })}
                            </ul>
                        )
                    })}
                </>
            }
        </div>
    );
}

export default RefrigetraotrTable;