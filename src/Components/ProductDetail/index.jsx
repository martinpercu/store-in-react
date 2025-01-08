import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import "./styles.css";
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {

  const context = useContext(ShoppingCartContext)

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 
    border-2 border-violet-300 rounded-lg bg-violet-50`}> 
        <div className="flex justify-between items-center px-4 py-4">
            <h2 className="font-medium text-xl">
                Detail
            </h2>
            <div onClick={() => context.closeProductDetail()}>
                <XMarkIcon className='h5 w-5 text-violet-700'></XMarkIcon>
            </div>
        </div>       
    </aside>
  )
};

export default ProductDetail;
