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
import CheckoutScreen from './Screen/CheckoutScreen.jsx';
import ProtectedLayout from './Layout/protectedLayout.jsx';
import OrderDetailScreen from './Screen/OrderDetailScreen';
import AdminLayout from './Layout/AdminLayout.jsx';
import AboutScreen from './Screen/AboutScreen.jsx';
import ContactScreen from './Screen/ContactScreen.jsx';
import ProductsScreen from './Screen/Admin/ProductsScreen.jsx';
import ErrorPage from './Screen/ErrorPage';
import AddProduct from './Screen/Admin/AddProducts.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<HomeScreen />} />
      <Route path='/products/' element={<ProductScreen />} />
      <Route path='/about' element={<AboutScreen />} />
      <Route path='/contact' element={<ContactScreen />} />
      <Route path='/products/page/:page' element={<ProductScreen />} />
      <Route path='/products/details/:id' element={<DetailScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/auth/signin' element={<SignInScreen />} />
      <Route path='/auth/signup' element={<SignUpScreen />} />
      <Route path='' element={<ProtectedLayout />}>
        <Route path='/checkout' element={<CheckoutScreen />} />
        <Route path='/orderDetail' element={<OrderDetailScreen />} />
      </Route>
      <Route path='' element={<AdminLayout />}>
        <Route path='/admin/products' element={<ProductsScreen />} />
        <Route path='/admin/products/add' element={<AddProduct />} />
      </Route>
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
