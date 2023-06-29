import Rating from '../Components/Rating';
import { BiComment, BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useState } from 'react';

function DetailScreen() {
  const [quantity, setQuantity] = useState(1);

  return (
    <section>
      <div className='relative mx-auto max-w-screen-xl px-4 py-8'>
        <div className='grid grid-cols-1 items-start gap-8 md:grid-cols-2'>
          <div className='w-auto'>
            <img
              alt='Les Paul'
              src='https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              className='aspect-square w-full rounded-xl object-cover'
            />
          </div>

          <div className='sticky top-0'>
            <div className='mt-8 flex justify-between'>
              <div className='max-w-[35ch] space-y-2'>
                <h1 className='text-xl font-bold sm:text-2xl'>
                  HP ENVY x360 14-es0013dx Core i5 13th Gen Touch Screen 2-in-1
                  Laptop
                </h1>

                <div className='-ms-0.5 flex'>
                  <Rating />
                </div>
              </div>

              <p className='text-lg font-bold'>රු275,000.00</p>
            </div>

            <div className='mt-4'>
              <ul className='list-disc list-inside text-gray-900'>
                <li>13th Generation Intel Core i5-1335U Processor</li>
                <li>14″ FHD IPS Touch Screen 250 nits, 45% NTSC</li>
                <li>512 GB PCIe NVMe SSD</li>
                <li>8 GB DDR4-3200 Memory</li>
                <li>3-cell, 51 Wh Li-ion</li>
                <li>Windows 11 Home</li>
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
