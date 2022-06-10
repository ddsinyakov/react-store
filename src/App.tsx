import React, { useEffect } from 'react';
import './styles/App.scss';

import { Routes, Route } from "react-router-dom"
import AppRoutes from './features/Routes';

import Header from './components/Header';
import Main from './pages/Main';
import Products from './pages/Products';
import Sales from './pages/Sales';
import Cart from './pages/Cart';
import About from './pages/About';

import { useAppDispatch } from './store/store';
import { fetchDataAsync } from './store/dataSlice';


function App() {

   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(fetchDataAsync())
   }, [dispatch])

   return (
      <div>
         <Header />

         <Routes>
            {/* Header Routes */}
            <Route path={AppRoutes.Home} element={<Main />}></Route>
            <Route path={AppRoutes.Products} element={<Products />}></Route>
            <Route path={AppRoutes.Sales} element={<Sales />}></Route>
            <Route path={AppRoutes.Cart} element={<Cart />}></Route>

            {/* Footer Routes */}
            <Route path={AppRoutes.About} element={<About />}></Route>

            {/* others... */}


         </Routes>
      </div>
   );
}

export default App;
