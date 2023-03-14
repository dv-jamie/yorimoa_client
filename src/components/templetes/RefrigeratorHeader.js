import Banner from "./Banner";
import SearchBox from "components/molecules/SearchBox";
import RefrigeratorFilteringWrap from "components/molecules/RefrigeratorFilteringWrap";
import styles from "./RefrigeratorHeader.module.css";

function RefrigeratorHeader({
    categories,
    selectedCategory,
    setSelectedCategory,
    setKeyword
}) {
    return (
        <div>
            <Banner type="refrigerator" />
            <SearchBox
                type="refrigerator"
                setKeyword={setKeyword}
            />
            <div className={styles.category_wrap}>
                <RefrigeratorFilteringWrap
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </div>
        </div>
    );
}

export default RefrigeratorHeader;