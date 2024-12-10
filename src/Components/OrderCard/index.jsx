import { XMarkIcon } from '@heroicons/react/24/solid'


const OrderCard = props => {
    const { id, title, imageUrl, price, handleDeleteOne } = props;

    return(
        <div className="flex justify-between items-center mb-4">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'></p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                <XMarkIcon 
                onClick={() => handleDeleteOne(id)}
                className='h5 w-5 text-violet-700 cursor-pointer'
                ></XMarkIcon>
            </div>

        </div>
    )
}

export default OrderCard