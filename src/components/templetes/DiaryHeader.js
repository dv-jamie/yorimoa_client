import SearchBox from "components/molecules/SearchBox";
import Banner from "./Banner";

function DiaryHeader() {
    return (
        <div>
            <Banner type="diary" />
            <SearchBox type="diary" />
        </div>
    );
}

export default DiaryHeader;