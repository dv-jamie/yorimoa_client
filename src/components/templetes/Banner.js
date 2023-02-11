import styles from "./Banner.module.css";

function Banner({ type }) {
    let style = "", title = "", subTitle = ""

    switch (type) {
        case 'diary':
            style = `${styles.container} ${styles.container_diary}`
            title = `요리 친구가 쓴\n요리 일기`
            subTitle = '요리 친구들이 남긴 요리 기록들'
            break
        case 'recipe':
            style = `${styles.container} ${styles.container_recipe}`
            title = `요리 레시피\n같이 공유해요`
            subTitle = '다른 사람들과 함께 공유해볼까요?'
            break
        case 'refrigerator':
            style = `${styles.container} ${styles.container_memo}`
            title = `냉장고에 있는\n재료 적어두세요!`
            subTitle = '재료명을 클릭하면 레시피를 볼 수 있어요'
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