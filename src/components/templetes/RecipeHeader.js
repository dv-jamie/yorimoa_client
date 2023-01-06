import RecipeFilteringBox from "../molecules/RecipeFilteringBox";
import SearchBox from "../molecules/SearchBox";
import Banner from "./Banner";

function RecipeHeader() {
    return (
        <div>
            <Banner type="recipe" />
            <SearchBox />
            <RecipeFilteringBox />
        </div>
    );
}

export default RecipeHeader;