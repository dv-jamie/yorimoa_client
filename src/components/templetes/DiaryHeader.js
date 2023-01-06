import DiaryFilteringBox from "../molecules/DiaryFilteringBox";
import Banner from "./Banner";

function DiaryHeader() {
    return (
        <div>
            <Banner type="diary" />
            <DiaryFilteringBox />
        </div>
    );
}

export default DiaryHeader;