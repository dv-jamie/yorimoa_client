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
        
        if(data.status === 200) {
            const { jwtToken } = data.data
            localStorage.setItem("JWT_TOKEN", jwtToken)
            setIsLogin(true)
            navigate("/")
        } else {
            console.log("서버 오류: ", data)
        }
    }

    useEffect(() => {
        kakaoLogin()
    }, [])
}

export default KakaoAuthHandle;