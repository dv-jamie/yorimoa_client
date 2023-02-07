import { Link, useLocation } from "react-router-dom";
import {
    BookmarkOutline,
    PersonOutline
} from "../../assets/icons"
import styles from "./Header.module.css";

function Header() {
    const location = useLocation()
    const pathname = location.pathname

    switch (pathname) {
        case "/diary":
        case "/recipe":
        case "/memo":
            return (
                <div className={styles.container}>
                    {console.log(pathname)}
                    <ul className={styles.nav}>
                        <li>
                            <Link to="/bookmark">
                                <BookmarkOutline
                                    width={24}
                                    height={24}
                                    stroke="white"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                <PersonOutline
                                    width={24}
                                    height={24}
                                    stroke="white"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            );
        
        case "/profile":
            return (
                <div className={styles.container}>
                    <ul className={styles.nav}>
                        <li>
                            <Link to="/bookmark">
                                <BookmarkOutline
                                    width={24}
                                    height={24}
                                    stroke="white"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                <PersonOutline
                                    width={24}
                                    height={24}
                                    stroke="white"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            );

        default:
            return (
                <div className={styles.container}>
                    {console.log(pathname)}
                    <ul className={styles.nav}>
                        <li>
                            <Link to="/bookmark">
                                <BookmarkOutline
                                    width={24}
                                    height={24}
                                    stroke="white"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                <PersonOutline
                                    width={24}
                                    height={24}
                                    stroke="white"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            );
    }

}

export default Header;