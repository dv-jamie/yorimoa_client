import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import Refrigerator from "pages/Refrigerator";
import ComingSoon from "pages/ComingSoon";
import Login from "pages/Login";
import Setting from "pages/Setting";
import Quit from "pages/Quit";

function App() {
  const [isModalShow, setIsModalShow] = useState(false)
  const [isBottomsheetShow, setIsBottomsheetShow] = useState(false)
  const [isTwoDepthBottomsheetShow, setIsTwoDepthBottomsheetShow] = useState(false)

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route element={<Layout
            isModalShow={isModalShow}
            setIsModalShow={setIsModalShow}
            isBottomsheetShow={isBottomsheetShow}
            setIsBottomsheetShow={setIsBottomsheetShow}
            isTwoDepthBottomsheetShow={isTwoDepthBottomsheetShow}
            setIsTwoDepthBottomsheetShow={setIsTwoDepthBottomsheetShow}
          />}>
            <Route path="/" element={<Navigate to="/refrigerator" />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/setting" element={<Setting
              isModalShow={isModalShow}
              setIsModalShow={setIsModalShow}
            />}></Route>
            <Route path="/quit" element={<Quit />}></Route>
            <Route path="/diary" element={<ComingSoon type="diary" />}></Route>
            <Route path="/recipe" element={<ComingSoon type="recipe" />}></Route>
            <Route path="/refrigerator" element={<Refrigerator />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
        <Routes>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
