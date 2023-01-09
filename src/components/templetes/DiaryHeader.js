import DiaryFilteringBox from "../molecules/DiaryFilteringBox";
import Banner from "./Banner";

function DiaryHeader({ themes }) {
    return (
        <div>
            <Banner type="diary" />
            <DiaryFilteringBox themes={themes}/>
        </div>
    );
}

export default DiaryHeader;