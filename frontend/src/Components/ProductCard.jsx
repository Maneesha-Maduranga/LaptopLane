import { BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function ProductCard({ laptop }) {
  return (
    <Link
      to={`/products/details/${laptop._id}`}
      className='group relative block overflow-hidden border-2 border-b-gray-200'
    >
      <button className='absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75'>
        <span className='sr-only'>Wishlist</span>

        <BsHeart color='red' />
      </button>

      <img
        src={laptop.image}
        alt={laptop.name}
        className='h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72'
      />

      <div className='relative border border-gray-100 bg-white p-6'>
        <span className='whitespace-nowrap bg-amber-400 px-3 py-1.5 text-xs font-medium'>
          New
        </span>

        <h3 className='mt-4 text-lg font-medium text-gray-900'>
          {' '}
          {`රු: ${laptop.price}`}
        </h3>

        <p className='mt-1.5 text-sm text-gray-700'>{laptop.name}</p>

        <form className='mt-4'>
          <button className='block w-full rounded bg-slate-900 p-4 text-sm font-medium transition hover:scale-105 text-white'>
            Add to Cart
          </button>
        </form>
      </div>
    </Link>
  );
}

export default ProductCard;
