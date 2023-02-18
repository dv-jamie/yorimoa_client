import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import {
    DeleteOutline,
    HeadsetOutline,
    PowerOutline,
    QuitOutline
} from "assets/icons";
import { clickKakaoLink } from "common";
import { ModalConfirmButtonType, ModalMessageType, ModalType } from "type";
import Modal from "components/molecules/Modal";
import styles from "./Setting.module.css";

function Setting() {
    const { isModalShowContext } = useOutletContext()
    const [isModalShow, setIsModalShow] = isModalShowContext
    const [modalType, setModalType] = useState(ModalType.CONFIRM)
    const [modalMessage, setModalMessage] = useState("")
    const [modalConfirmButtonType, setModalConfirmButtonType] = useState(null)

    const clickLogoutButton = () => {
        setModalMessage(ModalMessageType.LOGOUT)
        setModalConfirmButtonType(ModalConfirmButtonType.LINK_TO_LOGIN)
        setIsModalShow(true)
    }

    const clickResetDataButton = () => {
        setModalMessage(ModalMessageType.CHECK_RESET)
        setModalConfirmButtonType(ModalConfirmButtonType.RESET_DATA)
        setIsModalShow(true)
    }

    return (
        <div className={styles.container}>
            <ul className={styles.list_wrap}>
                <li
                    className={styles.list_item}
                    onClick={clickLogoutButton}    
                >
                    <PowerOutline />
                    <span>로그아웃</span>
                </li>
                <li
                    className={styles.list_item}
                    onClick={clickKakaoLink}
                >
                    <HeadsetOutline />
                    <span>문의하기</span>
                </li>
                <li
                    className={styles.list_item}
                    onClick={clickResetDataButton}
                >
                    <DeleteOutline />
                    <span>데이터 초기화</span>
                </li>
                <li className={styles.list_item}>
                    <QuitOutline />
                    <Link to="/quit">
                        <span>탈퇴하기</span>
                    </Link>
                </li>
            </ul>

            {/* 데이터 초기화 모달창 */}
            <Modal
                isModalShow={isModalShow}
                setIsModalShow={setIsModalShow}
                modalType={modalType}
                setModalType={setModalType}
                modalMessage={modalMessage}
                setModalMessage={setModalMessage}
                modalConfirmButtonType={modalConfirmButtonType}
                setModalConfirmButtonType={setModalConfirmButtonType}
            />
        </div>
    );
}

export default Setting;