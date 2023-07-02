import Rating from '../Components/Rating';
import { BiComment, BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetailScreen() {
  const [laptop, setLaptop] = useState({});
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`/api/laptop/${id}`);
      const { data } = await response.data;
      // console.log(data);
      setLaptop(data);
    };
    fetchProducts();
  }, []);

  return (
    <section>
      <div className='relative mx-auto max-w-screen-xl px-4 py-8'>
        <div className='grid grid-cols-1 items-start gap-8 md:grid-cols-2'>
          <div className='w-auto'>
            <img
              alt={laptop.name}
              src={laptop.image}
              className='aspect-square w-full rounded-xl object-cover'
            />
          </div>

          <div className='sticky top-0'>
            <div className='mt-8 flex justify-between'>
              <div className='max-w-[35ch] space-y-2'>
                <h1 className='text-xl font-bold sm:text-2xl'>{laptop.name}</h1>

                <div className='-ms-0.5 flex'>
                  <Rating />
                </div>
              </div>

              <p className='text-lg font-bold'>{`රු: ${laptop.price}}`}</p>
            </div>

            <div className='mt-4'>
              <ul className='list-disc list-inside text-gray-900'>
                <li>{laptop.processor}</li>
                <li>{laptop.ram}</li>
                <li>{laptop.storage}</li>
                <li>{laptop.graphics}</li>
                <li>{laptop.battery}</li>
              </ul>
            </div>

            <div className='mt-8 flex gap-4'>
              <div>
                <button
                  onClick={() => {
                    if (quantity == 0) {
                      return;
                    }
                    setQuantity(quantity - 1);
                  }}
                >
                  <BiChevronLeft />
                </button>
                <input
                  type='number'
                  readOnly
                  value={quantity}
                  className='w-12 rounded border-2 border-slate-600 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
                />
                <button
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  <BiChevronRight />
                </button>
              </div>

              <button
                type='submit'
                className='border-2 rounded-full text-white bg-slate-900 p-3'
              >
                Add to Cart
              </button>
            </div>

            {/* Tab Section */}
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
                  Reviews
                </button>
              </nav>
            </div>

            <div className='mt-3'>
              <div
                id='horizontal-alignment-1'
                role='tabpanel'
                aria-labelledby='horizontal-alignment-item-1'
              >
                <p className='text-black'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo quis impedit dignissimos itaque molestias harum
                  assumenda est sit quas? Cum omnis, amet mollitia quaerat optio
                  a quis minus deleniti dolores?
                </p>
              </div>
              <div
                id='horizontal-alignment-2'
                className='hidden'
                role='tabpanel'
                aria-labelledby='horizontal-alignment-item-2'
              >
                <ul className='space-y-3 text-sm'>
                  <li className='flex space-x-3 items-center'>
                    <BiComment />
                    <span className='text-black'>
                      Great Revamp! So excited make it.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailScreen;
