import { useEffect, useState } from 'react';
import './styles/App.scss';

function App() {

   const [names, setNames] = useState([]);

   useEffect(() => {
      fetch("data.json")
         .then(response => response.json())
         .then(data => setNames(data.names))
   }, [])

   return (<>
      <h1>Store</h1>
      <ul className="App">
         {names.map((name, id) => <li key={id}>{name}</li>)}
      </ul>
   </>);
}

export default App;
