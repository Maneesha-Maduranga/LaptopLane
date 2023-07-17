function Brandcard({ title, image }) {
  return (
    <div className='flex flex-col w-36 h-40 p-4 bg-white border shadow-sm rounded-xl hover:shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
      <img className='w-full h-auto rounded-t-xl' src={image} alt={title} />
    </div>
  );
}

export default Brandcard;
