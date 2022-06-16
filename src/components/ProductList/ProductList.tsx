import React from 'react'
import "./ProductList.scss"

import AsyncStatus from '../../store/AsyncStatus';
import IProduct from "../../models/IProduct"
import ProductCard from '../ProductCard';

interface IProductListProps {
   products: IProduct[],
   status: AsyncStatus
}

export default function ProductsList({ products, status }: IProductListProps) {
   return (
      <div className='productList'>
         {products.map((item) =>
            <ProductCard product={item} key={item.id} />
         )}
      </div>
   );
}