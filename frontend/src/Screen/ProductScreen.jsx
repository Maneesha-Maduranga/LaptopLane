import { TfiLayoutGrid4, TfiLayoutGrid3, TfiFilter } from 'react-icons/tfi';

import { AiOutlineClose } from 'react-icons/ai';

import Lap from '../assets/laptop.png';

import {
  fillterLaps,
  fillterBrand,
  fillterMemory,
  fillterProcesser,
} from '../Utils/fillter';

import SearchBar from '../Components/SearchBar';
import Selection from '../Components/Selection';
import Sorting from '../Components/Sorting';
import ProductCard from '../Components/ProductCard';
import Skeleton from '../Components/Skeleton';

import { useState } from 'react';

import { useGetLaptopQuery } from '../slices/laptopApiSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import Paginate from '../Components/Paginate';
import NoProduct from '../Components/NoProduct';
import Button from '../Components/Button';

function ProductScreen() {
  const { page } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  let sort = searchParams.get('sort') ? searchParams.get('sort') : '';
  let brand = searchParams.get('brand') ? searchParams.get('brand') : '';
  let catergory = searchParams.get('catergory')
    ? searchParams.get('catergory')
    : '';
  let processor = searchParams.get('processor')
    ? searchParams.get('processor')
    : '';
  let ram = searchParams.get('ram') ? searchParams.get('ram') : '';
  let search = searchParams.get('search') ? searchParams.get('search') : '';

  const [showFillter, setShowFillter] = useState(false);
  const [gridFour, setGridFour] = useState(true);
  const loadArray = [1, 2, 3, 4, 5, 6, , 7, 8, 9, 10, 11, 12];

  const handleClick = () => {
    searchParams.delete('search');
    searchParams.delete('sort');
    searchParams.delete('brand');
    searchParams.delete('catergory');
    searchParams.delete('processor');
    searchParams.delete('ram');

    setSearchParams(searchParams);
  };

  const {
    data: data,
    isLoading,
    isError,
  } = useGetLaptopQuery({
    search,
    brand,
    catergory,
    processor,
    ram,
    sort,
    page,
  });

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
            <Button onClick={handleClick} />
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
          <form
            className='mt-4 flex flex-col px-4 gap-4'
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <SearchBar />

            <Sorting name='Catergory' products={fillterLaps} />

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
            <TfiLayoutGrid3
              className='hidden cursor-pointer lg:block mx-2'
              onClick={() => setGridFour(true)}
            />
            <TfiLayoutGrid4
              className='hidden cursor-pointer  lg:block mx-2'
              onClick={() => setGridFour(false)}
            />
          </div>
        </div>

        <div className='flex'>
          {/* Fillter Section */}
          <div className='w-1/4 hidden lg:block border-r-2  px-2'>
            <form
              className='mt-4 flex flex-col items-start gap-4'
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <SearchBar />

              <Button onClick={handleClick} />

              <Sorting name='Catergory' products={fillterLaps} />

              <Sorting name='FILTER BY PROCESSOR' products={fillterProcesser} />

              <Sorting name='FILTER BY MEMORY' products={fillterMemory} />

              <Sorting name='FILTER BY BRAND' products={fillterBrand} />
            </form>
          </div>

          {!isLoading
            ? data.data.length <= 0 && (
                <div className='grid  container mx-auto pl-32'>
                  <NoProduct />
                </div>
              )
            : null}

          {/* Products Grid */}
          <div
            className={
              gridFour
                ? `w-3/4 container mx-auto px-4  grid grid-cols-1  md:grid-cols-2  gap-4 lg:grid-cols-3`
                : `w-3/4 container mx-auto px-4  grid grid-cols-1  md:grid-cols-2  gap-4 lg:grid-cols-2`
            }
          >
            {/* Is Loading */}
            {isLoading &&
              loadArray.map((load) => (
                <div key={load}>
                  <Skeleton />
                </div>
              ))}

            {/* Display Data */}
            {!isLoading &&
              data.data.map((laptop) => (
                <div key={laptop._id}>
                  <ProductCard laptop={laptop} />
                </div>
              ))}
          </div>
        </div>
        <div className='my-4'>
          {!isLoading && <Paginate count={data.count} pages={data.pages} />}
        </div>
      </div>
    </>
  );
}

export default ProductScreen;
