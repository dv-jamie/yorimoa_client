import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import RefrigeratorHeader from "components/templetes/RefrigeratorHeader";
import RefrigetraotrTable from "components/templetes/RefrigeratorTable";

function Refrigerator() {
    const { refrigeratorCategoriesContext, selectedCategoryContext } = useOutletContext()
    const [refrigeratorCategories] = refrigeratorCategoriesContext
    const [selectedCategory, setSelectedCategory] = selectedCategoryContext
    const [refrigerators, setRefrigerators] = useState([])
    const [keyword, setKeyword] = useState("")
    const [page, setPage] = useState(0)
    const size = 10

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
            <RefrigeratorHeader
                categories={refrigeratorCategories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
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