import { AiOutlineDelete } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import { api } from '../Utils/api';

import cartImg from '../assets/cart.png';

function CartScreen() {
  const { cartItems, amount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    navigate('/auth/signin?redirect=/checkout');
  };

  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 h-screen'>
        <div className='mx-auto max-w-3xl'>
          <header className='text-center'>
            <h1 className='text-xl font-bold text-gray-900 sm:text-3xl'>
              Your Cart
            </h1>
          </header>

          <div className='mt-8'>
            {cartItems.length > 0 ? (
              <>
                <ul className='space-y-4'>
                  {cartItems.map((item) => (
                    <div key={item._id}>
                      <li className='flex items-center gap-4'>
                        <img
                          src={`${api}/${item.image}`}
                          alt={item.name}
                          className='h-16 w-16 rounded object-cover'
                        />

                        <div>
                          <h3 className='text-sm text-gray-900'>{item.name}</h3>

                          <dl className='mt-0.5 space-y-px text-[10px] text-gray-600'>
                            <div>
                              <dt className='inline'>Price:</dt>
                              <dd className='inline'>{`රු: ${item.price}`}</dd>
                            </div>
                          </dl>
                        </div>

                        <div className='flex flex-1 items-center justify-end gap-2'>
                          <form>
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
                          </form>

                          <button
                            className='text-gray-600 transition hover:text-red-600'
                            onClick={() => {
                              handleRemoveItem(item._id);
                            }}
                          >
                            <span className='sr-only'>Remove item</span>
                            <AiOutlineDelete />
                          </button>
                        </div>
                      </li>
                    </div>
                  ))}
                </ul>
                <div className='mt-8 flex justify-end border-t border-gray-100 pt-8'>
                  <div className='w-screen max-w-lg space-y-4'>
                    <dl className='space-y-0.5 text-sm text-gray-700'>
                      <div className='flex justify-between'>
                        <dt>Subtotal</dt>
                        <dd>{amount}</dd>
                      </div>

                      <div className='flex justify-between !text-base font-medium'>
                        <dt>Total</dt>
                        <dd>{`රු: ${amount}.00`}</dd>
                      </div>
                    </dl>

                    <div className='flex justify-end gap-4 '>
                      <button
                        className='block rounded bg-slate-900 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600'
                        onClick={handleDeleteCart}
                      >
                        Clear Cart
                      </button>
                      <button
                        className='block rounded bg-slate-900 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600'
                        onClick={handleCheckout}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className='text-center'>
                <h1 className='text-2xl  border-b-2 border-b-slate-900'>
                  No Products in The Cart
                </h1>
                <img src={cartImg} alt='cart' className='w-32 mx-auto my-20' />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartScreen;
