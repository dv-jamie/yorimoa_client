import styles from "./DiaryFilteringBox.module.css";
import simple from "../../assets/icons/theme/simpleColor.png"
import checkbox from "../../assets/icons/checkbox.png"

function DiaryFilteringBox() {
    return (
        <div className={styles.container}>
            <div className={styles.theme_wrap}>
                <div className={styles.theme}>
                    <img src={simple} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simple} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simple} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simple} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simple} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simple} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simple} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simple} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simple} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simple} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simple} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simple} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
            </div>
            <div className={styles.check_wrap}>
                <div className={styles.check_area}>
                    <img src={checkbox} alt="체크 아이콘" />
                    <span>레시피 있는 일기만 보기</span>
                </div>
            </div>
        </div>
    );
}

export default DiaryFilteringBox;