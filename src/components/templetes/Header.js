import styles from "./Header.module.css";
import {
    BookmarkWhite,
    Person,
} from "../../assets/icons"

function Header() {
    return (
        <div className={styles.container}>
            <ul className={styles.nav}>
                <li>
                    <img src={BookmarkWhite} alt="북마크 아이콘" />
                </li>
                <li>
                    <img src={Person} alt="프로필 아이콘" />
                </li>
            </ul>
        </div>
    );
}

export default Header;