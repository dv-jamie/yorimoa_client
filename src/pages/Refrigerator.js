import { useEffect, useState } from "react";
import dummy from "../data.json";
import RefrigeratorHeader from "components/templetes/RefrigeratorHeader";
import RefrigetraotrTable from "components/templetes/RefrigeratorTable";
import { useOutletContext } from "react-router-dom";

function Refrigerator() {
    // 더미데이터
    const refrigeratorsDummy = dummy.refrigerators

    const { isModalShowContext, refrigeratorCategoriesContext } = useOutletContext()
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
            <RefrigeratorHeader
                categories={refrigeratorCategories}
                setKeyword={setKeyword}
            />
            <RefrigetraotrTable
                categories={refrigeratorCategories}
                refrigerators={refrigerators}
                setRefrigerators={setRefrigerators}
            />
        </div>
    );
}

export default Refrigerator;