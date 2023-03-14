import styles from "./SelectButtonList.module.css";

function SelectButtonList({
    selectItems,
    selectedCategory,
    setSelectedCategory
}) {
    const clickItem = (id) => {
        setSelectedCategory(
            id === selectedCategory ? null : id
        )
    }

    return (
        <ul className={styles.select_button_list}>
            {selectItems.map(item => {
                return (
                    <li
                        key={item.id}
                        className={item.id === selectedCategory
                            ? `${styles.item} ${styles.selected}`
                            : `${styles.item}`
                        }
                        onClick={() => clickItem(item.id)}
                    >
                        <span>{item.name}</span>
                    </li>
                )
            })}
        </ul>
    );
}

export default SelectButtonList;