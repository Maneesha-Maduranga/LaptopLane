import { useState } from 'react';
import { useEffect } from 'react';

import { api } from '../Utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../slices/cartSlice';

import {
  useGetSingleOrderQuery,
  useSetOrderToPayMutation,
} from '../slices/orderApiSlice';

import Steps from '../Components/Steps';
import Spinner from '../Components/Spinner';
function PaymentScreen() {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleOrderQuery(id);
  const [setOrderToPay] = useSetOrderToPayMutation();
  const dispatch = useDispatch();

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  let payment;

  if (!isLoading) {
    payment = {
      sandbox: true,
      merchant_id: '1223552',
      return_url: 'https://laptoplane.onrender.com/', // Important
      cancel_url: 'https://laptoplane.onrender.com/', // Important
      notify_url: 'http://sample.com/notify',
      order_id: data.data.orderId,
      items: data.data.orderId,
      amount: data.data.amount,
      currency: 'LKR',
      hash: data.data.clientSecret,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      address: data.data.shippingAddress.address,
      city: data.data.shippingAddress.city,
      country: data.data.shippingAddress.country,
    };
  }

  window.payhere.onCompleted = async function onCompleted(orderId) {
    const res = await setOrderToPay(id);

    toast.success('Payment SucceFull');
    dispatch(clearCart());
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
  };

  useEffect(() => {}, [first_name, last_name, email, phone]);

  window.payhere.onDismissed = function onDismissed() {
    toast.info('Payment Cancelled');
  };

  window.payhere.onError = function onError(error) {
    toast.error(error);
  };

  const handleClick = () => {
    if (last_name.length == 0 || first_name.length == 0) {
      toast.warn('Please Fill User Names');
      return;
    }
    if (email.length == 0 || phone.length == 0) {
      toast.warn('Please Fill User Details');
      return;
    }
    window.payhere.startPayment(payment);
  };

  return (
    <section>
      <div className='bg-white pt-12 md:pt-24 mt-20 lg:mt-0'>
        <Steps addres={true} summary={true} />
      </div>
      <div className='flex flex-col gap-2 items-center mt-10 lg:flex-row justify-evenly '>
        {isLoading && <Spinner />}
        <div className='w-64 h-60 p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Test Card Number
          </h5>
          <p className='font-normal text-gray-700 dark:text-gray-400 my-3 bg-sky-200'>
            To Test The payment cart Price shuold Below රු:50000.00
          </p>
          <p className='font-normal text-gray-700 dark:text-gray-400 my-3'>
            Visa : 4916217501611292
          </p>
          <p className='font-normal text-gray-700 dark:text-gray-400'>
            rest of you can enter any valid data.
          </p>
        </div>
        {!isLoading && (
          <div>
            <form
              className='grid grid-cols-6 gap-4'
              id='my-form'
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Custormer Details */}
              <div className='col-span-3'>
                <label
                  htmlFor='address'
                  className='block text-xs font-medium text-gray-700'
                >
                  First Name
                </label>

                <input
                  type='text'
                  name='first_name'
                  id='address'
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                />
              </div>
              <div className='col-span-3'>
                <label
                  htmlFor='address'
                  className='block text-xs font-medium text-gray-700'
                >
                  Last Name
                </label>

                <input
                  type='text'
                  name='last_name'
                  id='address'
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                />
              </div>

              <div className='col-span-3'>
                <label
                  htmlFor='email'
                  className='block text-xs font-medium text-gray-700'
                >
                  Email
                </label>

                <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                />
              </div>
              <div className='col-span-3'>
                <label
                  htmlFor='address'
                  className='block text-xs font-medium text-gray-700'
                >
                  Telphone
                </label>

                <input
                  type='text'
                  name='phone'
                  id='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                />
              </div>
              <div className='col-span-3'>
                <label
                  htmlFor='address'
                  className='block text-xs font-medium text-gray-700'
                >
                  Address
                </label>

                <input
                  type='text'
                  id='address'
                  name='address'
                  readOnly
                  value={data.data.shippingAddress.address}
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                />
              </div>

              <div className='col-span-3'>
                <label
                  htmlFor='city'
                  className='block text-xs font-medium text-gray-700'
                >
                  City
                </label>

                <input
                  type='text'
                  id='city'
                  name='city'
                  readOnly
                  value={data.data.shippingAddress.city}
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                />
              </div>
              <div className='col-span-4'>
                <label
                  htmlFor='state'
                  className='block text-xs font-medium text-gray-700'
                >
                  State
                </label>

                <input
                  type='text'
                  id='state'
                  readOnly
                  value={data.data.shippingAddress.state}
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                />
              </div>
              <div className='col-span-2'>
                <label
                  htmlFor='postal'
                  className='block text-xs font-medium text-gray-700'
                >
                  Postal Code
                </label>

                <input
                  type='text'
                  readOnly
                  value={data.data.shippingAddress.postalCode}
                  id='postal'
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
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
                  name='country'
                  readOnly
                  value={data.data.shippingAddress.country}
                  id='country'
                  className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                />
              </div>
              <div className='col-span-6'>
                <label
                  htmlFor='country'
                  className='block text-xs font-medium text-gray-700'
                >
                  Order Status
                </label>
                {data.data.status == 'paid' ? (
                  <div
                    className='p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
                    role='alert'
                  >
                    Order Paid
                  </div>
                ) : (
                  <div
                    className='p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
                    role='alert'
                  >
                    <button
                      className='font-medium border-b-2 border-blue-700 mx-2'
                      type='submit'
                      onClick={handleClick}
                    >
                      Not Paid
                    </button>
                    Click To Paid
                  </div>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

export default PaymentScreen;
