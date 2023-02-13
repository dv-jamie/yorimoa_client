import { HeadsetOutline, PowerOutline, QuitOutline } from "assets/icons";
import styles from "./Setting.module.css";

function Setting() {
    return (
        <div className={styles.container}>
            <ul className={styles.list_wrap}>
                <li>
                    <PowerOutline />
                    <span>로그아웃</span>
                </li>
                <li>
                    <HeadsetOutline />
                    <span>문의하기</span>
                </li>
                <li>
                    <QuitOutline />
                    <span>탈퇴하기</span>
                </li>
            </ul>
        </div>
    );
}

export default Setting;