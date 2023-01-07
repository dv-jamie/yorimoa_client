import styles from "./DiaryCard.module.css";
import bookmarkBlack from "../../assets/icons/bookmarkBlack.png"
import recipeLink from "../../assets/icons/recipeLink.png"
import diarySampleImage from "../../assets/images/diarySampleImage.png"
import profileSampleImage from "../../assets/images/profileSampleImage.png"

function DiaryCard() {
    const content = "오늘은 채소들로만 구성하여 볶아보았다. 버섯, 파프리카, 브로콜리, 토마토, 계란, 등등 정말 맛있었다. 그렇지만 지금은 배가 고프다 흑흑"
    const linesCount = content.split("\n").length

    return (
        <div className={styles.container}>
            <div className={styles.writer_wrap}>
                <div className={styles.writer}>
                    <img src={profileSampleImage} alt="유저 프로필 이미지" />
                    <span>Shakeit_Food</span>
                </div>
            </div>
            <div className={styles.image_wrap}>
                <img src={diarySampleImage} alt="레시피 썸네일 이미지" />
                <div className={styles.recipe_count}>
                    <img src={recipeLink} alt="연동 레시피 개수" />
                    <span>5</span>
                </div>
            </div>
            <div className={styles.content_wrap}>
                <div className={styles.icon_wrap}>
                    <img src={bookmarkBlack} alt="스크랩 아이콘" />
                    <img src={bookmarkBlack} alt="댓글 아이콘" />
                </div>
                <div className={styles.content}>
                    {content.length > 50 || linesCount > 1
                        ? content.substring(0, 50) + "..."
                        : content
                    }
                    <span className={styles.more_button}>
                        {content.length > 50 || linesCount > 1
                            ? "더 보기" : "닫기"
                        }
                    </span>
                </div>
                <p className={styles.date}>
                    2022.12.04
                </p>
            </div>
        </div>
    );
}

export default DiaryCard;