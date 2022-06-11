import React from 'react';
import AsyncStatus from '../../store/AsyncStatus';
import IProduct from "../../models/IProduct"

interface IProps {
   products: IProduct[],
   status: AsyncStatus
}

function ProductsList({ products, status }: IProps) {


   return (<div>
      {
         status === AsyncStatus.Idle ? (
            <ul>
               {products.map((item) => (<div key={item.id}>
                  <div>{item.name}</div>
               </div>))}
            </ul>
         ) : status === AsyncStatus.Loading ? (
            <div>
               Loading...
            </div>
         ) : (
            <div>

            </div>
         )
      }
   </div>);
}

export default ProductsList;