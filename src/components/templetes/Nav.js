import { Link, useLocation } from "react-router-dom";
import {
    DiaryFill,
    MemoFill,
    PencilFill,
    RefrigeratorFill,
    ToqueFill,
} from "../../assets/icons"
import { ColorType, ModalType } from "type";
import styles from "./Nav.module.css";

function Nav({
    isModalShow,
    setIsModalShow,
    modalType,
    setModalType
}) {
    const location = useLocation()
    const pathname = location.pathname

    // const clickUploadButton = () => {
    //     setModalType(ModalType.UPLOAD)
    //     setIsModalShow(current => !current)
    // }

    return (
        <div className={styles.container}>
            <ul>
                <li>
                    <Link to="/diary">
                        <div className={styles.icon}>
                            <DiaryFill
                                width="24"
                                height="24"
                                fill={pathname === "/diary"
                                    ? `${ColorType.MAIN_ORANGE}`
                                    : `${ColorType.SILVER}`
                                }
                            />
                        </div>
                        <span className={pathname === "/diary"
                            ? styles.selected_icon_name
                            : styles.icon_name
                        }>요리일기</span>
                    </Link>
                </li>
                <li>
                    <Link to="/recipe">
                        <div className={styles.icon}>
                            <ToqueFill
                                width="24"
                                height="24"
                                fill={pathname === "/recipe"
                                    ? `${ColorType.MAIN_ORANGE}`
                                    : `${ColorType.SILVER}`
                                }
                            />
                        </div>
                        <span className={pathname === "/recipe"
                            ? styles.selected_icon_name
                            : styles.icon_name
                        }>레시피</span>
                    </Link>
                </li>
                <li>
                    <Link to="/refrigerator">
                        <div className={styles.icon}>
                            <RefrigeratorFill
                                width="24"
                                height="24"
                                fill={pathname === "/refrigerator"
                                    ? `${ColorType.MAIN_ORANGE}`
                                    : `${ColorType.SILVER}`
                                }
                            />
                        </div>
                        <span className={pathname === "/refrigerator"
                            ? styles.selected_icon_name
                            : styles.icon_name
                        }>냉장고</span>
                    </Link>
                </li>
                {/* <li
                    className={isModalShow
                        ? `${styles.upload_button} overlap`
                        :`${styles.upload_button}`
                    }
                    onClick={clickUploadButton}
                >
                    <div className={styles.icon}>
                        <PencilFill
                            width="24"
                            height="24"
                            fill={pathname === "/diary/create" || pathname === "/recipe/create"
                                ? `${ColorType.MAIN_ORANGE}`
                                : `${ColorType.SILVER}`
                            }
                        />
                    </div>
                    <span className={styles.icon_name}>업로드</span>
                    <ul className={isModalShow && modalType === ModalType.UPLOAD
                            ? `${styles.selectbox_create}`
                            : `${styles.selectbox_create} hide`
                    }>
                        <li>
                            <Link to="/diary/create">요리일기 작성하기</Link>
                        </li>
                        <li>
                            <Link to="/recipe/create">레시피 작성하기</Link>
                        </li>
                        <li>
                            <button>X</button>
                        </li>
                    </ul>
                </li> */}
            </ul>
        </div>
    );
}

export default Nav;
