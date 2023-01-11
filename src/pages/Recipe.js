import { useOutletContext } from "react-router-dom";
import RecipeHeader from "../components/templetes/RecipeHeader";
import RecipeList from "../components/templetes/RecipeList";
import dummy from "../data.json";

function Recipe() {
    const { isModalShowContext, modalTypeContext } = useOutletContext()
    const [isModalShow, setIsModalShow] = isModalShowContext
    const [modalType, setModalType] = modalTypeContext

    return (
        <div>
            <RecipeHeader
                categories={dummy.categories}
                themes={dummy.themes}
                isModalShow={isModalShow}
                setIsModalShow={setIsModalShow}
                modalType = {modalType}
                setModalType = {setModalType}
            />
            <RecipeList recipes={dummy.recipes} />
        </div>
    );
}

export default Recipe;