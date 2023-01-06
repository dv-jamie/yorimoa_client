import styles from "./DiaryList.module.css";
import DiaryCard from "../molecules/DiaryCard";
 
function DiaryList() {
    return (
        <div className={styles.container}>
            <DiaryCard />
            <DiaryCard />
        </div>
    );
}

export default DiaryList;