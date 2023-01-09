import styles from "./RecipeFilteringBox.module.css";
import { ArrowDown } from "../../assets/icons"

function FilteringBox() {
    const filterItem = {
        serving: "인원",
        time: "조리시간",
        level: "난이도",
        category: "카테고리",
        theme: "테마"
    }
    const sortingText = {
        createdAt: "최신 등록순",
        bookmarksCount: "스크랩 많은순",
        repliesCount: "댓글 많은순"
    }

    return (
        <div className={styles.container}>
            <ul className={styles.filter_item_wrap}>
                <li>
                    {filterItem.serving}
                </li>
                <li>
                    {filterItem.time}
                </li>
                <li>
                    {filterItem.level}
                </li>
                <li>
                    {filterItem.category}
                </li>
                <li>
                    {filterItem.theme}
                </li>
            </ul>
            <div className={styles.sorting_wrap}>
                <img src={ArrowDown} alt="정렬 아이콘" />
                <span>{sortingText.createdAt}</span>
            </div>
        </div>
    );
}

export default FilteringBox;