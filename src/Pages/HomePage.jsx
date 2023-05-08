import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';

function HomePage() {
  return (
    <div>
      <div className='container-fluid row mt-3 justify-content-between'> 
        <div className='col-md-3'>
          <h1>Ecommerce</h1>
        </div>
        <div className='col-md-3 text-end'>
          <AiOutlineUserAdd size='60px' />
          <BsCart size='60px' />
        </div>
      </div>
    </div>
  );
}

export default HomePage