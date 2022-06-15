import React, { SetStateAction } from 'react'
import SortingMethods from '../../features/SortingOptions';
import "./SortingFilter.scss"

interface SortingFilterProps {
   setSortType: React.Dispatch<SetStateAction<string>>
}

export default function SortingFilter({ setSortType }: SortingFilterProps) {

   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSortType(event.currentTarget.value);
   }

   return (
      <div className="sortFilters">
         <select onChange={handleChange}>
            {SortingMethods.map((method, id) => (
               <option key={id} value={method.value}>{method.text}</option>)
            )}
         </select>
      </div>
   );
}