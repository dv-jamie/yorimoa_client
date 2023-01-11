import styles from "./SelectButtonList.module.css";

function SelectButtonList({
    selectItems
}) {
    return (
        <ul className={styles.select_button_list}>
            {selectItems.map(item => {
                return (
                    <li
                        key={item.id}
                        className={styles.item}
                    >
                        <span>{item.name}</span>
                    </li>
                )
            })}
        </ul>
    );
}

export default SelectButtonList;