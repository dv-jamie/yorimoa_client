import styles from "./RecipeFilteringWrap.module.css";
import SelectButtonList from "./SelectButtonList";
import { ArrowDown } from "../../assets/icons"
import FilteringModal from "components/templetes/FilteringModal";

function RecipeFilteringWrap({
    categories,
    themes,
    isModalShow,
    setIsModalShow,
    modalType,
    setModalType
}) {
    const selectItems = [
        { id: 1, name: "인원" },
        { id: 2, name: "조리시간" },
        { id: 3, name: "난이도" },
        { id: 4, name: "카테고리" },
        { id: 5, name: "테마" },
    ]
    const sortingText = {
        createdAt: "최신 등록순",
        bookmarksCount: "스크랩 많은순",
        repliesCount: "댓글 많은순"
    }

    return (
        <div className={styles.container}>
            <div className={styles.select_button_wrap}>
                <SelectButtonList
                    selectItems={selectItems}
                    isModalShow={isModalShow}
                    setIsModalShow={setIsModalShow}
                    modalType={modalType}
                    setModalType={setModalType}
                />
            </div>
            <div className={styles.sorting_wrap}>
                <img src={ArrowDown} alt="정렬 아이콘" />
                <span>{sortingText.createdAt}</span>
            </div>
            <FilteringModal
                categories={categories}
                themes={themes}
                isModalShow={isModalShow}
                modalType={modalType}
                setModalType={setModalType}
            />
        </div>
    );
}

export default RecipeFilteringWrap;