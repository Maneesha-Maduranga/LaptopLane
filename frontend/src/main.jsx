import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import('preline');

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import ProductScreen from './Screen/ProductScreen.jsx';
import DetailScreen from './Screen/DetailScreen.jsx';
import HomeScreen from './Screen/HomeScreen.jsx';

//redux
import { store } from './store';
import { Provider } from 'react-redux';
import SignInScreen from './Screen/SignInScreen';
import SignUpScreen from './Screen/SignUpScreen';
import CartScreen from './Screen/CartScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<HomeScreen />} />
      <Route path='/products' element={<ProductScreen />} />
      <Route path='/products/:id' element={<DetailScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/auth/signin' element={<SignInScreen />} />
      <Route path='/auth/signup' element={<SignUpScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
