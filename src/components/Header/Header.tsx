import React from 'react'
import "./Header.scss"

import { Link } from 'react-router-dom'
import AppRoutes from '../../features/Routes';

export default function Header() {
   return (
      <nav className='header container'>
         <Link to={AppRoutes.Home} className='home'>the SHOP</Link>

         <div className="links">
            <Link to={AppRoutes.Products} className='link'>Товары</Link>
            <Link to={AppRoutes.Sales} className='link'>Скидки</Link>
            <Link to={AppRoutes.Cart} className='link'>Корзина</Link>
         </div>
      </nav>
   );
}