import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import "../../styles.css";
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  // console.log('product to show ==> ', context.productToShow);
  

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 
    border-2 border-violet-300 rounded-lg bg-violet-50`}> 
        <div className="flex justify-between items-center p-8">
            <h2 className="font-medium text-xl">
                Detail
            </h2>
            <div>
                <XMarkIcon 
                className='h5 w-5 text-violet-700 cursor-pointer'
                onClick={() => context.closeProductDetail()}
                ></XMarkIcon>
            </div>
        </div>    
        <figure className='px-6'>
              <img 
              className='w-full h-full rounded-lg' 
              src={context.productToShow.images} 
              alt={context.productToShow.title} 
              />
            </figure>
            <p className='flex flex-col p-6'> 
              <span className='font-medium text-2xl mb-2'>{context.productToShow.title}</span>
              <span className='font-medium text-2xl'>${context.productToShow.price}</span>
              <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>   
    </aside>
  )
};

export default ProductDetail;
