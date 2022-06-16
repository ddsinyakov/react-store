import React from 'react'
import "./ProductList.scss"

import IProduct from "../../models/IProduct"
import ProductCard from '../ProductCard';

interface IProductListProps {
   products: IProduct[]
}

export default function ProductsList({ products }: IProductListProps) {
   return (
      <div className='productList'>
         {products.map((item) =>
            <ProductCard product={item} key={item.id} />
         )}
      </div>
   );
}