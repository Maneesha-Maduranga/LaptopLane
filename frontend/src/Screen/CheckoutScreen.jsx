import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Steps from '../Components/Steps';
import { saveShippingAddress } from '../slices/cartSlice';

function CheckoutScreen() {
  const { shippingAddress } = useSelector((state) => state.cart);
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [shipaddress, setShipAddress] = useState({
    address: shippingAddress?.address || '',
    city: shippingAddress?.city || '',
    state: shippingAddress?.state || '',
    postalCode: shippingAddress?.postalCode || '',
    country: shippingAddress?.country || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress(shipaddress));
  };

  const handleClick = () => {
    navigate('/orderDetail');
  };

  return (
    <div className='bg-white py-12 md:py-24'>
      <Steps />
      <div className='mx-auto max-w-lg px-4 lg:px-8'>
        <form className='grid grid-cols-6 gap-4' onSubmit={handleSubmit}>
          <div className='col-span-6'>
            <label
              htmlFor='Email'
              className='block text-xs font-medium text-gray-700'
            >
              Email
            </label>

            <input
              type='Email'
              id='Email'
              className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className='col-span-6'>
            <label
              htmlFor='address'
              className='block text-xs font-medium text-gray-700'
            >
              Address
            </label>

            <input
              type='text'
              id='address'
              className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
              value={shipaddress.address}
              onChange={(e) => {
                setShipAddress({ ...shipaddress, address: e.target.value });
              }}
            />
          </div>

          <div className='col-span-6'>
            <label
              htmlFor='city'
              className='block text-xs font-medium text-gray-700'
            >
              City
            </label>

            <input
              type='text'
              id='Phone'
              className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
              value={shipaddress.city}
              onChange={(e) => {
                setShipAddress({ ...shipaddress, city: e.target.value });
              }}
            />
          </div>

          <div className='col-span-6'>
            <label
              htmlFor='state'
              className='block text-xs font-medium text-gray-700'
            >
              State
            </label>

            <input
              type='text'
              id='state'
              className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
              value={shipaddress.state}
              onChange={(e) => {
                setShipAddress({ ...shipaddress, state: e.target.value });
              }}
            />
          </div>

          <div className='col-span-6'>
            <label
              htmlFor='postal'
              className='block text-xs font-medium text-gray-700'
            >
              Postal Code
            </label>

            <input
              type='text'
              id='postal'
              className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
              value={shipaddress.postalCode}
              onChange={(e) => {
                setShipAddress({ ...shipaddress, postalCode: e.target.value });
              }}
            />
          </div>

          <div className='col-span-6'>
            <label
              htmlFor='country'
              className='block text-xs font-medium text-gray-700'
            >
              Country
            </label>

            <input
              type='text'
              id='country'
              className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
              value={shipaddress.country}
              onChange={(e) => {
                setShipAddress({ ...shipaddress, country: e.target.value });
              }}
            />
          </div>

          <div className='col-span-6'>
            <button
              className='block w-full rounded-md bg-slate-900 p-2.5 text-sm text-white transition hover:shadow-lg'
              onClick={handleClick}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutScreen;
