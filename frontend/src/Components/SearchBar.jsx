import { useState } from 'react';
import { BsSearch, BsEraser } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';

function SearchBar() {
  const [search, setSearch] = useState('');
  const [searchParams, setsearchParams] = useSearchParams();
  const [erase, setErase] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search) {
      searchParams.set('search', search);
      setsearchParams(searchParams);
    }
  };

  const handleClick = () => {
    setErase(!erase);

    searchParams.delete('search');
    setSearch('');
    setsearchParams(searchParams);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor='default-search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
      >
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <BsSearch />
        </div>
        <input
          type='search'
          id='default-search'
          className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50'
          placeholder='Search...'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {erase ? (
          <button
            type='submit'
            className='text-white absolute right-2.5 bottom-2.5 bg-sky-400 hover:bg-sky-200   font-medium rounded-lg text-sm px-2 py-2'
            onClick={() => {
              setErase(!erase);
            }}
          >
            Search
          </button>
        ) : (
          <button
            type='submit'
            className='text-white absolute right-2.5 bottom-2.5 bg-red-600 hover:bg-red-500  font-medium rounded-lg text-sm px-2 py-2'
            onClick={handleClick}
          >
            Clear
          </button>
        )}
      </div>
    </form>
  );
}

export default SearchBar;
