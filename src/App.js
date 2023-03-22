import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import Refrigerator from "pages/Refrigerator";
import ComingSoon from "pages/ComingSoon";
import Login from "pages/Login";
import Setting from "pages/Setting";
import Quit from "pages/Quit";
import RefrigeratorEdit from "pages/RefrigeratorEdit";
import KakaoAuthHandle from "_auth/KakaoAuthHandle";

function App() {
  const HOME_PAGE_PATH = "/refrigerator"
  const LOGIN_PAGE_PATH = "/login"

  const [isLogin, setIsLogin] = useState(false)
  const [isModalShow, setIsModalShow] = useState(false)
  const [bottomsheetType, setBottomsheetType] = useState("")
  const [isBottomsheetShow, setIsBottomsheetShow] = useState(false)
  const [isTwoDepthBottomsheetShow, setIsTwoDepthBottomsheetShow] = useState(false)

  useEffect(() => {
    const jwtToken = localStorage.getItem("JWT_TOKEN")
    
    if(jwtToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`
      setIsLogin(true)
    }
  }, [])

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route element={<Layout
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            isModalShow={isModalShow}
            setIsModalShow={setIsModalShow}
            bottomsheetType={bottomsheetType}
            setBottomsheetType={setBottomsheetType}
            isBottomsheetShow={isBottomsheetShow}
            setIsBottomsheetShow={setIsBottomsheetShow}
            isTwoDepthBottomsheetShow={isTwoDepthBottomsheetShow}
            setIsTwoDepthBottomsheetShow={setIsTwoDepthBottomsheetShow}
          />}>
            <Route path="/auth/kakao" element={<KakaoAuthHandle setIsLogin={setIsLogin} />}></Route>
            
            <Route path="/" element={
              <Navigate to={ isLogin ? HOME_PAGE_PATH : LOGIN_PAGE_PATH } />
            }></Route>
            <Route path="/login" element={
              isLogin ? <Navigate to="/" /> : <Login />
            }></Route>
            <Route path="/setting" element={<Setting />}></Route>
            <Route path="/quit" element={<Quit />}></Route>

            <Route path="/diary" element={<ComingSoon type="diary" />}></Route>
            <Route path="/recipe" element={<ComingSoon type="recipe" />}></Route>
            <Route path="/refrigerator" element={
              isLogin ? <Refrigerator /> : <Navigate to={LOGIN_PAGE_PATH} />
            }></Route>
            <Route path="/refrigerator/edit" element={<RefrigeratorEdit />}></Route>
            
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
