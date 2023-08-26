import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { routes } from './components/routes/routes';
import HomePage from './components/pages/Home-page/HomePage';
import CarPage from './components/pages/Car-page/CarPage';
import Header from './components/header/Header';
import FavoritePage from './components/pages/FavoritePage/FavoritePage';



function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path={routes.home} element={<HomePage/>}/>
        <Route path={`${routes.carPage}/:id`} element={<CarPage/>}/>
        <Route  path={routes.favorite} element={<FavoritePage/>}/>
      </Routes>
    </>
  );
}

export default App;
