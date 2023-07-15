import noData from '../assets/noData.png';

function NoProduct() {
  return (
    <div className='text-center'>
      <img
        src={noData}
        alt='NO DATA'
        className='w-auto h-auto mx-auto text-black sm:h-64'
      />

      <h1 className='mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
        Uh-oh! No Laptop Found
      </h1>

      <p className='mt-4 text-gray-500'>
        Try searching again, or clear the fillter start from the beginning.
      </p>
    </div>
  );
}

export default NoProduct;
