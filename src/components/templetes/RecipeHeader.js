import RecipeFilteringWrap from "../molecules/RecipeFilteringWrap";
import SearchBox from "../molecules/SearchBox";
import Banner from "./Banner";

function RecipeHeader({
    categories,
    themes,
    isModalShow,
    setIsModalShow,
    modalType,
    setModalType
}) {
    return (
        <div>
            <Banner type="recipe" />
            <SearchBox />
            <RecipeFilteringWrap
                categories={categories}
                themes={themes}
                isModalShow={isModalShow}
                setIsModalShow={setIsModalShow}
                modalType = {modalType}
                setModalType = {setModalType}
            />
        </div>
    );
}

export default RecipeHeader;