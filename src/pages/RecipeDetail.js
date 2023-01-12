import { useState } from "react";
import { useParams } from "react-router-dom";
import { ClockOutline, LevelOutline, ServingOutline } from "assets/icons";
import { ColorType } from "type";
import styles from "./RecipeDetail.module.css";
import dummy from "../data.json";

function RecipeDetail() {
    const params = useParams()
    const [recipe] = useState(dummy.recipes[params.id])

    const levelText = new Map()
    levelText
        .set(1, '입문')
        .set(2, '초보')
        .set(3, '중수')
        .set(4, '고수')
        
    return (
        <div>
            <div className={styles.writer_info_wrap}>
                <div className={styles.writer_image_wrap}>
                    <img src={`${process.env.PUBLIC_URL}${recipe.writer.image}`} alt="유저 프로필 사진" />
                </div>
                <span>{recipe.writer.nick}</span>
            </div>
            <div className={styles.recipe_image_wrap}>
                <img src={`${process.env.PUBLIC_URL}${recipe.image.url}`} alt="레시피 사진" />
            </div>
            <div className={styles.theme_wrap}>
                {recipe.themes.map(theme => {
                    return <span key={theme.id}>#{theme.name}</span>
                })}
            </div>
            <h2>{recipe.title}</h2>
            <ul className={styles.theme_wrap}>
                <li>
                    <i>icon</i>
                    <span>{recipe.categories[0].name}</span>
                </li>
                <li>
                    <ClockOutline
                        width={24}
                        heigh={24}
                        stroke={ColorType.SILVER}
                    />
                    <span>{recipe.time}</span>
                </li>
                <li>
                    <LevelOutline
                        width={24}
                        heigh={24}
                        stroke={ColorType.SILVER}
                    />
                    <span>{levelText.get(recipe.level)}</span>
                </li>
                <li>
                    <ServingOutline
                        width={24}
                        heigh={24}
                        stroke={ColorType.SILVER}
                    />
                    <span>{recipe.serving}인분</span>
                </li>
            </ul>
            <p>{recipe.content}</p>

            <h3>재료</h3>
            <ul className={styles.ingredient_wrap}>
                <label>재료</label>
                <li>
                    <span>새우</span>
                    <span>20개</span>
                </li>
                <li>
                    <span>새우</span>
                    <span>20개</span>
                </li>
                <li>
                    <span>새우</span>
                    <span>20개</span>
                </li>
            </ul>

            <h3>요리 순서</h3>
            <ul className={styles.step_wrap}>
                <label>재료</label>
                <li>
                    <img alt="요리 순서 이미지" />
                    <div>
                        <span>STEP.1</span>
                        <p>마늘은 어쩌고..</p>
                    </div>
                </li>
            </ul>
            <ul className={styles.step_wrap}>
                <label>재료</label>
                <li>
                    <img alt="요리 순서 이미지" />
                    <div>
                        <span>STEP.1</span>
                        <p>마늘은 어쩌고..</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default RecipeDetail;