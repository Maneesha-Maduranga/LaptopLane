import { useState } from 'react';
import { BsSearch, BsEraser } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';
function SearchBar() {
  const [search, setSearch] = useState('');
  const [searchParams, setsearchParams] = useSearchParams();

  const handleClick = () => {
    if (search) {
      searchParams.set('search', search);
      setsearchParams(searchParams);
      setSearch('');
    }
  };

  return (
    <div className='flex rounded-md shadow-sm'>
      <input
        type='text'
        className='py-1 px-1 border-2 border-slate-900 shadow-sm rounded-l-md text-sm focus:z-10'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        type='button'
        className='inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-r-md border border-transparent font-semibold bg-slate-900 hover:bg-slate-700 focus:z-10 focus:outline-none focus:ring-2 transition-all text-sm'
        onClick={handleClick}
      >
        <BsSearch color='white' />
      </button>
    </div>
  );
}

export default SearchBar;
