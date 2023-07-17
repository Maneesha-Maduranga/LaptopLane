function NoProduct() {
  return (
    <div className='flex flex-col mx-10  h-screen bg-white'>
      <h1 className='tracking-widest text-gray-500 uppercase'>
        404 | Not Found
      </h1>
      <p>
        🙄 No items matched your search criteria. Try widening your search or
        Clear Fillters.
      </p>
    </div>
  );
}

export default NoProduct;
