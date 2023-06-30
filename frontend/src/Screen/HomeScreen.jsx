import { TfiLayoutGrid4, TfiLayoutGrid3, TfiFilter } from 'react-icons/tfi';

import { AiOutlineClose } from 'react-icons/ai';

import Lap from '../assets/laptop.png';

import {
  fillterLaps,
  fillterBrand,
  fillterMemory,
  fillterProcesser,
} from '../Utils/fillter';

import Radio from '../Components/Radio';
import SearchBar from '../Components/SearchBar';
import Selection from '../Components/Selection';
import Sorting from '../Components/Sorting';
import ProductCard from '../Components/ProductCard';

import { useState, useEffect } from 'react';
import axios from 'axios';

function HomeScreen() {
  const [showFillter, setShowFillter] = useState(false);
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/laptop');
      const products = await response.data;
      console.log(products);
    };
    fetchProducts();
  }, []);

  return (
    <>
      {/* Mobile Filler Section */}
      <div
        className={
          showFillter
            ? `fixed top-0 right-0 h-screen overflow-y-auto shadow-xl bg-white z-20 ease-in-out duration-500`
            : ` bg-white z-20 ease-in-out duration-500 fixed right-[-100%]`
        }
      >
        <div className=' ml-auto flex h-full  max-w-xs flex-col  py-4 pb-12 '>
          <div className='flex items-center justify-between px-4'>
            <h2 className='text-lg font-medium text-gray-900'>Filters</h2>
            <button className='border-2 rounded-full text-white bg-slate-900 p-2'>
              Clear Fillters
            </button>
            <button
              type='button'
              className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400'
              onClick={() => {
                setShowFillter(!showFillter);
              }}
            >
              <AiOutlineClose size='28' />
            </button>
          </div>
          <form className='mt-4 flex flex-col px-4 gap-4'>
            <SearchBar />

            <Sorting name='Catergory' products={fillterLaps} />

            <Radio />

            <Sorting name='FILTER BY PROCESSOR' products={fillterProcesser} />

            <Sorting name='FILTER BY MEMORY' products={fillterMemory} />

            <Sorting name='FILTER BY BRAND' products={fillterBrand} />
          </form>
        </div>
      </div>

      <div className='container mx-auto px-4'>
        {/* Top section */}
        <div className='flex items-center justify-between border-b-2 border-gray-200 pb-4 pt-10 my-4'>
          <div className='flex'>
            <h1 className='text-3xl font-extrabold'>Laptops</h1>
            <img src={Lap} alt='' className='hidden md:w-10 md:inline-block' />
          </div>

          <div className='flex items-center'>
            <Selection />
            <TfiFilter
              className='mx-2 cursor-pointer lg:hidden'
              onClick={() => {
                setShowFillter(!showFillter);
              }}
            />
            <TfiLayoutGrid3 className='hidden cursor-pointer lg:block mx-2' />
            <TfiLayoutGrid4 className='hidden cursor-pointer  lg:block mx-2' />
          </div>
        </div>

        <div className='flex'>
          {/* Fillter Section */}
          <div className='w-1/4 hidden lg:block border-r-2 px-2'>
            <form className='mt-4 flex flex-col  gap-4'>
              <SearchBar />

              <Sorting name='Catergory' products={fillterLaps} />

              <Radio />

              <Sorting name='FILTER BY PROCESSOR' products={fillterProcesser} />

              <Sorting name='FILTER BY MEMORY' products={fillterMemory} />

              <Sorting name='FILTER BY BRAND' products={fillterBrand} />

              <button className='border-2 rounded-full text-white bg-slate-900 p-2'>
                Clear Fillters
              </button>
            </form>
          </div>

          {/* Products Grid */}
          <div className='w-3/4 container mx-auto px-4  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {fillterProcesser.map((laptop) => (
              <div key={laptop.id}>
                <ProductCard laptop={laptop} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
