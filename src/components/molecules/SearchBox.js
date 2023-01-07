import styles from "./SearchBox.module.css";
import search from "../../assets/icons/search.png"

function SearchBox() {
    return (
        <div className={styles.container}>
            <div className={styles.search_wrap}>
                <input
                    placeholder="원하는 레시피를 검색해보세요"
                    spellcheck="false"
                />
                <img src={search} alt="검색 아이콘" />
            </div>
        </div>
    );
}

export default SearchBox;