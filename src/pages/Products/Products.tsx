import "./Products.scss"

import { useAppSelector } from '../../store/store';
import ProductsList from '../../components/ProductList';

export default function Products() {

   const { products, status } = useAppSelector((state) => {
      let products = state.data.products;

      return {
         products,
         status: state.data.status
      }
   });

   return (
      <div className='container mg'>

         <ProductsList products={products} status={status} />
      </div>
   );
}