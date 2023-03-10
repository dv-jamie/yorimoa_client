import RecipeFilteringWrap from "../molecules/RecipeFilteringWrap";
import SearchBox from "../molecules/SearchBox";
import Banner from "./Banner";

function RecipeHeader({
    categories,
    themes,
    selectedThemes,
    setSelectedThemes,
    isModalShow,
    setIsModalShow,
    modalType,
    setModalType
}) {
    return (
        <div>
            <Banner type="recipe" />
            <SearchBox type="recipe" />
            <RecipeFilteringWrap
                categories={categories}
                themes={themes}
                selectedThemes={selectedThemes}
                setSelectedThemes={setSelectedThemes}
                isModalShow={isModalShow}
                setIsModalShow={setIsModalShow}
                modalType = {modalType}
                setModalType = {setModalType}
            />
        </div>
    );
}

export default RecipeHeader;