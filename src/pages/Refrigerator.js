import { useEffect, useState } from "react";
import dummy from "../data.json";
import RefrigeratorHeader from "components/templetes/RefrigeratorHeader";
import RefrigetraotrTable from "components/templetes/RefrigeratorTable";

function Refrigerator() {
    // 더미데이터
    const refrigeratorsDummy = dummy.refrigerators
    const categoriesDummy = dummy.categories.filter(category => {
        return category.type === "refrigerator"
    })

    const [refrigerators, setRefrigerators] = useState(refrigeratorsDummy)
    const [categories, setCategories] = useState(categoriesDummy)
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
                categories={categories}
                setKeyword={setKeyword}
            />
            <RefrigetraotrTable
                categories={categories}
                refrigerators={refrigerators}
                setRefrigerators={setRefrigerators}
            />
        </div>
    );
}

export default Refrigerator;