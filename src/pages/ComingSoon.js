import { useNavigate } from "react-router-dom";
import { DiaryFill, ToqueFill } from "assets/icons";
import { ColorType } from "type";
import styles from "./ComingSoon.module.css";

function ComingSoon({ type }) {
    const navigate = useNavigate()

    switch (type) {
        case "diary":
            return (
                <div className={styles.container}>
                    <h3 className={styles.sub_title}>
                        <DiaryFill
                            width={24}
                            height={24}
                            fill={ColorType.MAIN_ORANGE}
                        />
                        <span>요리 일기</span>
                    </h3>
                    <h2 className={styles.title}>
                        COMING SOON!
                    </h2>
                    <div className={`${styles.image} ${styles.image_diary}`}></div>
                    <p className={styles.description}>
                        요리 일기를 기록하여<br />
                        나날이 요리 실력이 늘어나는<br />
                        경험 해보세요!
                    </p>
                    <button
                        className={styles.back_button}
                        onClick={() => navigate(-1)}
                    >
                        뒤로가기
                    </button>
                </div>
            );
        case "recipe":
            return (
                <div className={styles.container}>
                    <h3 className={styles.sub_title}>
                        <ToqueFill
                            width={24}
                            height={24}
                            fill={ColorType.MAIN_ORANGE}
                        />
                        <span>요리 레시피</span>
                    </h3>
                    <h2 className={styles.title}>
                        COMING SOON!
                    </h2>
                    <div className={`${styles.image} ${styles.image_recipe}`}></div>
                    <p className={styles.description}>
                        요리 레시피를 등록하여<br />
                        요리 친구들과 더 즐거운 요리를<br />
                        경험 해보세요!
                    </p>
                    <button
                        className={styles.back_button}
                        onClick={() => navigate(-1)}
                    >
                        뒤로가기
                    </button>
                </div>
            );
            
    }

}

export default ComingSoon;