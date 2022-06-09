import { useEffect } from 'react';
import './styles/App.scss';

import { useAppDispatch, useAppSelector } from './store/store';
import { fetchDataAsync } from './store/dataSlice';
import AsyncStatus from './store/AsyncStatus';

function App() {

   const { products, status } = useAppSelector((state) => state.data)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(fetchDataAsync())
   }, [dispatch])

   return (<>
      <h1>Store</h1>

      {status !== AsyncStatus.Failed ? (
         <ul className="App">
            {products.map((product, id) => <li key={id}>{product}</li>)}
         </ul>
      ) : (
         <div>
            Error!
         </div>
      )}

   </>);
}

export default App;
