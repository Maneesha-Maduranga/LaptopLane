import { useState } from 'react';

function PriceSlider() {
  const [price, setPrice] = useState(0);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    console.log(price);
  };
  return (
    <div className='w-full  py-2'>
      <label
        htmlFor='price-range'
        className='font-semibold text-base text-gray-900 my-2'
      >
        Fillter By Price
      </label>
      <input
        id='price-range'
        type='range'
        min='0'
        max='500000'
        step='1'
        value={price}
        onChange={handlePriceChange}
        className='w-full'
      />
      <div className='flex justify-between'>
        <span className='text-xs text-gray-600'>Price: රු:{price}</span>
        <span className='text-xs text-gray-600'>Max: රු:500,000</span>
      </div>
    </div>
  );
}

export default PriceSlider;
