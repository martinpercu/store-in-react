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

  // Get Product By Category
  const [searchByCategory, setSearchByCategory] = useState(null);
  console.log("what is typing ==>  ", searchByTitle);

  // // Get Product By Category and Title
  // const [searchByBoth, setSearchByBoth] = useState(null);

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

  const filteredProductsByCategory = (products, searchByCategory) => {
    return products?.filter(product => product.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  // const filteredProductsByBoth = (products, searchByCategory, searchByTitle) => {
  //   return products?.filter(product => product.category.name.toLowerCase().includes(searchByCategory.toLowerCase()).filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase())))
  // }
  // const filteredProductsByBoth = (products, { searchByTitle = '', searchByCategory = '' }) => {
  //   return products?.filter(product => {
  //     const titleMatch = product.title.toLowerCase().includes(searchByTitle.toLowerCase());
  //     const categoryMatch = product.category.name.toLowerCase().includes(searchByCategory.toLowerCase());
      
  //     // Return true if either searchByTitle or searchByCategory is matched
  //     return (searchByTitle ? titleMatch : true) && (searchByCategory ? categoryMatch : true);
  //   });
  // }

  // const filteredProductsByCategoryAndByTitle = (products, searchByCategory) => {
  //   return products?.filter(product => product.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  // }

  const filterBy = (searchType, products, searchByTitle, searchByCategory) => {
    if(searchType === 'BY_CATEGORY_AND_TITLE') {
      return filteredProductsByCategory(products, searchByCategory).filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    if(searchType === 'BY_TITLE') {
      return filteredProductsByTitle(products, searchByTitle)
    }
    if(searchType === 'BY_CATEGORY') {
      return filteredProductsByCategory(products, searchByCategory)
    }
    if(searchType == null) {
      return products
    }
  }

  useEffect(() => {
    if (searchByCategory && searchByTitle) setFilteredProducts(filterBy('BY_CATEGORY_AND_TITLE', products, searchByTitle, searchByCategory));
    if (searchByTitle && !searchByCategory) setFilteredProducts(filterBy('BY_TITLE', products, searchByTitle, searchByCategory));
    if (searchByCategory && !searchByTitle) setFilteredProducts(filterBy('BY_CATEGORY', products, searchByTitle, searchByCategory));
    if (!searchByCategory && !searchByTitle) setFilteredProducts(filterBy(null, products, searchByTitle, searchByCategory));
  }, [products, searchByTitle, searchByCategory]);


  console.log('filterded products ===>   ',  filteredProducts);

  console.log('All products ===>   ',  products);
  

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
        setFilteredProducts,
        searchByCategory,
        setSearchByCategory
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
