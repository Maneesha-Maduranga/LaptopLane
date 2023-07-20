import { Link } from 'react-router-dom';
import { api } from '../Utils/api';
import noImage from '../assets/noImage.png';

function OfferCard({ laptop }) {
  let discount = laptop.price - laptop.price * laptop.discount.discountPrice;
  let percentage = laptop.discount.discountPrice * 100;

  return (
    <Link
      className='relative flex  flex-col h-auto w-56 group  items-center text-center mx-2 p-1 border-2 rounded-lg border-sky-100'
      to={`/products/details/${laptop._id}`}
    >
      <div>
        <img
          src={laptop.image ? `${api}${laptop.image}` : noImage}
          alt=''
          className='h-40  opacity-100'
        />
        <span className='absolute top-5 left-5 -rotate-45 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-sky-500 text-white'>
          Hot
        </span>
        <span className='absolute top-32 left-5  inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-yellow-300 opacity-90 text-black group-hover:opacity-0'>
          {`-${percentage}%`}
        </span>
      </div>

      <div className='text-gray-900'>
        <h3 className='text-sm font-semibold'>{laptop.name}</h3>
        <div className='flex justify-center gap-1'>
          <p className='mt-1.5 tracking-wide text-gray-900 text-xs font-semibold'>{`රු: ${discount}.00`}</p>
          <p className='mt-1.5 tracking-wide text-gray-900 text-xs line-through'>{`රු: ${laptop.price}.00`}</p>
        </div>
      </div>
      <button className='bg-sky-400 w-full py-1 text-sm  opacity-0 group-hover:opacity-90'>
        Add to Cart
      </button>
    </Link>
  );
}

export default OfferCard;
