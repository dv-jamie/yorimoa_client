import DiaryFilteringWrap from "../molecules/DiaryFilteringWrap";
import Banner from "./Banner";

function DiaryHeader({
    themes,
    selectedThemes,
    setSelectedThemes,
    onlyRecipesLinked,
    setOnlyRecipesLinked
}) {
    return (
        <div>
            <Banner type="diary" />
            <DiaryFilteringWrap
                themes={themes}
                selectedThemes={selectedThemes}
                setSelectedThemes={setSelectedThemes}
                onlyRecipesLinked={onlyRecipesLinked}
                setOnlyRecipesLinked={setOnlyRecipesLinked}
            />
        </div>
    );
}

export default DiaryHeader;