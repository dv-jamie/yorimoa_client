import SearchBox from "components/molecules/SearchBox";
import Banner from "./Banner";

function MemoHeader() {
    return (
        <div>
            <Banner type="memo" />
            <SearchBox type="memo" />
        </div>
    );
}

export default MemoHeader;