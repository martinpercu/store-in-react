const Card = () => {
    return (
        <div className="bg-slate-50 cursor-pointer w-56 h-60">
            <figure className='relative mb-2 w-full h-4/5'>
                <span className="absolute bottom-2 left-2 bg-slate-200 text-gray-900 rounded-lg p-2 py-0.5">Electronics</span>
                <img className="w-full h-full object-cover rounded-lg" src="./src/assets/img/pexels.jpg" alt="headphone" />
                <div className="absolute top-0 right-0 justify-center items-center text-center 
                bg-slate-400 w-6 h-6 rounded-full">
                    +
                </div>
            </figure>
            <p className="flex justify-between px-2">
                <span className="text-sm font-light">Headphones</span>
                <span className="text-lg font-medium">$450</span>
            </p>
        </div>
    )
}

export default Card