import { useEffect } from "react";
import { ColorType } from "type";
import { BagFill, SpoonFill } from "assets/icons";
import styles from "./RefrigeratorTable.module.css";

function RefrigetraotrTable({
    categories,
    refrigerators,
    setRefrigerators
}) {
    const today = new Date()
    const NAVER_SERACH_URL = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="
    
    const openWindow = (ingredientName) => {
        window.open(`${NAVER_SERACH_URL}${ingredientName}+레시피`, "_blank")
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
                                    const boughtAt = ingredient.boughtAt;
                                    const diffMSec = today.getTime() - today.getTime();
                                    const diffDate = diffMSec / (24 * 60 * 60 * 1000);
        
                                    return (
                                        <ul key={ingredient.id} className={styles.row}>
                                            {/* 재료명 */}
                                            <li className={`${styles.column} ${styles.ingredient_name_wrap}`}>
                                                <span
                                                    className={styles.ingredient_name}
                                                    onClick={() => openWindow(ingredient.name)}
                                                    >
                                                    {ingredient.name}
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