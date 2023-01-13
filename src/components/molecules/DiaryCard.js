import dayjs from "dayjs";
import {
    BookmarkOutline,
    CommentOutline,
    ToqueOutline,
} from "../../assets/icons"
import { ColorType } from "type";
import styles from "./DiaryCard.module.css";

function DiaryCard({ diary }) {
    const { content } = diary
    const linesCount = content.split("\n").length

    return (
        <div className={styles.container}>
            <div className={styles.writer_wrap}>
                <div className={styles.writer}>
                    <div className={styles.writer_image_wrap}>
                        <img src={diary.writer.image} alt="유저 프로필 이미지" />
                    </div>
                    <span>{diary.writer.nick}</span>
                </div>
            </div>
            <div className={styles.recipe_image_wrap}>
                <img src={diary.images[0].url} alt="레시피 썸네일 이미지" />
                <div className={
                    diary.recipesCount === 0
                    ? `${styles.recipe_count} hide`
                    : `${styles.recipe_count}`
                }>
                    <ToqueOutline
                        width={14}
                        height={14}
                        stroke={ColorType.DIM_GRAY}
                    />
                    <span>{diary.recipesCount}</span>
                </div>
            </div>
            <div className={styles.content_wrap}>
                <ul className={styles.icon_wrap}>
                    <li>
                        <BookmarkOutline
                            width={20}
                            height={20}
                            stroke="black"
                        />
                        <span>{diary.bookmarksCount}</span>
                    </li>
                    <li>
                        <CommentOutline width={20} height={20} />
                        <span>{diary.repliesCount}</span>
                    </li>
                </ul>
                <div className={styles.content}>
                    {content.length > 50 || linesCount > 1
                        ? content.substring(0, 50) + "..."
                        : content
                    }
                    <span className={styles.more_button}>
                        {content.length > 50 || linesCount > 1
                            ? "더 보기" : ""
                        }
                    </span>
                </div>
                <p className={styles.date}>
                    {dayjs(diary.createdAt).format("YYYY.MM.DD")}
                </p>
            </div>
        </div>
    );
}

export default DiaryCard;