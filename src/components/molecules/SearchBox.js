import { useState } from "react";
import { SearchOutline } from "../../assets/icons"
import { ColorType } from "type";
import styles from "./SearchBox.module.css";

function SearchBox({ type, setKeyword }) {
    let placeholder = ""
    switch (type) {
        case "diary":
            placeholder = "소통하려는 요리 친구를 검색해보세요"
            break
        case "recipe":
            placeholder = "원하는 레시피를 검색해보세요"
            break
        case "refrigerator":
            placeholder = "재료를 검색해보세요"
            break
    }

    const [InputText, setInputText] = useState("")

    const clickSearchButton = () => {
        setKeyword(InputText)
    }

    return (
        <div className={styles.container}>
            <div className={styles.search_wrap}>
                <input
                    placeholder={placeholder}
                    spellCheck="false"
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button
                    className={styles.search_button}
                    onClick={clickSearchButton}
                >
                    <SearchOutline
                        width={24}
                        height={24}
                        stroke={ColorType.GRAY}
                    />
                </button>
            </div>
        </div>
    );
}

export default SearchBox;