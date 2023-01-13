import { ColorType } from "type";
import {
    BaBy,
    Diet,
    Etc,
    Guest,
    Healthy,
    Holiday,
    HomeParty,
    OneFan,
    Packed,
    Simple,
    Snack,
    WithAlcohol
} from "../../assets/icons"
import styles from "./ThemeList.module.css";

function ThemeList({
    themes,
    selectedThemes,
    setSelectedThemes
}) {
    const clickThemeIcon = (id) => {
        if(selectedThemes.includes(id)) {
            setSelectedThemes(selectedThemes.filter(theme => theme !== id))
        } else {
            setSelectedThemes(prev => [...prev, id])
        }
    }
    
    const themeIconFill = (themeId) => {
        return selectedThemes.includes(themeId)
            ? ColorType.MAIN_ORANGE
            : ColorType.GAINSBRO
    }

    const themeIcon = {
        1: <Simple fill={themeIconFill(1)} />,
        2: <OneFan fill={themeIconFill(2)} />,
        3: <WithAlcohol fill={themeIconFill(3)} />,
        4: <Diet fill={themeIconFill(4)} />,
        5: <Healthy fill={themeIconFill(5)} />,
        6: <Snack fill={themeIconFill(6)} />,
        7: <Packed fill={themeIconFill(7)} />,
        8: <Guest fill={themeIconFill(8)} />,
        9: <HomeParty fill={themeIconFill(9)} />,
        10: <Holiday fill={themeIconFill(10)} />,
        11: <BaBy fill={themeIconFill(11)} />,
        12: <Etc fill={themeIconFill(12)} />
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

export default ThemeList;