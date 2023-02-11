import Banner from "./Banner";
import SearchBox from "components/molecules/SearchBox";
import RefrigeratorFilteringWrap from "components/molecules/RefrigeratorFilteringWrap";

function RefrigeratorHeader({ categories, setKeyword }) {
    return (
        <div>
            <Banner type="refrigerator" />
            <SearchBox
                type="refrigerator"
                setKeyword={setKeyword}
            />
            <RefrigeratorFilteringWrap
                categories={categories}
            />
        </div>
    );
}

export default RefrigeratorHeader;