import styles from "./Proflie.module.css";
import dummy from "../data.json"

function Profile() {
    const user = dummy.users[0]

    return (
        <div>
            <div className={styles.user_info_wrap}>
                <div className={styles.user_image_wrap}>
                    <img src={`${process.env.PUBLIC_URL}${user.image}`} alt="유저 프로필 이미지" />
                </div>
                <div className={styles.user_info}>
                    <div className={styles.nick}>{user.nick}</div>
                    <p className={styles.introduction}>{user.introduction}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;