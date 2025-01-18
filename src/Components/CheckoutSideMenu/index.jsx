import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import "../../styles.css";
import { ShoppingCartContext } from '../../Context';

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 
    border-2 border-violet-300 rounded-lg bg-violet-50`}> 
        <div className="flex justify-between items-center p-8">
            <h2 className="font-medium text-xl">
                Order
            </h2>
            <div>
                <XMarkIcon 
                className='h5 w-5 text-violet-700 cursor-pointer'
                onClick={() => context.closeCheckoutSideMenu()}
                ></XMarkIcon>
            </div>
        </div>   
    </aside>
  )
};

export default CheckoutSideMenu;
