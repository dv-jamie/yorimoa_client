import { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CheckboxFill, SmilingFaceWithTear } from "assets/icons";
import { ColorType, ModalType } from "type";
import Modal from "components/molecules/Modal";
import styles from "./Quit.module.css";

function Quit() {
    const agreeButtonRef = useRef()

    const { isModalShowContext } = useOutletContext()
    const [isModalShow, setIsModalShow] = isModalShowContext

    const [isAgree, setIsAgree] = useState(false)
    
    const clikcQuitButton = () => {
        if(!isAgree) return
        setIsModalShow(true)
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                어떤 부분이 불편하셨나요?
            </h2>
            <ul>
                <li className={styles.list}>
                    <h3>개인정보 노출이 걱정돼요</h3>
                    <p>요리모아에서는 개인정보를 따로 보관하지 않고 있어요</p>
                </li>
                <li className={styles.list}>
                    <h3>앱 오류가 잦아요</h3>
                    <p>어떤 오류가 있는지 알려주시면 빠른 시일 내에 해결할게요</p>
                    <button className={styles.link_button}>카카오톡으로 의견 남기기</button>
                </li>
                <li className={styles.list}>
                    <h3>디자인이 불편해요</h3>
                    <p>관련하여 의견을 남겨주시면 빠른 시일 내에 해결할게요</p>
                    <button className={styles.link_button}>카카오톡으로 의견 남기기</button>
                </li>
                <li className={styles.list}>
                    <h3>데이터를 삭제하고 싶어요</h3>
                    <p>계정을 삭제하지 않아도 데이터를 초기화할 수 있어요</p>
                    <button className={styles.link_button}>데이티 초기화하기</button>
                </li>
            </ul>

            <h2 className={styles.title}>
                그래도 탈퇴를 원하시나요?
                <SmilingFaceWithTear />
            </h2>
            <p className={styles.guide}>
                탈퇴 즉시 모든 데이터가 삭제되며,<br />
                언제든지 재가입이 가능합니다.
            </p>

            <button
                className={styles.agree_button}
                ref={agreeButtonRef}
                onClick={() => setIsAgree(isAgree ? false : true)}
            >
                <CheckboxFill
                    width={24}
                    height={24}
                    fill={isAgree
                        ? ColorType.MAIN_ORANGE
                        : ColorType.GAINSBRO
                    }
                />
                모든 데이터를 삭제하는 것에 동의합니다.
            </button>

            <button
                onClick={clikcQuitButton}
                className={isAgree
                    ? `${styles.quit_button} ${styles.button_active}`
                    : `${styles.quit_button}`
            }>탈퇴하기</button>

            <Modal
                isModalShow={isModalShow}
                setIsModalShow={setIsModalShow}
                modalType={ModalType.ALERT}
                message="탈퇴가 완료되었습니다."
            />
        </div>
    );
}

export default Quit;