import styles from "./SearchBox.module.css";
import { SearchOutline } from "../../assets/icons"
import { ColorType } from "type";

function SearchBox({ type }) {
    let placeholder = type === "diary"
        ? "소통하려는 요리 친구를 검색해보세요!"
        : "원하는 레시피를 검색해보세요!"

    return (
        <div className={styles.container}>
            <div className={styles.search_wrap}>
                <input
                    placeholder={placeholder}
                    spellCheck="false"
                />
                <SearchOutline
                    width={24}
                    height={24}
                    stroke={ColorType.GRAY}
                />
            </div>
        </div>
    );
}

export default SearchBox;