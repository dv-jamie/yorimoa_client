import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import Memo from "pages/Memo";
import MemoCreate from "pages/MemoCreate";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/memo"/>}></Route>

            <Route path="/memo">
              <Route path="" element={<Memo />}></Route>
              <Route path="create" element={<MemoCreate />}></Route>
            </Route>
          </Route>
          
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
