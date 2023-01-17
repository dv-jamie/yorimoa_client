import RecipeCard from "../molecules/RecipeCard";
import styles from "./RecipeList.module.css";

function RecipeList({ recipes }) {
    return (
        <div className={styles.container}>
            {recipes.length !== 0 && recipes.map(recipe => {
                return <RecipeCard key={recipe.id} recipe={recipe} />
            })}
        </div>
    );
}

export default RecipeList;