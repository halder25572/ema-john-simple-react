import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Order from './components/Order/Order';
import { productAndCartLoader } from './components/loaders/ProductAndCartLoader';

function App() {
  // use react router
  const router = createBrowserRouter([
    {
      // start parent router
      path: '/',
      element: <Main></Main>, children: [
        // start children router
        {
          path: '/shop',
            loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },

        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        
        {
          path: '/about',
          element: <About></About>
        },

        {
          path: '/order',
            loader: productAndCartLoader,
          element: <Order></Order>
        },
        // end children router
      ]
    }
    // end parent router
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
