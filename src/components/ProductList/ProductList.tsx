import React from 'react'
import "./ProductList.scss"

import AsyncStatus from '../../store/AsyncStatus';
import IProduct from "../../models/IProduct"
import ProductCard from '../ProductCard';
import Spinner from '../Spinner';

interface IProductListProps {
   products: IProduct[],
   status: AsyncStatus
}

export default function ProductsList({ products, status }: IProductListProps) {
   return (<div className='container mg'>
      {
         status === AsyncStatus.Idle ? (
            <div className='productList'>
               {products.map((item) =>
                  <ProductCard product={item} key={item.id} />
               )}
            </div>
         ) : status === AsyncStatus.Loading ? (
            <Spinner />
         ) : (
            <div>
               Oops...
            </div>
         )
      }
   </div>);
}