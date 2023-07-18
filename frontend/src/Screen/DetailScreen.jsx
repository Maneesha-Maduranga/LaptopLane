import Rating from '../Components/Rating';
import { BiComment, BiSend } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import { useGetLaptopDetailQuery } from '../slices/laptopApiSlice';
import { useCreateReviewMutation } from '../slices/reviewApiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import { api } from '../Utils/api';
function DetailScreen() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const { id } = useParams();
  const { data, isLoading } = useGetLaptopDetailQuery(id);

  const [createReview, { isError }] = useCreateReviewMutation();
  console.log(data);
  const [review, setReview] = useState({
    rating: 0,
    description: '',
    laptopId: id,
  });

  let lap;

  if (!isLoading) {
    lap = {
      _id: data.data._id,
      name: data.data.name,
      price: data.data.price,
      image: data.data.image,
    };
  }

  const handleAddToCart = () => {
    dispatch(addToCart(lap));
  };

  const handleSubmit = async () => {
    if (review.description == '') {
      toast.error('Please Add Comment');
      return;
    }
    try {
      const { error } = await createReview(review);
      setReview({ rating: 0, description: '' });
      if (!error) {
        toast.info('Review Submited');
      } else {
        toast.error(error.data.error);
      }
    } catch (e) {
      toast.error('Something Wrong Try Agian');
    }
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <section>
      <div className='relative mx-auto max-w-screen-xl px-4 py-8 mt-4'>
        <div className='grid grid-cols-1 gap-2 place-items-center md:items-center  md:grid-cols-2'>
          <div className='w-auto'>
            <img
              alt={data.data.name}
              src={`${api}/${data.data.image}`}
              className='aspect-square rounded-xl object-cover'
            />
          </div>

          <div className='sticky top-0'>
            <div className='mt-3 flex flex-col items-start gap-1'>
              <div className='max-w-[35ch]'>
                <h1 className='text-xl font-bold sm:text-2xl'>
                  {data.data.name}
                </h1>
              </div>
              <div>
                <p className='text-lg  font-bold'>{`රු: ${data.data.price}`}</p>
              </div>
            </div>

            <div className='mt-4'>
              <ul className='list-disc list-inside text-gray-900'>
                <li>{data.data.processor}</li>
                <li>{data.data.ram}</li>
                <li>{data.data.storage}</li>
                <li>{data.data.graphics}</li>
                <li>{data.data.battery}</li>
                <li>{data.data.brand}</li>
                <li>{data.data.warranty}</li>
              </ul>
            </div>
            <form className='mt-8'>
              <fieldset>
                <legend className='mb-1 text-base font-medium'>
                  Catergories
                </legend>

                <div className='flex flex-wrap gap-1'>
                  <span className='inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-sky-100 text-gray-800'>
                    {data.data.brand}
                  </span>
                  <span className='inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-sky-100 text-gray-800'>
                    {data.data.catergory}
                  </span>
                  <span className='inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-sky-100 text-gray-800'>
                    {data.data.processor}
                  </span>
                </div>
              </fieldset>
            </form>

            <div className='mt-8 '>
              <button
                type='submit'
                className='text-white bg-sky-400 p-2 hover:bg-white hover:text-sky-400'
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className='border-b border-gray-200'>
          <nav
            className='-mb-0.5 flex justify-center space-x-6'
            aria-label='Tabs'
            role='tablist'
          >
            <button
              type='button'
              className='hs-tab-active:font-semibold hs-tab-active:border-slate-800 hs-tab-active:text-slate-800 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-slate-950 active'
              id='horizontal-alignment-item-1'
              data-hs-tab='#horizontal-alignment-1'
              aria-controls='horizontal-alignment-1'
              role='tab'
            >
              Description
            </button>
            <button
              type='button'
              className='hs-tab-active:font-semibold hs-tab-active:border-slate-800 hs-tab-active:text-slate-800 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-slate-950'
              id='horizontal-alignment-item-2'
              data-hs-tab='#horizontal-alignment-2'
              aria-controls='horizontal-alignment-2'
              role='tab'
            >
              Reviews {data.data.reviews > 0 ? 0 : data.data.reviews.length}
            </button>
          </nav>
        </div>

        <div className='mt-3'>
          <div
            id='horizontal-alignment-1'
            role='tabpanel'
            aria-labelledby='horizontal-alignment-item-1'
          >
            <p className='text-black'>{data.data.description}</p>
          </div>
          <div
            id='horizontal-alignment-2'
            className='hidden'
            role='tabpanel'
            aria-labelledby='horizontal-alignment-item-2'
          >
            <div className='flex flex-col gap-8 md:flex-row justify-around'>
              <ul className='space-y-3 text-sm'>
                {data.data.reviews.length > 0 ? (
                  data.data.reviews.map((review) => {
                    return (
                      <li
                        className='flex space-x-3 items-center'
                        key={review._id}
                      >
                        <BiComment />
                        <span className='text-black'>{review.description}</span>
                      </li>
                    );
                  })
                ) : (
                  <div
                    className='p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
                    role='alert'
                  >
                    No Reviews
                  </div>
                )}
              </ul>
              {user ? (
                <form className='flex flex-col gap-2 border-2 p-2 md:w-1/2 border-gray-200'>
                  <div>
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Rating
                    </label>
                    <select
                      name='HeadlineAct'
                      id='HeadlineAct'
                      className='w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm'
                      value={review.rating}
                      onChange={(e) =>
                        setReview({ ...review, rating: e.target.value })
                      }
                    >
                      <option value=''>Please select</option>
                      <option value='1'>Very Dissatisfied</option>
                      <option value='2'>Dissatisfied</option>
                      <option value='3'>Neutral</option>
                      <option value='4'>Satisfied</option>
                      <option value='5'>Very Satisfied</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor='first_name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Comment
                    </label>
                    <textarea
                      className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm'
                      rows='2'
                      value={review.description}
                      onChange={(e) => {
                        setReview({ ...review, description: e.target.value });
                      }}
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type='button'
                      onClick={handleSubmit}
                      className=' p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-slate-800 text-white shadow-sm align-middle hover:bg-slate-600   transition-all text-sm '
                    >
                      Submit
                      <BiSend />
                    </button>
                  </div>
                </form>
              ) : (
                <div
                  className='p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
                  role='alert'
                >
                  <Link
                    className='font-medium border-b-2 border-blue-700 mx-2'
                    to='/auth/signin'
                  >
                    Sign In
                  </Link>
                  To Write a Review
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailScreen;
