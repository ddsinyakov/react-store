import React, { useRef } from 'react'
import { Filter } from '../../features/FilterFunctions';
import Product from '../../models/IProduct';

import "./Filters.scss"
import { IManufFilterRef, ManufFilter } from './_ManufFilter';
import { PriceFilter, IPriceFilterRef } from './_PriceFilter';

interface IFilterProps {
   setFilters?: React.Dispatch<React.SetStateAction<Filter>>
   products: Product[]
   max: number
   min: number
}

export default function Filters({ setFilters, products, max, min }: IFilterProps) {
   const priceRef = useRef<IPriceFilterRef>(null);
   const manufRef = useRef<IManufFilterRef>(null);

   const acceptFilters = () => {
      if (setFilters) {
         let filter: Filter = {}
         let isFilter = false;

         // adding price restrictions to the filter
         if (priceRef.current) {
            const { min, max, valid } = priceRef.current.getPrice();
            if (valid) {
               isFilter = true;
               filter.priceBorder = {
                  maxPrice: Number(max),
                  minPrice: Number(min)
               }
            }
         }

         // adding manufacturers to the filter
         if (manufRef.current) {
            const manufs = manufRef.current.getManufs();
            if (manufs.length > 0) {
               isFilter = true;
               filter.manufacturers = manufs;
            }
         }

         if (isFilter) setFilters(filter);
      }
   }

   // clearing all filters
   const clearFilters = () => {
      priceRef.current?.clearPrice();
      manufRef.current?.clearManufs();
      if (setFilters) { setFilters(null); }
   }

   return (
      <div className='filters'>

         <div className='accept'>
            <button onClick={acceptFilters}>
               Применить
            </button>

            <button onClick={clearFilters}>
               Сбросить
            </button>
         </div>

         <p>Цена</p>
         <PriceFilter ref={priceRef} min={min} max={max} />

         <p>Производитель</p>
         <ManufFilter ref={manufRef} products={products} />
      </div >
   );
}