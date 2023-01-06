import styles from "./Banner.module.css";

function Banner({ type }) {
    let style = "", title = "", subTitle = ""

    switch (type) {
        case 'diary':
            style = `${styles.container} ${styles.container_diary}`
            title = `요리 일기\n같이 공유해요`
            subTitle = '다른 사람들과 함께 공유해볼까요?'
            break
        case 'recipe':
            style = `${styles.container} ${styles.container_recipe}`
            title = `요리 레시피\n같이 공유해요`
            subTitle = '다른 사람들과 함께 공유해볼까요?'
            break
    }

    return (
        <div className={style}>
            <div className={styles.title_wrap}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.sub_title}>{subTitle}</p>
            </div>
        </div>
    );
}

export default Banner;