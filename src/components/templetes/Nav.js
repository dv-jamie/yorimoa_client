import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import {
    DiaryMono,
    PencilMono,
    ToqueMono
} from "../../assets/icons"

function Nav() {
    return (
        <div className={styles.container}>
            <ul>
                <li>
                    <Link to='/diary'>
                        <div className={styles.icon}>
                            <img src={DiaryMono} alt="요리일기 링크 아이콘" />
                        </div>
                        <span className={styles.icon_name}>요리일기</span>
                    </Link>
                </li>
                <li>
                    <div className={styles.icon}>
                        <img src={PencilMono} alt="업로드 링크 아이콘" />
                    </div>
                    <span className={styles.icon_name}>업로드</span>
                </li>
                <li>
                    <Link to='/recipe'>
                        <div className={styles.icon}>
                            <img src={ToqueMono} alt="레시피 링크 아이콘" />
                        </div>
                        <span className={styles.icon_name}>레시피</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
