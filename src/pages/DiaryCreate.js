import styles from "./DiaryCreate.module.css"

function DiaryCreate() {
    const clickCompleteButton = () => {
        console.log("complete")
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <i className={styles.back_icon}>←</i>
                <button
                    onClick={clickCompleteButton}
                >완료</button>
            </header>
            <h2>
                오늘의 요리를 기록하고<br />
                공유해보세요!
            </h2>
            <div className={styles.image_wrap}>
                <img alt="레시피 대표 이미지" />
                <i>카메라 아이콘</i>
            </div>
            <textarea
                className={styles.textarea}
                placeholder="요리를 소개해주세요 (100자 내외)"
            />
            <p className={styles.guide}>
                [작성 Tip]<br />
                - 다른 사람들에게 보여주고 싶은 요리가 있나요?<br />
                - 요리를 하다가 발견한 꿀팁이 있나요?<br />
                - 실패는 성공의 어머니! 다음에는 꼭 성공해봐요.
            </p>
        </div>
    );
}

export default DiaryCreate;