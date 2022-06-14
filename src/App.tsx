import React, { useEffect } from 'react';
import './styles/App.scss';

// routing
import { Routes, Route } from "react-router-dom"
import AppRoutes from './features/Routes';

// pages and components
import Header from './components/Header';
import Main from './pages/Main';
import Products from './pages/Products';
import Sales from './pages/Sales';
import Cart from './pages/Cart';
import About from './pages/About';
import Footer from './components/Footer';

// redux 
import { useAppDispatch } from './store/store';
import { fetchDataAsync } from './store/dataSlice';
import ProductItem from './pages/ProductItem';
import Search from './pages/Search';


function App() {

   // fetching the data from "server"
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(fetchDataAsync())
   }, [dispatch])
   // -------------------------------

   return (
      <>
         <div className="content">
            <Header />

            <Routes >
               {/* Header Routes */}
               <Route path={AppRoutes.Home} element={<Main />}></Route>
               <Route path={AppRoutes.Products} element={<Products />}></Route>
               <Route path={AppRoutes.Sales} element={<Sales />}></Route>
               <Route path={AppRoutes.Cart} element={<Cart />}></Route>

               {/* Footer Routes */}
               <Route path={AppRoutes.About} element={<About />}></Route>

               {/* Items */}
               <Route path={AppRoutes.ItemTemplate} element={<ProductItem />} />
               <Route path={AppRoutes.Search} element={<Search />} />

            </Routes>
         </div>

         <Footer />
      </>
   );
}

export default App;
