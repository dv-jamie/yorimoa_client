import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import RefrigetraotrTable from "components/templetes/RefrigeratorTable";
import Banner from "components/templetes/Banner";
import SearchBox from "components/molecules/SearchBox";
import RefrigeratorFilteringWrap from "components/molecules/RefrigeratorFilteringWrap";
import styles from "../components/templetes/RefrigeratorHeader.module.css";

function RefrigeratorEdit() {
    const size = 10

    const {
        refrigeratorCategoriesContext,
        selectedCategoryContext,
        bottomsheetTypeContext,
        isBottomsheetShowContext
    } = useOutletContext()
    const [bottomsheetType, setBottomsheetType] = bottomsheetTypeContext
    const [isBottomsheetShow, setIsBottomsheetShow] = isBottomsheetShowContext
    const [refrigeratorCategories] = refrigeratorCategoriesContext
    const [selectedCategory, setSelectedCategory] = selectedCategoryContext

    const [refrigerators, setRefrigerators] = useState([])
    const [keyword, setKeyword] = useState("")
    const [page, setPage] = useState(0)

    const getRefrigerators = async () => {
        const { data: getRefrigerators } = await axios.get(`${process.env.REACT_APP_API_URL}/refrigerators`, {
            params: {
                categoryId: selectedCategory,
                keyword,
                size,
                page
            }
        })

        const refrigerators = getRefrigerators.data.list
        setRefrigerators(refrigerators)
    }
    
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
                categories={refrigeratorCategories}
                getRefrigerators={getRefrigerators}
                refrigerators={refrigerators}
                setRefrigerators={setRefrigerators}
                setBottomsheetType={setBottomsheetType}
                isBottomsheetShow={isBottomsheetShow}
                setIsBottomsheetShow={setIsBottomsheetShow}
            />
        </div>
    );
}

export default RefrigeratorEdit;