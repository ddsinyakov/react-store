import React from 'react';
import AsyncStatus from '../../store/AsyncStatus';

interface IProps {
   products: [],
   status: AsyncStatus
}

function ProductsList({ products, status }: IProps) {


   return (<div>
      {
         status === AsyncStatus.Idle ? (
            <ul>
               {/* {products.map((item) => (<div key={item.id}>

               </div>))} */}
            </ul>
         ) : status === AsyncStatus.Loading ? (
            <div>

            </div>
         ) : (
            <div>

            </div>
         )
      }
   </div>);
}

export default ProductsList;