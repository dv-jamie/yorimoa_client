import styles from "./Quit.module.css";

function Quit() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                정말 탈퇴를 원하시나요?<br />
                어떤 부분이 불편하셨나요?
            </h2>
        </div>
    );
}

export default Quit;