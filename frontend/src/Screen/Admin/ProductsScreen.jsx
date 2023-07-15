import Spinner from '../../Components/Spinner';
import { useGetLaptopAdminQuery } from '../../slices/laptopApiSlice';
import { FiEdit, FiDelete } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function ProductsScreen() {
  const { data, isLoading } = useGetLaptopAdminQuery();
  const navigate = useNavigate();
  console.log(data);

  const handleClick = () => {
    navigate('/admin/products/add');
  };
  return (
    <div className='flex flex-col  my-20 mx-10'>
      <div className='-m-1.5 overflow-x-auto'>
        <div className='p-1.5 min-w-full inline-block align-middle'>
          <div className='border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700'>
            {/* Search And ADD Btn */}
            <div className='flex items-center  justify-evenly flex-wrap py-3 px-4'>
              <div>
                <button
                  className='block w-full rounded bg-slate-900 p-4 text-sm font-medium transition hover:scale-105 text-white'
                  onClick={handleClick}
                >
                  Add Product
                </button>
              </div>
            </div>
            <div className='overflow-hidden'>
              {/* Table */}
              {isLoading ? (
                <Spinner />
              ) : (
                <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                  <thead className='bg-gray-50 dark:bg-gray-700'>
                    <tr>
                      <th scope='col' className='py-3 px-4 pr-0'>
                        <div className='flex items-center h-5'>
                          <input
                            id='hs-table-pagination-checkbox-all'
                            type='checkbox'
                            className='border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
                          />
                          <label
                            htmlFor='hs-table-pagination-checkbox-all'
                            className='sr-only'
                          >
                            Checkbox
                          </label>
                        </div>
                      </th>
                      <th
                        scope='col'
                        className='px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                      >
                        Name
                      </th>
                      <th
                        scope='col'
                        className='px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                      >
                        Price
                      </th>
                      <th
                        scope='col'
                        className='px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                      >
                        Stock
                      </th>
                      <th
                        scope='col'
                        className='px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                      >
                        Warrenty
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                    {data.data.map((laptop) => (
                      <tr key={laptop._id}>
                        <td className='py-3 pl-4'>
                          <div className='flex items-center h-5'>
                            <input
                              id='hs-table-pagination-checkbox-1'
                              type='checkbox'
                              className='border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
                            />
                            <label
                              htmlFor='hs-table-pagination-checkbox-1'
                              className='sr-only'
                            >
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <td className='px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>
                          {laptop.name}
                        </td>
                        <td className='px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                          {laptop.price}
                        </td>
                        <td className='px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                          {laptop.stock}
                        </td>
                        <td className='px-2 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200'>
                          {laptop.warrenty}
                        </td>
                        <td className='px-4 py-4 whitespace-nowrap text-right text-sm font-medium'>
                          <FiEdit />
                        </td>
                        <td className='px-4 py-4 whitespace-nowrap text-right text-sm font-medium'>
                          <FiDelete />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsScreen;
