import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import RefrigetraotrTable from "components/templetes/RefrigeratorTable";
import Banner from "components/templetes/Banner";
import SearchBox from "components/molecules/SearchBox";
import RefrigeratorFilteringWrap from "components/molecules/RefrigeratorFilteringWrap";
import styles from "../components/templetes/RefrigeratorHeader.module.css";

import dummy from "../data.json";

function RefrigeratorEdit() {
    // 더미데이터
    const refrigeratorsDummy = dummy.refrigerators

    const {
        refrigeratorCategoriesContext,
        bottomsheetTypeContext,
        isBottomsheetShowContext
    } = useOutletContext()
    const [bottomsheetType, setBottomsheetType] = bottomsheetTypeContext
    const [isBottomsheetShow, setIsBottomsheetShow] = isBottomsheetShowContext
    const [refrigeratorCategories] = refrigeratorCategoriesContext
    const [refrigerators, setRefrigerators] = useState(refrigeratorsDummy)
    const [keyword, setKeyword] = useState("")
    // const [page, setPage] = useState(0)

    // const getRefrigerators = async () => {
    //     // if(selectedThemes.length === 0) return

    //     const response = await axios.get(`${process.env.REACT_APP_API_URL}/refrigerators`, {
    //         params: {
    //             themeIds: JSON.stringify(selectedThemes),
    //             onlyRecipesLinked,
    //             size,
    //             page
    //         }
    //     })
    //     const refrigerators = response.data.data
    //     setRefrigerators(diaries)
    // }
    
    // useEffect(() => {
    //     getRefrigerators()
    // }, [selectedThemes])

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
                />
            </div>
            <RefrigetraotrTable
                categories={refrigeratorCategories}
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