import { Link } from 'react-router-dom';

import buisness from '../assets/buisness.webp';
import gaming from '../assets/gaming.webp';
import consumer from '../assets/consumer.webp';
import Brandcard from '../Components/BrandCard';
import OfferCard from '../Components/OfferCard';
import HomeSkelton from '../Components/HomeSkelton';

import { brand } from '../Utils/brand';
import { useGetLaptopDiscountQuery } from '../slices/laptopApiSlice';

import { motion } from 'framer-motion';

function HomeScreen() {
  const { data, isLoading } = useGetLaptopDiscountQuery();

  return isLoading ? (
    <HomeSkelton />
  ) : (
    <>
      <div className='flex flex-col gap-2'>
        {/* image Grid */}
        <div className='grid grid-rows-1 md:grid-cols-2 pt-12 mt-14 md:mt-0'>
          <div className='relative md:col-span-2'>
            <img src={buisness} alt='Laptop1' className='top-10' />
            <div className='absolute top-0 left-0 w-2/3 lg:w-2/5 h-full bg-sky-200 opacity-80 p-10'>
              <div className='top-10  h-auto w-auto'>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.9,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <h1 className='text-3xl md:text-4xl lg:text-5xl text-left font-extrabold md:font-semibold text-sky-800'>
                    Discover the Power of Portability
                  </h1>
                </motion.div>
                <motion.p
                  className='hidden md:block text-left mt-5 text-lg font-semibold'
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.9,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  Find your perfect laptop companion at LaptopLane, where we
                  bring you a world of cutting-edge technology and powerful
                  computing in a portable package. Whether you're a student,
                  professional, or gamer, we have the ideal laptop waiting for
                  you.
                </motion.p>
              </div>
            </div>
          </div>
          <div className='relative'>
            <img src={gaming} alt='Laptop1' />
            <div className='absolute top-5  left-10 w-1/2 text-sky-400  font-semibold text-left opacity-90'>
              <div className='italic text-4xl lg:text-5xl  opacity-80'>
                Gaming Laptops
              </div>
              <Link to='/products'>
                <button className='text-xs my-2  bg-sky-400 px-6 py-2 rounded-2xl hover:bg-white text-white hover:text-sky-400'>
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
          <div className='relative'>
            <img src={consumer} alt='Laptop1' />
            <div className='absolute top-5  right-5 w-1/2 text-white  font-semibold text-right opacity-90'>
              <div className='italic text-4xl lg:text-5xl  opacity-90'>
                Consumer Laptops
              </div>
              <Link to='/products'>
                <button className='text-xs my-2  bg-sky-400 px-6 py-2 rounded-2xl hover:bg-white hover:text-sky-400'>
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Brand section */}
        <div>
          <div className='text-center italic text-2xl font-semibold text-sky-400'>
            Top brands
          </div>
          <div className='flex flex-col gap-1 md:flex-row items-center justify-evenly my-4'>
            {brand.map((item) => (
              <div key={item.id}>
                <Brandcard title={item.title} image={item.image} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className='text-center italic text-2xl font-semibold text-sky-400'>
            Special Offers
          </div>
          <div className='flex flex-col gap-1 md:flex-row items-center justify-evenly my-4'>
            {!isLoading &&
              data.data.map((item) => {
                return (
                  <div key={item._id}>
                    <OfferCard laptop={item} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
