import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function KakaoAuthHandle({ setIsLogin }) {
    const navigate = useNavigate()

    const kakaoLogin = async () => {
        const code = new URL(window.location.href).searchParams.get('code')
        const { data: loginKakao } = await axios.get(`${process.env.REACT_APP_API_URL}/auth/login/kakao`, {
            params: { code }
        })
        
        if(loginKakao.status === 200) {
            const { jwtToken } = loginKakao.data
            localStorage.setItem("JWT_TOKEN", jwtToken)
            axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`
            setIsLogin(true)
            navigate("/")
        } else {
            return loginKakao.data
        }
    }

    useEffect(() => {
        kakaoLogin()
    }, [])
}

export default KakaoAuthHandle;