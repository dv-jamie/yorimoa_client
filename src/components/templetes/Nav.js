import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
    return (
        <div className={styles.container}>
            <ul>
                <li>
                    <Link to='/diary'>
                        <i>일기</i>
                    </Link>
                </li>
                <li>
                    <i>작성</i>
                </li>
                <li>
                    <Link to='/recipe'>
                        <i>레시피</i>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
