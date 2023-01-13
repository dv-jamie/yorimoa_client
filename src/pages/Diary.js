import axios from "axios";
import { useEffect, useState } from "react";
import DiaryHeader from "../components/templetes/DiaryHeader";
import DiaryList from "../components/templetes/DiaryList";

function Diary() {
    const size = 10

    const [themes, setThemes] = useState([])
    const [diaries, setDiaries] = useState([])
    const [selectedThemes, setSelectedThemes] = useState([])
    const [onlyRecipesLinked, setOnlyRecipesLinked] = useState(false)
    const [page, setPage] = useState(0)

    const getThemes = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/themes`)
        const themes = response.data
        const themeIds = Array(themes.length).fill().map((_, i) => i + 1)
        setThemes(themes)
        setSelectedThemes(themeIds)
    }

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
        console.log(diaries)
    }

    useEffect(() => {
        getThemes()
    }, [])
    
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