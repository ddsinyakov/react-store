import React, { useState } from 'react';
import "./Products.scss"

import { useAppSelector } from '../../store/store';

import ProductsList from '../../components/ProductList';
import SortingFilter from "../../components/SortingFilter";
import Filters from '../../components/Filters';
import SortingTypes from '../../features/SortingTypes';
import Spinner from '../../components/Spinner';
import AsyncStatus from '../../store/AsyncStatus';
import { filter, Filter, sort } from '../../features/FilterFunctions';





// function for filtering products

export default function Products() {
   const [sortType, setSortType] = useState(SortingTypes.Default.toString());
   const { products, status, maxPrice, minPrice } = useAppSelector((state) => state.data);

   // sorting 
   let newProducts = [...products];
   newProducts = sort(newProducts, sortType);

   // filters
   const [currentFilter, setCurrentFilter] = useState<Filter>(null);
   newProducts = filter(newProducts, currentFilter);

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
                  <Filters products={products} max={maxPrice} min={minPrice} setFilters={setCurrentFilter} />
               </div>

               <div className='list'>
                  <ProductsList products={newProducts} />
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