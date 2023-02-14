import {
    DeleteOutline,
    HeadsetOutline,
    PowerOutline,
    QuitOutline
} from "assets/icons";
import { Link } from "react-router-dom";
import styles from "./Setting.module.css";

function Setting() {
    return (
        <div className={styles.container}>
            <ul className={styles.list_wrap}>
                <li className={styles.list_item}>
                    <PowerOutline />
                    <span>로그아웃</span>
                </li>
                <li className={styles.list_item}>
                    <HeadsetOutline />
                    <Link to="/">
                        <span>문의하기</span>
                    </Link>
                </li>
                <li className={styles.list_item}>
                    <DeleteOutline />
                    <Link to="/reset">
                        <span>데이터 초기화</span>
                    </Link>
                </li>
                <li className={styles.list_item}>
                    <QuitOutline />
                    <Link to="/quit">
                        <span>탈퇴하기</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Setting;