import React from 'react'
import "./Search.scss"

import { useAppSelector } from '../../store/store';
import ProductsList from '../../components/ProductList';
import AsyncStatus from '../../store/AsyncStatus';
import Spinner from '../../components/Spinner';

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
         {
            status === AsyncStatus.Loading ? (
               <Spinner />
            ) : status === AsyncStatus.Idle ? (<>{
               products.length > 0 ? (
                  <ProductsList products={products} />
               ) : (
                  <div>
                     Oops... No results
                  </div>
               )
            }</>) : (
               <div>
                  Oops...
               </div>
            )
         }
      </div >
   );
}