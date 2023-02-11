import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import Refrigerator from "pages/Refrigerator";
import ComingSoon from "pages/ComingSoon";
import Login from "pages/Login";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/refrigerator" />}></Route>
            <Route path="/login" element={<Login />}></Route>
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
