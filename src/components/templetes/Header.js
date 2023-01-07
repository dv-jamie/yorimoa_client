import styles from "./Header.module.css";
import bookmarkWhite from "../../assets/icons/bookmarkWhite.png"
import profile from "../../assets/icons/profile.png"

function Header() {
    return (
        <div className={styles.container}>
            <ul className={styles.nav}>
                <li>
                    <img src={bookmarkWhite} alt="북마크 아이콘" />
                </li>
                <li>
                    <img src={profile} alt="프로필 아이콘" />
                </li>
            </ul>
        </div>
    );
}

export default Header;