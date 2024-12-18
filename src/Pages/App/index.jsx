import { useRoutes, BrowserRouter } from 'react-router-dom'; 
import Home from '../Home/';
import Notfound from '../Notfound/';
import Account from '../Account/';
import Order from '../Order/';
import Orders from '../Orders/';
import Signin from '../Signin';
import Navbar from '../../Components/Navbar'

import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/account', element: <Account /> },
    { path: '/order', element: <Order /> },
    { path: '/orders', element: <Orders /> },
    { path: '/signin', element: <Signin /> },
    { path: '/*', element: <Notfound /> },
  ]);

  return routes
};




const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
   )
  // return (
  //   <div className='bg-slate-300'>
  //       Hello universe
  //       <Home />
  //       <Order />
  //       <Orders />
  //       <Account />
  //       <Signin />
  //       <Notfound />
  //   </div>
  // )
}

export default App
