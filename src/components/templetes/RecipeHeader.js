import FilteringBox from "../molecules/FilteringBox";
import SearchBox from "../molecules/SearchBox";
import Banner from "./Banner";

function RecipeHeader() {
    return (
        <div>
            <Banner type="recipe" />
            <SearchBox />
            <FilteringBox />
        </div>
    );
}

export default RecipeHeader;