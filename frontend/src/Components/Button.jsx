function Button({ onClick }) {
  return (
    <button
      type='button'
      className='text-white bg-slate-800 hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2'
      onClick={onClick}
    >
      Clear Fillter
    </button>
  );
}

export default Button;
