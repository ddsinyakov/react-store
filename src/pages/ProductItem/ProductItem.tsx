import React from 'react'
import "./ProductItem.scss"

import { useParams } from 'react-router';
import { useAppSelector } from '../../store/store';
import AsyncStatus from '../../store/AsyncStatus';
import Spinner from '../../components/Spinner';


export default function ProductItem() {

   const { id } = useParams();
   let actualId: number;

   if (id) {
      actualId = Number(id);
   }

   const { products, status } = useAppSelector((state) => state.data)
   const product = products.find((item) => item.id === actualId);

   return (<>
      {
         status === AsyncStatus.Idle && product ? (
            <div className='container mg product' >

               <h2>{product.name}</h2>

               <div className='mainData'>
                  <div className="imgContainer">
                     <img src={product.img} alt="" />
                  </div>

                  <div>
                     <section className={product.available ? "available" : "available not"}>
                        {product.available ? "Есть в наличии" : "Отсутствует"}
                     </section>

                     <section className="priceData">
                        <div className={product.hasDiscount ? "price discount" : "price"}>
                           {product.hasDiscount ? product.discountPrice : product.price} ₴

                           {product.hasDiscount && (
                              <span className='actualPrice'>
                                 {product.price} ₴
                              </span>
                           )}
                        </div>

                        <button>
                           Купить
                        </button>
                     </section>

                     <section className='description'>
                        {product.description}
                     </section>
                  </div>
               </div>

            </div>
         ) : status === AsyncStatus.Loading ? (
            <Spinner />
         ) : (
            <div>
               Oops...
            </div>
         )
      }
   </>)
}