import { BsSearch } from 'react-icons/bs';

function SearchBar() {
  return (
    <div className='flex rounded-md shadow-sm'>
      <input
        type='text'
        className='py-1 px-1 border-2 border-slate-900 shadow-sm rounded-l-md text-sm focus:z-10'
      />
      <button
        type='button'
        className='inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-r-md border border-transparent font-semibold bg-slate-900 hover:bg-slate-700 focus:z-10 focus:outline-none focus:ring-2 transition-all text-sm'
      >
        <BsSearch color='white' />
      </button>
    </div>
  );
}

export default SearchBar;
