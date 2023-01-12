import { ArrowDownOutline } from "../../assets/icons"
import { ColorType, ModalType } from "type";
import SelectButtonList from "./SelectButtonList";
import FilteringModal from "components/templetes/FilteringModal";
import styles from "./RecipeFilteringWrap.module.css";

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

    const clickSelectButtonWrap= () => {
        setModalType(ModalType.FILTERING_MODAL)
        setIsModalShow(current => !current)
    }

    return (
        <div className={styles.container}>
            <div
                className={styles.select_button_wrap}
                onClick={clickSelectButtonWrap}
            >
                <SelectButtonList selectItems={selectItems} />
            </div>
            <div className={styles.sorting_wrap}>
                <ArrowDownOutline
                    width={14}
                    height={14}
                    stroke={ColorType.SILVER}
                />
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