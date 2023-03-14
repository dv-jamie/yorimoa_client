import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ModalConfirmButtonType, ModalMessageType, ModalType } from "type";
import styles from "./Modal.module.css";

function Modal({
    isModalShow,
    setIsModalShow,
    modalType,
    setModalType,
    modalMessage,
    setModalMessage,
    modalConfirmButtonType,
    setModalConfirmButtonType
}) {
    const navigate = useNavigate()

    const clickConfirmButton = async () => {
        switch(modalConfirmButtonType) {
            // 데이터 초기화
            case ModalConfirmButtonType.RESET_DATA:
                await axios.delete(`${process.env.REACT_APP_API_URL}/reset`)
                setModalType(ModalType.ALERT)
                setModalMessage(ModalMessageType.RESET_COMPLETED)
                setModalConfirmButtonType(ModalConfirmButtonType.CLOSE_MODAL)
                break
            
            // 로그아웃, 탈퇴
            case ModalConfirmButtonType.LINK_TO_LOGIN:
            case ModalConfirmButtonType.QUIT:
                setIsModalShow(false)
                navigate("/login")
                break
            
            // 확인
            case ModalConfirmButtonType.CLOSE_MODAL:
                setIsModalShow(false)
                break
        }
    }

    switch (modalType) {
        case ModalType.ALERT:
            return (
                <div className={isModalShow
                    ? `${styles.container}`
                    : `${styles.container} hide`
                }>
                    <div className={styles.message_wrap}>
                        <p>{modalMessage}</p>
                    </div>
                    <button
                        className={`${styles.button} ${styles.confirm_button}`}
                        onClick={clickConfirmButton}
                    >확인</button>
                </div>
            )
        case ModalType.CONFIRM:
            return (
                <div className={isModalShow
                    ? `${styles.container}`
                    : `${styles.container} hide`
                }>
                    <div className={styles.message_wrap}>
                        <p>{modalMessage}</p>
                    </div>
                    <div className={styles.button_wrap}>
                        <button
                            className={`${styles.button}`}
                            onClick={() => setIsModalShow(false)}
                        >취소</button>
                        <button
                            className={`${styles.button} ${styles.confirm_button}`}
                            onClick={clickConfirmButton}
                        >{
                            modalConfirmButtonType === ModalConfirmButtonType.RESET_DATA
                                ? "삭제" : "확인"
                        }</button>
                    </div>
                </div>
            )
    }
};

export default Modal;