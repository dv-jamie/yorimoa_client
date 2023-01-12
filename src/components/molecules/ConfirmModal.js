import { useNavigate } from "react-router-dom";
import { ModalType } from "type";
import styles from "./ConfirmModal.module.css";

function ConfirmModal({
    isModalShow,
    setIsModalShow,
    modalType
}) {
    const navigate = useNavigate()

    const clickConfirmButton = () => {
        setIsModalShow(false)
        navigate(-1)
    }

    return (
        <div className={isModalShow && modalType === ModalType.CONFIRM_BACK
            ? `${styles.container}`
            : `${styles.container} hide`
        }>
            <h3>페이지에서 나가시겠습니까?</h3>
            <p>
                변경사항이 저장되지 않을 수 있습니다.
            </p>
            <div className={styles.button_wrap}>
                <button onClick={clickConfirmButton}>나가기</button>
                <button onClick={() => setIsModalShow(false)}>
                    취소
                </button>
            </div>
        </div>
    )
};

export default ConfirmModal;