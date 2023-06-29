function Sorting({ name, products }) {
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
            <button>{laptop.title}</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Sorting;
