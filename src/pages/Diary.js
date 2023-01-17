import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import DiaryHeader from "../components/templetes/DiaryHeader";
import DiaryList from "../components/templetes/DiaryList";

function Diary() {
    const size = 10

    const { themesContext, selectedThemesContext } = useOutletContext()
    const [themes] = themesContext
    const [selectedThemes, setSelectedThemes] = selectedThemesContext

    const [diaries, setDiaries] = useState([])
    const [onlyRecipesLinked, setOnlyRecipesLinked] = useState(false)
    const [page, setPage] = useState(0)

    const getDiaries = async () => {
        if(selectedThemes.length === 0) return

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/diaries`, {
            params: {
                themeIds: JSON.stringify(selectedThemes),
                onlyRecipesLinked,
                size,
                page
            }
        })
        const diaries = response.data.data
        setDiaries(diaries)
    }
    
    useEffect(() => {
        getDiaries()
    }, [selectedThemes, onlyRecipesLinked])

    return (
        <div>
            <DiaryHeader
                themes={themes}
                selectedThemes={selectedThemes}
                setSelectedThemes={setSelectedThemes}
                onlyRecipesLinked={onlyRecipesLinked}
                setOnlyRecipesLinked={setOnlyRecipesLinked}
            />
            <DiaryList diaries={diaries} />
        </div>
    );
}

export default Diary;