import styles from "./ThemeList.module.css";
import {
    SimpleColor
} from "../../assets/icons"

function ThemeList({ themes }) {
    return (
        <div className={styles.theme_list}>
            {themes.map(theme => {
                return (
                    <div key={theme.id} className={styles.theme}>
                        <img src={SimpleColor} alt={`${theme.name} 아이콘`} />
                        <span>{theme.name}</span>
                    </div>
                )
            })}
        </div>
    );
}

export default ThemeList;