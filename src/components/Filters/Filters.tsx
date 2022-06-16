import React, { useRef, useState } from 'react'
import Product from '../../models/IProduct';
import AsyncStatus from '../../store/AsyncStatus';
import "./Filters.scss"
import PriceFilter, { IPriceFilterRef } from './_PriceFilter';

interface IFilterProps {
   products: Product[]
   status: AsyncStatus,
   max: number,
   min: number
}

export default function Filters({ products, status, max, min }: IFilterProps) {
   // const [minPrice, setMinPrice] = useState(min.toString());
   // const [maxPrice, setMaxPrice] = useState(max.toString());
   // const [error, setError] = useState(false);

   // const handleInputChange = (
   //    event: React.ChangeEvent<HTMLInputElement>,
   //    stateHandler: React.Dispatch<React.SetStateAction<string>>) => {
   //    stateHandler(event.currentTarget.value);

   //    if (!Number(event.currentTarget.value))
   //       setError(true);
   //    else if (error)
   //       setError(false)
   // }

   const priceRef = useRef<IPriceFilterRef>(null);

   const manufacturers = Array.from(
      new Set(products.map(prod => prod.manufacturer))
   );

   const show = () => {
      console.log(priceRef.current?.getPrice());
   }

   console.log("filters")
   return (
      <div className='filters'>

         <div className='accept'>
            <button onClick={show}>
               Применить
            </button>

            <button>
               Сбросить
            </button>
         </div>

         <p>Цена</p>
         <PriceFilter ref={priceRef} min={min} max={max} />
         {/* <div className={error ? 'prices error' : 'prices'}>
            <input type="text" value={minPrice} onChange={(event) => handleInputChange(event, setMinPrice)} />
            <span> — </span>
            <input type="text" value={maxPrice} onChange={(event) => handleInputChange(event, setMaxPrice)} />
         </div> */}

         <p>Производитель</p>
         <div className="manufacturer">
            {
               manufacturers.map((item, i) => (
                  <div key={i}>
                     <input type="checkbox" value={item} />
                     <label>{item}</label>
                  </div>
               ))
            }
         </div>
      </div >
   );
}