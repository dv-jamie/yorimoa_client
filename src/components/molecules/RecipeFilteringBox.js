import styles from "./RecipeFilteringBox.module.css";
import arrowDownIcon from "../../assets/icons/arrowDownIcon.png"

function FilteringBox() {
    const sortingText = {
        createdAt: "최신 등록순",
        bookmarksCount: "스크랩 많은순",
        repliesCount: "댓글 많은순"
    }

    return (
        <div className={styles.container}>
            <ul className={styles.filter_item_wrap}>
                <li>인원</li>
                <li>조리시간</li>
                <li>난이도</li>
                <li>카테고리</li>
                <li>테마</li>
            </ul>
            <div className={styles.sorting_wrap}>
                <img src={arrowDownIcon} alt="정렬 아이콘" />
                <span>{sortingText.createdAt}</span>
            </div>
        </div>
    );
}

export default FilteringBox;