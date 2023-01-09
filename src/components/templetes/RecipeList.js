import RecipeCard from "../molecules/RecipeCard";
import styles from "./RecipeList.module.css";

function RecipeList({ recipes }) {
    return (
        <div className={styles.container}>
            {recipes.map(recipe => {
                return <RecipeCard recipe={recipe} />
            })}
        </div>
    );
}

export default RecipeList;