import React from 'react'
import "./ProductCard.scss"

import IProduct from "../../models/IProduct"
import { Link } from 'react-router-dom';
import AppRoutes from '../../features/Routes';

interface IProductCardProps {
   product: IProduct;
}

export default function ProductCard({ product }: IProductCardProps) {

   const link = AppRoutes.ItemBase + product.id;
   return (
      <div className='productItem'>
         <Link to={link} className="prodImg">
            <img src={product.img} alt="" />
         </Link>

         <Link to={link} className="link">
            {product.name}
         </Link>

         <div className='actualPrice'>
            {product.hasDiscount && <>{product.price} ₴</>}
         </div>

         <div className={product.hasDiscount ? 'price discount' : 'price'}>
            {product.hasDiscount ? product.discountPrice : product.price} ₴
         </div>

         <div className='available'>
            {!product.available && "Отсутсвует"}
         </div>
      </div>
   );
}

