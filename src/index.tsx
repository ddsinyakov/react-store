import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// redux 
import { Provider } from 'react-redux';
import { store } from './store/store';

// routing
import { BrowserRouter } from 'react-router-dom';

// root create 
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Provider>
   </React.StrictMode >
);