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
      setSearch('');
    }
  };

  const handleClick = () => {
    setErase(!erase);
    searchParams.delete('search');
    setsearchParams(searchParams);
  };

  return (
    <form
      className='pt-2 relative mx-auto text-gray-600 w-auto'
      onSubmit={handleSubmit}
    >
      <input
        className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
        name='search'
        placeholder='Search'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {erase ? (
        <button
          type='submit'
          className='absolute right-0 top-0 mt-5 mr-4'
          onClick={() => {
            setErase(!erase);
          }}
        >
          <BsSearch />
        </button>
      ) : (
        <button
          type='submit'
          className='absolute right-0 top-0 mt-3 mr-4 '
          onClick={handleClick}
        >
          <BsEraser color='red' size={28} />
        </button>
      )}
    </form>
  );
}

export default SearchBar;
