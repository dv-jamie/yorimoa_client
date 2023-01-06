import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className='side-navi'>
            <li>
                <Link to='/diary'>일기</Link>
            </li>
            <li>
                작성
            </li>
            <li>
                <Link to='/recipe'>매칭 관리</Link>
            </li>
        </nav>
    );
}

export default Nav;
