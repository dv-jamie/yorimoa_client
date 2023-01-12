import styles from "./RecipeCard.module.css";
import {
    ClockOutline,
    LevelOutline,
    ServingOutline,
    RecipeOutline
} from "../../assets/icons"
import { useNavigate } from "react-router-dom";
import { ColorType } from "type";

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
            onClick={() => navigate(`/recipe/${recipe.id}`)}
        >
            <div className={styles.image_wrap}>
                <img src={`${process.env.PUBLIC_URL}${recipe.image.url}`} alt="레시피 썸네일 이미지" />
                <div className={styles.diary_count}>
                    <RecipeOutline
                        width={12}
                        height={12}
                        stroke={ColorType.DIM_GRAY}
                    />
                    <span>{recipe.diariesCount}</span>
                </div>
            </div>
            <div className={styles.content_wrap}>
                <h2 className={styles.title}>
                    {recipe.title}
                </h2>
                <div className={styles.info_wrap}>
                    <div className={styles.info}>
                        <ClockOutline
                            width={14}
                            heigh={14}
                            stroke={ColorType.SILVER}
                        />
                        <span>{recipe.time}분</span>
                    </div>
                    <div className={styles.info}>
                        <LevelOutline
                            width={14}
                            heigh={14}
                            stroke={ColorType.SILVER}
                        />
                        <span>{levelText.get(recipe.level)}</span>
                    </div>
                    <div className={styles.info}>
                        <ServingOutline
                            width={14}
                            heigh={14}
                            stroke={ColorType.SILVER}
                        />
                        <span>{recipe.serving}인분</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;