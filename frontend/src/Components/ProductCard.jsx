import { BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { api } from '../Utils/api';
import noImage from '../assets/noImage.png';

function ProductCard({ laptop }) {
  return (
    <Link
      to={`/products/details/${laptop._id}`}
      className='group relative block overflow-hidden border-2 border-b-gray-200'
    >
      <img
        src={laptop.image ? `${api}/${laptop.image}` : noImage}
        alt={laptop.name}
        className='h-60 lg:64 w-full object-cover transition duration-500 group-hover:scale-105 '
      />

      <div className='relative border border-gray-100 bg-white p-4'>
        {laptop.catergory === 'Consumer' && (
          <span className='whitespace-nowrap bg-sky-300 px-3 py-1.5  text-base file:font-medium text-white'>
            Consumer
          </span>
        )}
        {laptop.catergory === 'Gaming' && (
          <span className='whitespace-nowrap bg-red-600 px-3 py-1.5 text-base font-medium text-white'>
            Gaming
          </span>
        )}
        {laptop.catergory === 'Business' && (
          <span className='whitespace-nowrap bg-lime-300 px-3 py-1.5 text-base font-medium text-white'>
            Business
          </span>
        )}
        <h3 className='text-lg font-medium text-gray-900 my-2'>
          {`රු: ${laptop.price}`}
        </h3>

        <p className='mt-1.5 text-sm text-gray-700'>{laptop.name}</p>

        <form className='mt-4'>
          <button className='block w-full rounded bg-sky-500 p-4 text-sm font-medium transition hover:scale-105 text-white'>
            Add to Cart
          </button>
        </form>
      </div>
    </Link>
  );
}

export default ProductCard;
