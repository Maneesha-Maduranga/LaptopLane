import { useSearchParams } from 'react-router-dom';

function Sorting({ name, products }) {
  const [searchParams, setsearchParams] = useSearchParams();

  const handleClick = (item) => {
    if (name === 'Catergory') {
      searchParams.set('catergory', item);
      setsearchParams(searchParams);
    } else if (name == 'FILTER BY PROCESSOR') {
      searchParams.set('processor', item);
      setsearchParams(searchParams);
    } else if (name == 'FILTER BY MEMORY') {
      searchParams.set('ram', item);
      setsearchParams(searchParams);
    } else {
      searchParams.set('brand', item);
      setsearchParams(searchParams);
    }
  };

  return (
    <div>
      <h3 className='font-semibold text-base text-gray-900 my-2'>{name}</h3>
      {products.map((laptop) => (
        <ul
          role='list'
          className='px-1 py-1 font-medium text-gray-900'
          key={laptop.id}
        >
          <li>
            <button
              onClick={() => {
                handleClick(laptop.title);
              }}
            >
              {laptop.title}
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Sorting;
