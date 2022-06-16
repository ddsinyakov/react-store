import React, { useImperativeHandle, useState } from 'react'

interface IPriceFilterProps {
   max: number,
   min: number
}

export interface IPriceFilterRef {
   getPrice: () => { min: string, max: string, valid: boolean }
}

const PriceFilter = React.forwardRef<IPriceFilterRef, IPriceFilterProps>((
   { max, min },
   ref
) => {

   const [minPrice, setMinPrice] = useState(min.toString());
   const [maxPrice, setMaxPrice] = useState(max.toString());
   const [error, setError] = useState(false);

   useImperativeHandle(ref, () => ({
      getPrice: () => ({ max: maxPrice, min: minPrice, valid: error })
   }), [maxPrice, minPrice, error])

   const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement>,
      stateHandler: React.Dispatch<React.SetStateAction<string>>) => {
      stateHandler(event.currentTarget.value);

      if (!Number(event.currentTarget.value))
         setError(true);
      else if (error)
         setError(false)
   }

   return (
      <div className={error ? 'prices error' : 'prices'}>
         <input type="text" value={minPrice} onChange={(event) => handleInputChange(event, setMinPrice)} />
         <span> — </span>
         <input type="text" value={maxPrice} onChange={(event) => handleInputChange(event, setMaxPrice)} />
      </div>
   );
})

export default PriceFilter;