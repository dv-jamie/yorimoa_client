import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Join from './pages/Join';
import Diary from './pages/Diary';
import DiaryCreate from './pages/DiaryCreate';
import Recipe from './pages/Recipe';
import RecipeDetail from './pages/RecipeDetail';
import RecipeCreate from './pages/RecipeCreate';
import NotFound from './pages/NotFound';
import Layout from './components/templetes/Layout';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route element={<Layout />}>
              <Route path="/" element={<Diary />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/join" element={<Join />}></Route>
              <Route path="/diary">
                <Route path="" element={<Diary />}></Route>
                <Route path="create" element={<DiaryCreate />}></Route>
              </Route>
              <Route path="/recipe">
                <Route path="" element={<Recipe />}></Route>
                <Route path=":id" element={<RecipeDetail />}></Route>
                <Route path="create" element={<RecipeCreate />}></Route>
              </Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
