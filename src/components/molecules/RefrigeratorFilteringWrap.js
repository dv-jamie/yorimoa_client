import SelectButtonList from "./SelectButtonList";
import styles from "./RefrigeratorFilteringWrap.module.css";

function RefrigeratorFilteringWrap({
    categories
}) {
    const clickSelectButtonWrap= () => {
        console.log("click")
    }

    return (
        <div className={styles.container}>
            <div
                className={styles.select_button_wrap}
                onClick={clickSelectButtonWrap}
            >
                <SelectButtonList selectItems={categories} />
            </div>
        </div>
    );
}

export default RefrigeratorFilteringWrap;