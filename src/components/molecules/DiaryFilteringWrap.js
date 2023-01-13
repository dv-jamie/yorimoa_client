import styles from "./DiaryFilteringWrap.module.css";
import { CheckboxFill } from "../../assets/icons"
import { ColorType } from "type";
import ThemeList from "./ThemeList";

function DiaryFilteringWrap({
    themes,
    selectedThemes,
    setSelectedThemes,
    onlyRecipesLinked,
    setOnlyRecipesLinked
}) {
    return (
        <div className={styles.container}>
            <div className={styles.theme_wrap}>
                <ThemeList
                    themes={themes}
                    selectedThemes={selectedThemes}
                    setSelectedThemes={setSelectedThemes}
                />
            </div>
            <div className={styles.check_wrap}>
                <div
                    className={styles.check_area}
                    onClick={() => setOnlyRecipesLinked(current => !current)}
                >
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
                    />
                    <span>레시피 있는 일기만 보기</span>
                </div>
            </div>
        </div>
    );
}

export default DiaryFilteringWrap;