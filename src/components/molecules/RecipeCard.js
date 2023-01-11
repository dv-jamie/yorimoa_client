import styles from "./RecipeCard.module.css";
import {
    LevelSmall,
    ServingSmall,
    TimeSmall,
    DiaryLink
} from "../../assets/icons"
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {
    const navigate = useNavigate();

    const levelText = new Map()
    levelText
        .set(1, '입문')
        .set(2, '초보')
        .set(3, '중수')
        .set(4, '고수')

    return (
        <div
            className={styles.container}
            onClick={() => navigate("/recipe/:id", { id: recipe.id })}
        >
            <div className={styles.image_wrap}>
                <img src={`${process.env.PUBLIC_URL}${recipe.image.url}`} alt="레시피 썸네일 이미지" />
                <div className={styles.diary_count}>
                    <img src={DiaryLink} alt="연동 일기 개수" />
                    <span>{recipe.diariesCount}</span>
                </div>
            </div>
            <div className={styles.content_wrap}>
                <h2 className={styles.title}>
                    {recipe.title}
                </h2>
                <div className={styles.info_wrap}>
                    <div className={styles.info}>
                        <img src={TimeSmall} alt="조리시간 아이콘" />
                        <span>{recipe.time}분</span>
                    </div>
                    <div className={styles.info}>
                        <img src={LevelSmall} alt="난이도 아이콘" />
                        <span>{levelText.get(recipe.level)}</span>
                    </div>
                    <div className={styles.info}>
                        <img src={ServingSmall} alt="인원 아이콘" />
                        <span>{recipe.serving}인분</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;