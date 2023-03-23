import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import RefrigeratorHeader from "components/templetes/RefrigeratorHeader";
import RefrigetraotrTable from "components/templetes/RefrigeratorTable";

function Refrigerator() {
    const size = 10

    const {
        keywordContext,
        pageContext,

        isTwoDepthBottomsheetShowContext,
        
        refrigeratorCategoriesContext,
        refrigeratorContext,
        selectedCategoryContext,
        getRefrigeratorsContext
    } = useOutletContext()
    const [keyword, setKeyword] = keywordContext
    const [page, setPage] = pageContext
    const [isTwoDepthBottomsheetShow] = isTwoDepthBottomsheetShowContext
    const [refrigeratorCategories] = refrigeratorCategoriesContext
    const [refrigerators, setRefrigerators] = refrigeratorContext
    const [selectedCategory, setSelectedCategory] = selectedCategoryContext
    const [getRefrigerators] = getRefrigeratorsContext

    useEffect(() => {
        getRefrigerators()
    }, [keyword, selectedCategory, isTwoDepthBottomsheetShow])

    return (
        <div>
            <RefrigeratorHeader
                categories={refrigeratorCategories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setKeyword={setKeyword}
            />
            <RefrigetraotrTable
                categories={refrigeratorCategories}
                getRefrigerators={getRefrigerators}
                refrigerators={refrigerators}
            />
        </div>
    );
}

export default Refrigerator;