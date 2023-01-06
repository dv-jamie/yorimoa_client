import RecipeCard from "../molecules/RecipeCard";
import styles from "./RecipeList.module.css";

function RecipeList() {
    return (
        <div className={styles.container}>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </div>
    );
}

export default RecipeList;