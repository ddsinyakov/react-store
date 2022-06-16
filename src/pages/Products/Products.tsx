import React, { useState } from 'react';
import "./Products.scss"

import { useAppSelector } from '../../store/store';

import ProductsList from '../../components/ProductList';
import SortingFilter from "../../components/SortingFilter";
import Filters from '../../components/Filters';
import SortingTypes from '../../features/SortingTypes';
import Product from '../../models/IProduct';
import Spinner from '../../components/Spinner';
import AsyncStatus from '../../store/AsyncStatus';

const sort = (products: Product[], sortType: string): Product[] => {
   let result = products;

   if (sortType === SortingTypes.ByPriceAscendig) {
      result = products.sort((prodA, prodB) => prodA.price - prodB.price);
   } else if (sortType === SortingTypes.ByPriceDescending) {
      result = products.sort((prodA, prodB) => prodB.price - prodA.price);
   } else if (sortType === SortingTypes.OnlySales) {
      result = products.filter((prod) => prod.hasDiscount);
   }

   return result;
}

export default function Products() {
   const [sortType, setSortType] = useState(SortingTypes.Default.toString());
   const { products, status, maxPrice, minPrice } = useAppSelector((state) => state.data);
   let newProducts = [...products];
   newProducts = sort(newProducts, sortType);

   return (
      <div className='container mg productLayout'>

         <div className="list">
            <SortingFilter setSortType={setSortType} />
         </div>

         {
            status === AsyncStatus.Loading ? (<div className='all'>
               <Spinner />
            </div>) : status === AsyncStatus.Idle ? (<>

               <div>
                  < Filters products={newProducts} status={status} max={maxPrice} min={minPrice} />
               </div>

               <div className='list'>
                  <ProductsList products={newProducts} status={status} />
               </div>

            </>) : (
               <div>
                  Oops...
               </div>
            )
         }

      </div>
   );
}