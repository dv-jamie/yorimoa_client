import { KakaoSymbol } from "assets/icons";
import styles from "./Login.module.css";

function Login() {
    return (
        <div className={styles.container}>
            <h3 className={styles.sub_title}>
                냉장고 관리하기 힘드셨죠?
            </h3>
            <h2 className={styles.title}>
                쉽게 기록해보세요!
            </h2>
            <div className={styles.image}></div>
            <p className={styles.description}>
                데이터 보관을 위해 회원가입이 필요해요<br />
                카카오 인증 외에 다른 개인정보는 받지 않아요!
            </p>
            <button className={styles.kakao_login_button}>
                <KakaoSymbol />
                <span>카카오톡으로 3초만에 시작하기</span>
            </button>
        </div>
    );
}

export default Login;