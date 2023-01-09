import DiaryHeader from "../components/templetes/DiaryHeader";
import DiaryList from "../components/templetes/DiaryList";
import dummy from "../data.json";

function Diary() {
    return (
        <div>
            <DiaryHeader themes={dummy.themes} />
            <DiaryList diaries={dummy.diaries} />
        </div>
    );
}

export default Diary;