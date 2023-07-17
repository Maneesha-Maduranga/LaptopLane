import buisness from '../assets/buisness.jpg';
import gaming from '../assets/gaming.jpg';
import consumer from '../assets/consumer.jpg';
import { brand } from '../Utils/brand';
import Brandcard from '../Components/BrandCard';

function HomeScreen() {
  return (
    <>
      <div className='flex flex-col gap-2'>
        {/* image Grid */}
        <div className='grid grid-rows-1 md:grid-cols-2 pt-12'>
          <div className='relative md:col-span-2'>
            <img src={buisness} alt='Laptop1' />
            <div className='absolute inset-y-0 left-0 w-1/3 bg-sky-400 text-black'>
              <div className='flex flex-col gap-10 items-center justify-center h-screen'>
                Discover the Power of Portability Find your perfect laptop
                companion at LaptopLane, where we bring you a world of
                cutting-edge technology and powerful computing in a portable
                package. Whether you're a student, professional, or gamer, we
                have the ideal laptop waiting for you.
              </div>
            </div>
          </div>
          <div className='relative'>
            <img src={gaming} alt='Laptop1' />
            <div className='absolute top-5  left-5 w-1/2 text-white text-3xl font-semibold text-center'>
              <div>Gaming Laptops</div>

              <button className='text-xs my-2  bg-sky-400 px-6 py-2 rounded-2xl hover:bg-white hover:text-sky-400'>
                Shop Now
              </button>
            </div>
          </div>
          <div className='relative'>
            <img src={consumer} alt='Laptop1' />
            <div className='absolute top-5  right-5 w-1/2 text-white  text-3xl font-semibold text-center'>
              <div>Consumer Laptops</div>

              <button className='text-xs my-2  bg-sky-400 px-6 py-2 rounded-2xl hover:bg-white hover:text-sky-400'>
                Shop Now
              </button>
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
            Latest Products
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
