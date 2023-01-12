import styles from "./DiaryFilteringWrap.module.css";
import { CheckboxFill } from "../../assets/icons"
import ThemeList from "./ThemeList";
import { ColorType } from "type";
import { useState } from "react";

function DiaryFilteringWrap({ themes }) {
    const [onlyRecipesLinked, setOnlyRecipesLinked] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.theme_wrap}>
                <ThemeList themes={themes}/>
            </div>
            <div className={styles.check_wrap}>
                <div className={styles.check_area}>
                    <CheckboxFill
                        width="18px"
                        height="18px"
                        fill={onlyRecipesLinked
                            ? ColorType.MAIN_ORANGE
                            : "none"
                        }
                        stroke={onlyRecipesLinked
                            ? "white"
                            : ColorType.SILVER
                        }
                        onClick={() => setOnlyRecipesLinked(current => !current)}
                    />
                    <span>레시피 있는 일기만 보기</span>
                </div>
            </div>
        </div>
    );
}

export default DiaryFilteringWrap;