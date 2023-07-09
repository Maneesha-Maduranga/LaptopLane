import { useEffect } from 'react';
import Steps from '../Components/Steps';
import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCreateOrderMutation } from '../slices/orderApiSlice';

function OrderDetailScreen() {
  const { cartItems, amount, total, shippingAddress } = useSelector(
    (state) => state.cart
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!shippingAddress) {
      navigate('/checkout');
    }
    if (!cartItems || !amount) {
      navigate('/cart');
    }
  }, [shippingAddress, cartItems, amount]);

  const [createOrder, { error, isError }] = useCreateOrderMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createOrder({
      orderItems: cartItems,
      shippingAddress: shippingAddress,
      amount: amount,
      total: total,
    }).unwrap();
    console.log(res);
  };

  return (
    <>
      <section>
        <div className='bg-white pt-12 md:pt-24'>
          <Steps addres={true} />
        </div>

        <div className='mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2'>
          <div className='pt-5 md:pt-10'>
            <div className='mx-auto max-w-lg space-y-8 px-4 lg:px-8'>
              <p className=' text-sm text-gray-600'>Total Price</p>

              <p className='text-2xl font-medium tracking-tight text-gray-900'>
                {`$ ${amount}`}
              </p>

              <div>
                <div className='flow-root'>
                  <ul className='-my-4 divide-y divide-gray-100'>
                    {cartItems &&
                      cartItems.map((item) => (
                        <div key={item._id}>
                          <li className='flex items-center gap-4'>
                            <img
                              src={item.image}
                              alt={item.name}
                              className='h-16 w-16 rounded object-cover'
                            />

                            <div>
                              <h3 className='text-sm text-gray-900'>
                                {item.name}
                              </h3>

                              <dl className='mt-0.5 space-y-px text-[10px] text-gray-600'>
                                <div>
                                  <dt className='inline'>Price:</dt>
                                  <dd className='inline'>{`රු: ${item.price}`}</dd>
                                </div>
                              </dl>
                            </div>

                            <div className='flex flex-1 items-center justify-end gap-2'>
                              <label className='sr-only'>Quantity</label>
                              <div className='flex items-center'>
                                <input
                                  type='number'
                                  min='1'
                                  value='1'
                                  readOnly
                                  className='h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
                                />
                              </div>
                            </div>
                          </li>
                        </div>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='p-5 md:p-10'>
            <div className='mx-auto max-w-lg px-4 lg:px-8'>
              <form className='grid grid-cols-6 gap-4' onSubmit={handleSubmit}>
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
                    readOnly
                    value={shippingAddress.address}
                    className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
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
                    readOnly
                    value={shippingAddress.city}
                    className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
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
                    readOnly
                    value={shippingAddress.state}
                    className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
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
                    readOnly
                    value={shippingAddress.postalCode}
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
                    readOnly
                    value={shippingAddress.country}
                    id='country'
                    className='mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                  />
                </div>
                <div className='col-span-6'>
                  <button className='block w-full rounded-md bg-slate-900 p-2.5 text-sm text-white transition hover:shadow-lg'>
                    PROCEED TO PAY 💸
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderDetailScreen;
