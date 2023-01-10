import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import {
    DiaryMono,
    PencilMono,
    ToqueMono
} from "../../assets/icons"

function Nav({ isModalShow, setIsModalShow }) {
    const clickUploadButton = () => {
        isModalShow === true
            ? setIsModalShow(false)
            : setIsModalShow(true)
    }

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
                <li
                    className={isModalShow
                        ? `${styles.upload_button} overlap`
                        :`${styles.upload_button}`
                    }
                    onClick={clickUploadButton}
                >
                    <div className={styles.icon}>
                        <img src={PencilMono} alt="업로드 링크 아이콘" />
                    </div>
                    <span className={styles.icon_name}>업로드</span>
                    <ul className={isModalShow
                            ? `${styles.selectbox_create}`
                            : `${styles.selectbox_create} hide`
                    }>
                        <li>
                            <Link to='/diary/create'>요리일기 작성하기</Link>
                        </li>
                        <li>
                            <Link to='/recipe/create'>레시피 작성하기</Link>
                        </li>
                        <li>
                            <button>X</button>
                        </li>
                    </ul>
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
