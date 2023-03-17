import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import RefrigetraotrTable from "components/templetes/RefrigeratorTable";
import Banner from "components/templetes/Banner";
import SearchBox from "components/molecules/SearchBox";
import RefrigeratorFilteringWrap from "components/molecules/RefrigeratorFilteringWrap";
import styles from "../components/templetes/RefrigeratorHeader.module.css";

function RefrigeratorEdit() {
    const size = 10

    const {
        bottomsheetTypeContext,
        isBottomsheetShowContext,
        selectedCategoryContext,
        refrigeratorCategoriesContext,
        refrigeratorContext,
        getRefrigeratorsContext,
        keywordContext,
        pageContext
    } = useOutletContext()
    const [bottomsheetType, setBottomsheetType] = bottomsheetTypeContext
    const [isBottomsheetShow, setIsBottomsheetShow] = isBottomsheetShowContext
    const [selectedCategory, setSelectedCategory] = selectedCategoryContext
    const [refrigeratorCategories] = refrigeratorCategoriesContext
    const [refrigerators, setRefrigerators] = refrigeratorContext
    const [getRefrigerators] = getRefrigeratorsContext
    const [keyword, setKeyword] = keywordContext
    const [page, setPage] = pageContext
    
    useEffect(() => {
        getRefrigerators()
    }, [selectedCategory])

    return (
        <div>
            <Banner type="refrigeratorEdit" />
            <SearchBox
                type="refrigerator"
                setKeyword={setKeyword}
            />
            <div className={styles.category_wrap}>
                <RefrigeratorFilteringWrap
                    categories={refrigeratorCategories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </div>
            <RefrigetraotrTable
                setBottomsheetType={setBottomsheetType}
                isBottomsheetShow={isBottomsheetShow}
                setIsBottomsheetShow={setIsBottomsheetShow}
                
                categories={refrigeratorCategories}
                
                refrigerators={refrigerators}
                setRefrigerators={setRefrigerators}
                getRefrigerators={getRefrigerators}
                setPage={setPage}
            />
        </div>
    );
}

export default RefrigeratorEdit;