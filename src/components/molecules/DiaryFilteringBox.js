import styles from "./DiaryFilteringBox.module.css";
import simpleIcon from "../../assets/icons/simpleIcon.png"
import checkIcon from "../../assets/icons/checkIcon.png"

function DiaryFilteringBox() {
    return (
        <div className={styles.container}>
            <div className={styles.theme_wrap}>
                <div className={styles.theme}>
                    <img src={simpleIcon} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simpleIcon} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simpleIcon} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simpleIcon} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simpleIcon} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simpleIcon} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simpleIcon} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simpleIcon} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simpleIcon} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simpleIcon} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simpleIcon} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
                <div className={styles.theme}>
                    <img src={simpleIcon} alt="초간단 아이콘" />
                    <span>초간단</span>
                </div>
            </div>
            <div className={styles.check_wrap}>
                <div className={styles.check_area}>
                    <img src={checkIcon} alt="체크 아이콘" />
                    <span>레시피 있는 일기만 보기</span>
                </div>
            </div>
        </div>
    );
}

export default DiaryFilteringBox;