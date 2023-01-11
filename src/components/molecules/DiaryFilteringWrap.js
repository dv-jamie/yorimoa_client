import styles from "./DiaryFilteringWrap.module.css";
import {
    Checkbox
} from "../../assets/icons"
import ThemeList from "./ThemeList";

function DiaryFilteringWrap({ themes }) {
    return (
        <div className={styles.container}>
            <div className={styles.theme_wrap}>
                <ThemeList themes={themes}/>
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

export default DiaryFilteringWrap;