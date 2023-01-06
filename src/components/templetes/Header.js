import styles from "./Header.module.css";
import bookmarkIcon from "../../assets/icons/bookmarkIcon.png"
import profileIcon from "../../assets/icons/profileIcon.png"

function Header() {
    return (
        <div className={styles.container}>
            <ul className={styles.nav}>
                <li>
                    <img src={bookmarkIcon} alt="북마크 아이콘" />
                </li>
                <li>
                    <img src={profileIcon} alt="프로필 아이콘" />
                </li>
            </ul>
        </div>
    );
}

export default Header;