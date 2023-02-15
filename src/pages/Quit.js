import { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ArrowDownOutline, CheckboxFill, SmilingFaceWithTear } from "assets/icons";
import { ColorType, ModalConfirmButtonType, ModalType } from "type";
import { clickKakaoLink } from "common";
import Modal from "components/molecules/Modal";
import styles from "./Quit.module.css";

function Quit() {
    const QuitReasonType = {
        PRIVACY: "privacy",
        ERROR: "error",
        UIUX: "uiux",
        DATA_RESET: "dataReset",
        AD: "ad"
    }

    const agreeButtonRef = useRef()

    const { isModalShowContext } = useOutletContext()
    const [isModalShow, setIsModalShow] = isModalShowContext
    const [isAgree, setIsAgree] = useState(false)
    const [openedList, setOpendList] = useState("")
    
    const clickList = (reason) => {
        if(openedList === reason) {
            setOpendList("")
        } else {
            setOpendList(reason)
        }
    }
    
    const clikcQuitButton = () => {
        if(!isAgree) return
        setIsModalShow(true)
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                어떤 부분이 불편하셨나요?
            </h2>

            {/* 리스트 */}
            <ul>
                {/* 개인정보 노출 */}
                <li className={styles.list}>
                    <div
                        onClick={() => clickList(QuitReasonType.PRIVACY)}
                        className={openedList === QuitReasonType.PRIVACY
                            ? `${styles.reason} ${styles.open}`
                            : `${styles.reason}`
                    }>
                        <h3>
                            개인정보 노출이 걱정돼요
                        </h3>
                        <ArrowDownOutline
                            width={20}
                            height={20}
                            stroke={ColorType.DIM_GRAY}
                        />
                    </div>
                    <p className={styles.answer}>
                        안심하세요!<br />
                        요리모아에서는 개인정보를 따로 보관하지 않고 있어요.<br />
                        절대 어떤 정보도 불특정 타인에게 공개하지 않아요.
                    </p>
                </li>

                {/* 앱 오류 */}
                <li className={styles.list}>
                    <div
                        onClick={() => clickList(QuitReasonType.ERROR)}
                        className={openedList === QuitReasonType.ERROR
                            ? `${styles.reason} ${styles.open}`
                            : `${styles.reason}`
                    }>
                        <h3>
                            앱 오류가 잦아요
                        </h3>
                        <ArrowDownOutline
                            width={20}
                            height={20}
                            stroke={ColorType.DIM_GRAY}
                        />
                    </div>
                    <p className={styles.answer}>
                        오류는 수시로 체크하고 있지만, 아직 부족한 부분이 많아요😢<br />
                        어떤 오류가 있었는지 알려주시면 빠른 시일 내에 해결할게요!<br />
                        
                        <button
                            className={styles.link_button}
                            onClick={clickKakaoLink}
                        >
                            카카오톡으로 오류 남기기
                        </button>
                    </p>
                </li>

                {/* UI/UX */}
                <li className={styles.list}>
                    <div
                        onClick={() => clickList(QuitReasonType.UIUX)}
                        className={openedList === QuitReasonType.UIUX
                            ? `${styles.reason} ${styles.open}`
                            : `${styles.reason}`
                    }>
                        <h3>
                            사이트 이용이 어려워요
                        </h3>
                        <ArrowDownOutline
                            width={20}
                            height={20}
                            stroke={ColorType.DIM_GRAY}
                        />
                    </div>
                    <p className={styles.answer}>
                        어떤 부분이 어려우셨나요?<br />
                        관련하여 의견을 남겨주시면 개선점을 고민해볼게요.<br />
                        여러분의 의견은 소중합니다💕<br />
                        
                        <button
                            className={styles.link_button}
                            onClick={clickKakaoLink}
                        >
                            카카오톡으로 의견 남기기
                        </button>
                    </p>
                </li>

                {/* 데이터 초기화 */}
                <li className={styles.list}>
                    <div
                        onClick={() => clickList(QuitReasonType.DATA_RESET)}
                        className={openedList === QuitReasonType.DATA_RESET
                            ? `${styles.reason} ${styles.open}`
                            : `${styles.reason}`
                    }>
                        <h3 onClick={() => clickList(QuitReasonType.DATA_RESET)}>
                            데이터를 삭제하고 싶어요
                        </h3>
                        <ArrowDownOutline
                            width={20}
                            height={20}
                            stroke={ColorType.DIM_GRAY}
                        />
                    </div>
                    <p className={styles.answer}>
                        계정을 삭제하지 않아도 데이터를 모두 삭제할 수 있어요.<br />
                        아래 버튼을 눌러 바로 초기화 해보세요.<br />

                        <button className={styles.link_button}>
                            데이터 초기화하기
                        </button>
                    </p>
                </li>

                {/* 광고 */}
                <li className={styles.list}>
                    <div
                        onClick={() => clickList(QuitReasonType.AD)}
                        className={openedList === QuitReasonType.AD
                            ? `${styles.reason} ${styles.open}`
                            : `${styles.reason}`
                    }>
                        <h3 onClick={() => clickList(QuitReasonType.AD)}>
                            광고가 너무 많아요
                        </h3>
                        <ArrowDownOutline
                            width={20}
                            height={20}
                            stroke={ColorType.DIM_GRAY}
                        />
                    </div>
                    <p className={styles.answer}>
                        요리모아 유지를 위해 광고를 사용하게 되었어요.<br />
                        최대한 편리하게 이용하실 방법을 지속적으로 고민 중입니다.<br />
                        더 좋은 의견이 있으시면 언제든 메시지를 남겨주세요.<br />

                        <button
                            className={styles.link_button}
                            onClick={clickKakaoLink}
                        >
                            카카오톡으로 의견 남기기
                        </button>
                    </p>
                </li>
            </ul>

            <h2 className={styles.title}>
                그래도 탈퇴를 원하시나요?
                <SmilingFaceWithTear />
            </h2>
            <p className={styles.guide}>
                탈퇴 즉시 모든 데이터가 삭제됩니다.<br />
                재가입은 언제든지 가능합니다.
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
                modalMessage="탈퇴가 완료되었습니다."
                modalConfirmButtonType={ModalConfirmButtonType.QUIT}
            />
        </div>
    );
}

export default Quit;