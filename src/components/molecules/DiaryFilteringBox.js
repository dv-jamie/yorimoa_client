import styles from "./DiaryFilteringBox.module.css";
import {
    BabyColor,
    DietColor,
    EtcColor,
    GuestColor,
    HealthColor,
    HomePartyColor,
    OnePanColor,
    PackedColor,
    SimpleColor,
    SnackColor,
    WithAlcoholColor,
    Checkbox,
} from "../../assets/icons"

function DiaryFilteringBox({ themes }) {
    return (
        <div className={styles.container}>
            <div className={styles.theme_wrap}>
                {themes.map(theme => {
                    return (
                        <div className={styles.theme}>
                            <img src={SimpleColor} alt={`${theme.name} 아이콘`} />
                            <span>{theme.name}</span>
                        </div>
                    )
                })}
            </div>
            <div className={styles.check_wrap}>
                <div className={styles.check_area}>
                    <img src={Checkbox} alt="체크 아이콘" />
                    <span>레시피 있는 일기만 보기</span>
                </div>
            </div>
        </div>
    );
}

export default DiaryFilteringBox;