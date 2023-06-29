function Selection() {
  return (
    <>
      <select className='py-1 px-2 pr-9  border-gray-400 rounded-md text-sm mx-2'>
        <option value='0'>Sort By</option>
        <option value='1'>Price : Low to High</option>
        <option value='2'>Price : High to Low</option>
      </select>
    </>
  );
}

export default Selection;
