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

    // CheckoutSideMenu ==> Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(true);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Shopping Cart ===> Oirder
    const [order, setOrder] = useState([]);


    
    console.log('Couhnter ==> ', count);

    // console.log('cartProducts ==> ', cartProducts);
    

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
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}