import { useSearchParams } from 'react-router-dom';

function Selection() {
  const [searchParams, setsearchParams] = useSearchParams();

  return (
    <>
      <select
        className='py-1 px-2 pr-9  border-gray-400 rounded-md text-sm mx-2'
        onChange={(e) => {
          if (e.target.value == '') {
            searchParams.delete('sort');
          }
          searchParams.set('sort', e.target.value);
          setsearchParams(searchParams);
        }}
      >
        <option value=''>Sort By</option>
        <option value='lowtoHigh'>Price : Low to High</option>
        <option value='hightoLow'>Price : High to Low</option>
      </select>
    </>
  );
}

export default Selection;
