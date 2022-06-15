import React from 'react'
import "./Filters.scss"

// interface FilterProps {

// }

export default function Filters() {


   return (
      <div className='filters'>

         <div className='accept'>
            <button>
               Применить
            </button>
         </div>

         <p>Цена</p>
         <div className='prices'>
            <input type="text" />
            <span> — </span>
            <input type="text" />
         </div>

         <p>Производитель</p>
         <div className="manufacturer">

         </div>
      </div >
   );
}