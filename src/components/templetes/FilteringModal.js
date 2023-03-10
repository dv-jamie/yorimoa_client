import { ModalType } from "type";
import SelectButtonList from "components/molecules/SelectButtonList";
import ThemeList from "components/molecules/ThemeList";
import styles from "./FilteringModal.module.css";
 
function FilteringModal({
    categories,
    themes,
    selectedThemes,
    setSelectedThemes,
    isModalShow,
    modalType,
    setModalType
}) {
    const times = [
        { id: 1, name: "5분 이하", minTime: 0, maxTime: 5},
        { id: 2, name: "15분 이하", minTime: 6, maxTime: 15 },
        { id: 3, name: "30분 이하", minTime: 16, maxTime: 30 },
        { id: 4, name: "1시간 이하", minTime: 31, maxTime: 60 }
    ]

    const clickResetButton = () => {
        console.log("clickResetButton")
    }

    const clickApplyButton = () => {
        console.log("clickApplyButton")
    }

    return (
        <div className={isModalShow && modalType === ModalType.FILTERING_MODAL
            ? `${styles.container}`
            : `${styles.container} hide`
        }>
            <ul className={styles.item_wrap}>
                <li className={styles.range}>
                    <label>난이도</label>
                    <div>입문 ~ 고수</div>
                </li>
                <li className={styles.range}>
                    <label>인원</label>
                    <div>1인분 ~ 18인분</div>
                </li>
                <li className={styles.range}>
                    <label>조리시간</label>
                    <SelectButtonList
                        selectItems={times}
                        setModalType={setModalType}
                    />
                </li>
                <li className={styles.select_button}>
                    <label>카테고리</label>
                    <SelectButtonList
                        selectItems={categories}
                        setModalType={setModalType}
                    />
                </li>
                <li className={styles.icon_button}>
                    <label>테마</label>
                    <ThemeList
                        themes={themes}
                        selectedThemes={selectedThemes}
                        setSelectedThemes={setSelectedThemes}
                    />
                </li>
            </ul>
            <div className={styles.button_wrap}>
                <button
                    className={`${styles.button} ${styles.reset_button}`}
                    onClick={clickResetButton}
                    >
                    초기화
                </button>
                <button
                    className={`${styles.button} ${styles.apply_button}`}
                    onClick={clickApplyButton}
                >
                    적용하기
                </button>
            </div>
        </div>
    );
}

export default FilteringModal;