import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import RefrigeratorHeader from "components/templetes/RefrigeratorHeader";
import RefrigetraotrTable from "components/templetes/RefrigeratorTable";

function Refrigerator() {
    const { refrigeratorCategoriesContext, selectedRefrigeratorCategoriesContext } = useOutletContext()
    const [refrigeratorCategories] = refrigeratorCategoriesContext
    const [selectedRefrigeratorCategories, setSelectedRefrigeratorCategories] = selectedRefrigeratorCategoriesContext
    const [refrigerators, setRefrigerators] = useState([])
    const [keyword, setKeyword] = useState("")
    const [page, setPage] = useState(0)
    const size = 10

    const getRefrigerators = async () => {
        const { data: getRefrigerators } = await axios.get(`${process.env.REACT_APP_API_URL}/refrigerators`, {
            params: {
                categoryIds: JSON.stringify(selectedRefrigeratorCategories),
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
    }, [])

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