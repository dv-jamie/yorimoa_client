import styles from "./ThemeList.module.css";
import {
    Diet,
    OneFan,
    Simple,
    WithAlcohol
} from "../../assets/icons"
import { ColorType } from "type";
import { useState } from "react";

function ThemeList({ themes }) {
    const [selectedThemes, setSelectedThemes] = useState(defaultSelectedThemes)

    const clickThemeIcon = (id) => {
        const currentBoolean = selectedThemes.get(id)
        selectedThemes.set(id, !currentBoolean)
        setSelectedThemes(selectedThemes)
    }

    return (
        <div className={styles.theme_list}>
            {themes.map(theme => {
                const id = theme.id
                return (
                    <div
                        key={id}
                        className={styles.theme}
                        onClick={() => clickThemeIcon(id)}
                    >
                        {themeIcon[id]}
                        <span>{theme.name}</span>
                    </div>
                )
            })}
        </div>
    );
}

const themeIcon = {
    1: <Simple fill={ColorType.MAIN_ORANGE} />,
    2: <OneFan fill={ColorType.MAIN_ORANGE} />,
    3: <WithAlcohol fill={ColorType.MAIN_ORANGE} />,
    4: <Diet fill={ColorType.MAIN_ORANGE} />,
    5: <WithAlcohol fill={ColorType.MAIN_ORANGE} />,
    6: <WithAlcohol fill={ColorType.MAIN_ORANGE} />,
    7: <WithAlcohol fill={ColorType.MAIN_ORANGE} />,
    8: <WithAlcohol fill={ColorType.MAIN_ORANGE} />,
    9: <WithAlcohol fill={ColorType.MAIN_ORANGE} />,
    10: <WithAlcohol fill={ColorType.MAIN_ORANGE} />,
    11: <WithAlcohol fill={ColorType.MAIN_ORANGE} />,
    12: <WithAlcohol fill={ColorType.MAIN_ORANGE} />
}
const defaultSelectedThemes = new Map([
    [1, true],
    [2, true],
    [3, true],
    [4, true],
    [5, true],
    [6, true],
    [7, true],
    [8, true],
    [9, true],
    [10, true],
    [11, true],
    [12, true],
])

export default ThemeList;