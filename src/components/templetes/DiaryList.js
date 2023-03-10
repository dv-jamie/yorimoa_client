import styles from "./DiaryList.module.css";
import DiaryCard from "../molecules/DiaryCard";
 
function DiaryList({ diaries }) {
    return (
        <div className={styles.container}>
            {diaries.map(diary => {
                return <DiaryCard key={diary.id} diary={diary} />
            })}
        </div>
    );
}

export default DiaryList;