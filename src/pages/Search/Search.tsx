import React from 'react'
import "./Search.scss"

import { useAppSelector } from '../../store/store';
import ProductsList from '../../components/ProductList';

export default function Search() {
   const { products, status } = useAppSelector((state) => {
      let products = state.data.products
         .filter(item =>
            item.name.toLowerCase()
               .includes(state.data.lookingFor.toLowerCase())
         )

      return {
         products,
         status: state.data.status
      }
   });

   return (
      <div className='container mg'>
         <ProductsList products={products} status={status} />
      </div>
   );
}