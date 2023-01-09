import RecipeHeader from "../components/templetes/RecipeHeader";
import RecipeList from "../components/templetes/RecipeList";
import dummy from "../data.json";

function Recipe() {
    return (
        <div>
            <RecipeHeader />
            <RecipeList recipes={dummy.recipes} />
        </div>
    );
}

export default Recipe;