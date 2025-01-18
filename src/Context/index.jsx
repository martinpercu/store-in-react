import { createContext, useState  } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart ==> Quantity product increment
    const [count, setCount] = useState(0);

    // Prouct Detail ==> Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Product Detail ==> Show product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart ==> Add products to cart
    const [cartProducts, setCartProducts] = useState([])


    
    console.log('Couhnter ==> ', count);
    

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            closeProductDetail,
            openProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}