import { Link, useLocation } from "react-router-dom";
import {
    BookmarkOutline,
} from "../../assets/icons"
import styles from "./Header.module.css";

function Header() {
    const location = useLocation()
    const pathname = location.pathname

    switch (pathname) {
        case "/memo":
            return (
                <div className={styles.container}>
                    <ul className={styles.nav}>
                        <li>
                            <Link to="/memo/create">
                                <BookmarkOutline
                                    width={24}
                                    height={24}
                                    stroke="white"
                                />
                            </Link>
                        </li>
                        <li>
                            <BookmarkOutline
                                width={24}
                                height={24}
                                stroke="white"
                            />
                        </li>
                    </ul>
                </div>
            );
    }

}

export default Header;