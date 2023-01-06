import styles from "./RecipeCard.module.css";
import levelIcon from "../../assets/icons/levelIcon.png"
import servingIcon from "../../assets/icons/servingIcon.png"
import recipeIcon from "../../assets/icons/recipeIcon.png"
import recipeSampleImage from "../../assets/images/recipeSampleImage.png"

function RecipeCard() {
    return (
        <div className={styles.container}>
            <div className={styles.image_wrap}>
                <img src={recipeSampleImage} alt="레시피 썸네일 이미지" />
                <div className={styles.recipe_count}>
                    <img src={recipeIcon} alt="연동 레시피 개수" />
                    <span>5</span>
                </div>
            </div>
            <div className={styles.content_wrap}>
                <h2 className={styles.title}>
                    유치원생을 위한 유부초밥 부드러운 식감
                </h2>
                <div className={styles.info_wrap}>
                    <div className={styles.info}>
                        <img alt="조리시간 아이콘" />
                        <span>1시간이내</span>
                    </div>
                    <div className={styles.info}>
                        <img src={levelIcon} alt="난이도 아이콘" />
                        <span>초급</span>
                    </div>
                    <div className={styles.info}>
                        <img src={servingIcon} alt="인원 아이콘" />
                        <span>10인분</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;