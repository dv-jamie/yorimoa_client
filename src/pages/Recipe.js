import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import { RecipeOrderType } from "type";
import RecipeHeader from "../components/templetes/RecipeHeader";
import RecipeList from "../components/templetes/RecipeList";
import dummy from "../data.json";

function Recipe() {
    const size = 10

    const {
        themesContext,
        selectedThemesContext,
        isModalShowContext,
        modalTypeContext,
    } = useOutletContext()
    const [themes] = themesContext
    const [selectedThemes, setSelectedThemes] = selectedThemesContext
    const [isModalShow, setIsModalShow] = isModalShowContext
    const [modalType, setModalType] = modalTypeContext
    
    const [recipes, Setrecipes] = useState([])
    const [page, setPage] = useState(0)

    const getRecipes = async () => {
        // if(selectedThemes.length === 0) return

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/recipes`, {
            params: {
                minServing: 1,
                maxServing: 20,
                minTime: 5,
                maxTime: 100,
                minLevel: 1,
                maxLevel: 4,
                categoryIds: JSON.stringify([1, 2]),
                themeIds: JSON.stringify(selectedThemes),
                keyword: null,
                orderBy: RecipeOrderType.CREATED_AT,
                page,
                size
            }
        })
        const recipes = response.data.data.list
        Setrecipes(recipes)
    }
    
    useEffect(() => {
        getRecipes()
    }, [])

    return (
        <div>
            <RecipeHeader
                categories={dummy.categories}
                themes={themes}
                selectedThemes={selectedThemes}
                setSelectedThemes={setSelectedThemes}
                isModalShow={isModalShow}
                setIsModalShow={setIsModalShow}
                modalType = {modalType}
                setModalType = {setModalType}
            />
            <RecipeList recipes={recipes} />
        </div>
    );
}

export default Recipe;