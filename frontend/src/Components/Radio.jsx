function Radio() {
  return (
    <>
      <h3 className='font-semibold text-base text-gray-900 my-2'>
        Stock Status
      </h3>
      <div className='flex gap-x-6'>
        <div className='flex'>
          <input
            type='radio'
            name='hs-radio-group'
            className='shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
            id='hs-radio-group-1'
          />
          <label
            htmlFor='hs-radio-group-1'
            className='text-sm text-gray-500 ml-2 dark:text-gray-400'
          >
            On Sale
          </label>
        </div>

        <div className='flex'>
          <input
            type='radio'
            name='hs-radio-group'
            className='shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
            id='hs-radio-group-2'
          />
          <label
            htmlFor='hs-radio-group-2'
            className='text-sm text-gray-500 ml-2 dark:text-gray-400'
          >
            In Stock
          </label>
        </div>
      </div>
    </>
  );
}

export default Radio;
