import { toggleModalShow } from "common";
import { ModalType } from "type";
import styles from "./SelectButtonList.module.css";

function SelectButtonList({
    selectItems,
    isModalShow,
    setIsModalShow,
    setModalType
}) {
    const clickSelectItem = () => {
        setModalType(ModalType.FILTERING_MODAL)
        toggleModalShow(isModalShow, setIsModalShow)
    }

    return (
        <ul className={styles.select_button_list}>
            {selectItems.map(item => {
                return (
                    <li
                        key={item.id}
                        className={styles.item}
                        onClick={clickSelectItem}
                    >
                        <span>{item.name}</span>
                    </li>
                )
            })}
        </ul>
    );
}

export default SelectButtonList;