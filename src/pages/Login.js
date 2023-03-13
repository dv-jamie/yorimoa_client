import { KakaoSymbol } from "assets/icons";
import styles from "./Login.module.css";

function Login() {
    const CLIENT_ID = process.env.REACT_APP_REST_API_KEY
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI
    const KAKAO_AUTH_URL= `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
    
    const clickLoginButton = async () => {
        window.location.href = KAKAO_AUTH_URL
    }

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
            <button
                className={styles.kakao_login_button}
                onClick={clickLoginButton}
            >
                <KakaoSymbol />
                <span>카카오톡으로 3초만에 시작하기</span>
            </button>
        </div>
    );
}

export default Login;