import { BsStarFill } from 'react-icons/bs';

function Rating({ rating }) {
  if (rating == 1) {
    return (
      <div className='flex '>
        <BsStarFill color='#FFD700' />
      </div>
    );
  }
  if (rating == 2) {
    return (
      <div className='flex '>
        <BsStarFill color='#FFD700' />
        <BsStarFill color='#FFD700' />
      </div>
    );
  }
  if (rating == 3) {
    return (
      <div className='flex '>
        <BsStarFill color='#FFD700' />
        <BsStarFill color='#FFD700' />
        <BsStarFill color='#FFD700' />
      </div>
    );
  }
  if (rating == 4) {
    return (
      <div className='flex '>
        <BsStarFill color='#FFD700' />
        <BsStarFill color='#FFD700' />
        <BsStarFill color='#FFD700' />
        <BsStarFill color='#FFD700' />
      </div>
    );
  }
  return (
    <div className='flex '>
      <BsStarFill color='#FFD700' />
      <BsStarFill color='#FFD700' />
      <BsStarFill color='#FFD700' />
      <BsStarFill color='#FFD700' />
      <BsStarFill color='#FFD700' />
    </div>
  );
}

export default Rating;
