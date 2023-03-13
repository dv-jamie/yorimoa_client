import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function KakaoAuthHandle({ setIsLogin }) {
    const navigate = useNavigate()

    const kakaoLogin = async () => {
        const code = new URL(window.location.href).searchParams.get('code')
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/auth/login/kakao`, {
            params: { code }
        })
        const { jwtToken } = data.data
        localStorage.setItem("JWT_TOKEN", jwtToken)
        setIsLogin(true)
        navigate("/")
    }

    useEffect(() => {
        kakaoLogin()
    }, [])
}

export default KakaoAuthHandle;