import DiaryFilteringWrap from "../molecules/DiaryFilteringWrap";
import Banner from "./Banner";

function DiaryHeader({ themes }) {
    return (
        <div>
            <Banner type="diary" />
            <DiaryFilteringWrap themes={themes}/>
        </div>
    );
}

export default DiaryHeader;