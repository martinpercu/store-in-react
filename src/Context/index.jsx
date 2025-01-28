import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart ==> Quantity product increment
  const [count, setCount] = useState(0);

  // Prouct Detail ==> Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product Detail ==> Show product
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart ==> Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // CheckoutSideMenu ==> Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(true);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Shopping Cart ===> Oirder
  const [order, setOrder] = useState([]);

  // Get All Products
  const [products, setProducts] = useState(null);

  // Get Filtered Products
  const [filteredProducts, setFilteredProducts] = useState(null);

  // Get Product By Title
  const [searchByTitle, setSearchByTitle] = useState(null);
  console.log("what is typing ==>  ", searchByTitle);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then(
        (data) => setProducts(data)
        // .then(data => console.log(data))
      );
  }, []);

  const filteredProductsByTitle = (products, searchByTitle) => {
    return products?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) setFilteredProducts(filteredProductsByTitle(products, searchByTitle))
  }, [products, searchByTitle]);

  console.log('filterded products ===>   ',  filteredProducts);
  

//   console.log("Couhnter ==> ", count);

  // console.log('cartProducts ==> ', cartProducts);

  return (
    <ShoppingCartContext.Provider
      value={{
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
        setOrder,
        products,
        setProducts,
        searchByTitle,
        setSearchByTitle,
        filteredProducts,
        setFilteredProducts
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
