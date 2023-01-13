import dayjs from "dayjs";
import { useState } from "react";
import {
    BookmarkOutline,
    CommentOutline,
    ToqueOutline,
} from "../../assets/icons"
import { ColorType } from "type";
import styles from "./DiaryCard.module.css";

function DiaryCard({ diary }) {
    const { content } = diary
    const lines = content.split("\n")
    const standardLimit = 50
    const defaultLimit =
        content.length <= standardLimit && lines.length > 1
            ? lines[0].length
            : standardLimit

    const [contentLimit, setContentLimit] = useState(defaultLimit)

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
                    {content.substring(0, contentLimit)}
                    <span
                        className={
                            contentLimit === content.length
                            || content.length < defaultLimit
                                ? "hide"
                                : ""
                        }
                    >...</span>
                    <button
                        className={
                            contentLimit === content.length
                            || content.length < defaultLimit
                                ? `${styles.more_button} hide`
                                : `${styles.more_button}`
                        }
                        onClick={() => setContentLimit(content.length)}
                    >더 보기</button>
                </div>
                <p className={styles.date}>
                    {dayjs(diary.createdAt).format("YYYY.MM.DD")}
                </p>
            </div>
        </div>
    );
}

export default DiaryCard;