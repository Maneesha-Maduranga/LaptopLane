import { api } from './api';

const laptopApi = api.injectEndpoints({
  endpoints: (build) => ({
    getLaptop: build.query({
      query: ({ search, brand, catergory, processor, ram, sort, page }) => ({
        url: '/laptop',
        params: {
          search,
          brand,
          catergory,
          processor,
          ram,
          sort,
          page,
        },
      }),
      providesTags: ['Laptops'],
      keepUnusedDataFor: 5,
    }),
    getLaptopDiscount: build.query({
      query: () => ({
        url: '/laptop/discount',
      }),
    }),
    getLaptopAdmin: build.query({
      query: () => ({
        url: '/laptop',
      }),
    }),
    getLaptopDetail: build.query({
      query: (id) => ({
        url: `/laptop/${id}`,
      }),
      providesTags: ['Laptop'],
      keepUnusedDataFor: 5,
    }),
    createLaptop: build.mutation({
      query: (data) => ({
        url: '/laptop',
        method: 'POST',
        body: {
          name: data.name,
          price: data.price,
          image: data.image,
          brand: data.brand,
          processor: data.processor,
          ram: data.ram,
          ramType: data.ramType,
          ramSpeed: data.ramSpeed,
          capacity: data.capacity,
          storage: data.storage,
          battery: data.battery,
          graphics: data.graphics,
          warrenty: data.warrenty,
          displaytype: data.displaytype,
          resolution: data.resolution,
          size: data.size,
          os: data.os,
          model: data.model,
          colours: data.colours,
          stock: data.stock,
          description: data.description,
          reviews: data.reviews,
          catergory: data.catergory,
        },
      }),
    }),
    uploadImage: build.mutation({
      query: (data) => ({
        url: '/laptop/upload',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetLaptopQuery,
  useGetLaptopDetailQuery,
  useGetLaptopAdminQuery,
  useCreateLaptopMutation,
  useUploadImageMutation,
  useGetLaptopDiscountQuery,
} = laptopApi;
