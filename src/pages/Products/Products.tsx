import React from 'react'
import "./Products.scss"

import { useAppSelector } from '../../store/store';
import ProductsList from './ProductsList';

export default function Products() {

   const { products, status } = useAppSelector((state) => state.data)

   return (
      <div>
         <ProductsList products={products as []} status={status} />
      </div>
   );
}