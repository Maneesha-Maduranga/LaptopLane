import { useEffect, useState } from 'react';
import Steps from '../Components/Steps';
import { useSelector } from 'react-redux';
import { api } from '../Utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGetSingleOrderQuery } from '../slices/orderApiSlice';

import axios from 'axios';

function PaymentScreen() {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleOrderQuery(id);

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // console.log(data, isLoading);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (first_name.length == 0 || last_name.length == 0) {
  //     toast.warn('Plaese Fill User Name');
  //     return;
  //   }
  //   if (email.length == 0 || phone.length == 0) {
  //     toast.warn('Plaese Fill User Details');
  //     return;
  //   }

  // };

  if (!isLoading) {
    let payment = {
      sandbox: true,
      merchant_id: data.data, // Replace your Merchant ID
      return_url: undefined, // Important
      cancel_url: undefined, // Important
      notify_url: 'http://sample.com/notify',
      order_id: 'ItemNo12345',
      items: 'Door bell wireles',
      amount: '1000.00',
      currency: 'LKR',
      hash: '45D3CBA93E9F2189BD630ADFE19AA6DC',
      first_name: 'Saman',
      last_name: 'Perera',
      email: 'samanp@gmail.com',
      phone: '0771234567',
      address: 'No.1, Galle Road',
      city: 'Colombo',
      country: 'Sri Lanka',
      delivery_address: 'No. 46, Galle road, Kalutara South',
      delivery_city: 'Kalutara',
      delivery_country: 'Sri Lanka',
      custom_1: '',
      custom_2: '',
    };
  }

  return (
    <section>
      <div className='bg-white pt-12 md:pt-24'>
        <Steps addres={true} summary={true} />
      </div>
      <div className='flex flex-col mx-auto container max-w-sm'>
        {!isLoading && (
          <form className='grid grid-cols-6 gap-4' id='my-form'>
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
              <div
                className='p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
                role='alert'
              >
                <button
                  className='font-medium border-b-2 border-blue-700 mx-2'
                  type='submit'
                >
                  Not Paid
                </button>
                Click To Paid
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default PaymentScreen;
