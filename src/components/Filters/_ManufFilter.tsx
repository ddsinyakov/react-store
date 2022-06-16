import React, { useImperativeHandle, useState } from 'react';
import Product from '../../models/IProduct';

interface IManufFilterProps {
   products: Product[]
}

export interface IManufFilterRef {
   getManufs: () => string[],
   clearManufs: () => void
}

export const ManufFilter = React.forwardRef<IManufFilterRef, IManufFilterProps>((
   { products }, ref
) => {
   // state array for choosen manufacturers
   const [manufs, setManufs] = useState<string[]>([]);

   // ref methods
   useImperativeHandle(ref, () => ({
      getManufs: () => manufs,
      clearManufs: () => {
         setManufs([]);
      }
   }));

   // getting unique manufacturers and sorting them
   const manufacturers = Array.from(
      new Set(products.map(prod => prod.manufacturer))
   ).sort();

   // handling the checkbox click
   const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
      let newManuf: string[];
      if (event.target.checked) {
         newManuf = [...manufs, event.target.value];
      } else {
         newManuf = [...manufs].splice(manufs.indexOf(event.target.value), 1);
      }
      setManufs(newManuf);
   }

   // handling if checkbox checked
   const handleIsChecked = (manuf: string): boolean => manufs.includes(manuf);


   return (<div className="manufacturer">
      {
         manufacturers.map((item, i) => (
            <div key={i}>
               <input
                  type="checkbox"
                  value={item}
                  onChange={handleCheckbox}
                  checked={handleIsChecked(item)}
               />
               <label>{item}</label>
            </div>
         ))
      }
   </div>)
});