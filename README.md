# ReactStore

- This will be a step by step Store using React with Vite.
- Using Tailwind

## First Steps

#### Run this codes

```sh
npm create vite@latest
```

- Choose a name for project ==> "react-store"
- Choose framework ==> "React" ten variant ===> "Javascript"

#### Install Tailwind (also see this: https://tailwindcss.com/docs/guides/vite)

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- In tailwind.config.js add this for content:

```js
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

- In the index.css clean all and left just this code

```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Run de project

```sh
npm run dev
```

- To check if everything is OK the App.jsx should be something like this.

```js
import './App.css'

function App() {

  return (
    <div className='bg-slate-300'>
      Hello universe
    </div>
  )
}

export default App
```

## Component and Pages

- I will use the concept Pages + Components ====> Pages will be each /"route"
- Pages will be: Home + Orders + Account + Sign ()

#### Home + Orders + Account + Sign +

#### Creating the folder structure for the routing

- In /src create folder Pages
- In /src/Pages we add folders with the names of "pages" so /App /Home /Account /Notfound /Order /Orders /Signin ===> in all folders add an index.jsx
- Important for the /App move the App.jsx and replace the name with the index.jsx (important in the main.jsx update the import line to ====> import App from './App/App.jsx').
- In the /App/index.jsx import all the others Pages like this

```js
import Home from '../Home/'
import Notfound from '../Notfound/'
import Account from '../Account/'
import Order from '../Order/'
import Orders from '../Orders/'
import Signin from '../SignIn'
```

## Router Dom

#### Install

```sh
npm i react-router-dom
```

- In /App/index.jsx import { useRoutes , BrowserRouter } from 'react-router-dom'
- In /App/indexjs add a function AppRoutes() to return all the path.
- In /App/index.js in AppRoutes function add a let routes = useRoutes([ "list of path "]) ===> Return this routes
- In the App function return ===>

```js
(
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
   )
```

## Navbar Component
- First reorder folder structure. New folder /src/Pages. Here move all the folders with routes (App+Home+Notfound_Order_Orders_Signin).
- Then a new folder /src/Components. In Component a new folder Navbar (this will be the firstcomponent to create)
- Update the main.jsx ==> import App from './Pages/App'

#### Create the component
- In /src/Components/Navbar add index.jsx
- In this index.jsx import { NavLink } from 'react-router-dom'.
- In this index.jsx add a function Navbar with return the navstructure with links
- Add also some styles using the className={({ isActive }) => (isActive ? activeStyle : undefined)} inside each <NavLink>
- Add the const activeStyle = "underline underline-offset-8"; to define the style apply to each NavLink. (here is use tailwind format)

## Layout
#### Create Layout Component

- New Folder /src/Components/Layout + index.jsx
- In the index.jsx create function Layout and export it.
- IMPORTANT add parameter { children }. This is to allow receive another component.
- In the Home/index.jsx import the Layout ===> import Layout from '../../Components/Layout'. Then Replace the <div> with the <Layout>.
- In the Layout/index.jsx add the styles className as we like.
- In the rest of Component (Order+Orders+Signin+Notfound) the same as Home/index.jsx. Import the Layout and add it in the function.

## Card
#### Create Card Component

- New Folder /src/Components/Card + index.jsx
- In the index.jsx create function Card and export it.
- Add the structure for picture buttons add etc
- In /Home component import the the Card and add inside.

## Api aprouch
#### Prepare Home component

- In Home import { useState, useEffect } from 'react';
- In Home create a const [products, setProducts] = useStatec(null);
- In Home use useEffect to get from the API the products

```js
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setProducts(data)
    )
  }, [])
```

- In Home in the return of the function in the <Layout> make a map() with the products and put the <Card /> in.

```js
{
  products?.map((product) => (
    <Card key={product.id} data={product} />
  ))
}
```
- Also in encapsul this with div to add some styles.
- With this is connected the home and for each product will be render a Card.

#### Prepare Card Component
- In Card component=== in the Card function add the "data" that will receive from the Home.
- The to populate the data from api use {data.data."whatever we want to use in the card"}. As exemple for the name of product {data.data.title}.
- With this we will render for each product received from the API a Card component. 


## Global Context
#### Folder Context + Index.jsx
- In /src new folder ==> Context.
- In /src/Context new index.jsx
- In the index.jsx ==> import { createContext  } from 'react';
- In the index.jsx ==> const ShoppingCartContext = createContext();
- In the index.jsx export const ShoppingCartProvider who receive a children and will return the children "incapsulated" in a <ShoppingCartContext.Provider />

#### Prepare App to use this Global context
- In /src/Pages/App ==> import { ShoppingCartProvider } from '../../Context'.
- Then the const App return should be encapsulated inside de <ShoppingCartProvider> something like this:
```js
return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
```
- With this we have a GLOBAL CONTEXT for all the App.

## Cart Counter
#### Logic for counter
- In /Context/index.jsx import the "useState"
- In the ShoppingCartProvider add a const [count, setCount] = useState(0);
- In ShoppingCartContext.Provider add ==> value={{count,setCount}}
- In Component/Cart/index.jsx in the div "+" add onClick={() => context.setCount(context.count + 1)}.
- Import the context ==> import { useContext } from 'react';
- Import the context ==> import { ShoppingCartContext } from '../../Context';
- In Card function ==> const context = useContext()
- In the /Context/index.jsx export the const ShoppingCartContext
- With this the context is getting receiving the event and add + to count.
#### Logic for add counter to Navbar Cart
- In Component/Navbar find the cart and add ==> {context.count}.
- Import the context ==> import { useContext } from 'react';
- Import the context ==> import { ShoppingCartContext } from '../../Context';
- In Navbar functino ==> const context = useContext(ShoppingCartContext)
- This is almost the same as we did it in the Card component.
- Now each time we click in the "+" in the Card component will add 1 to count and this is what is show in the Navbar in the cart div.

## Product Detail
- New folder src/Components/ProductDetail
- In ProductDetail new file index.jsx
- This index is just a component should be something like this.
```js
const ProductDetail = () => {
  return (
    <aside className="product-detail flex flex-col fixed right-0 
    border-8 border-black rounded-lg bg-gray-400">        
    </aside>
  )
};

export default ProductDetail;
```
- In Home import this the ProductDetail ==> import ProductDetail from "../../Components/ProductDetail".
- Put this component inside the Layout in the Home function return.
- With this we have the ProductDetail component positioned and showed in the app.

## Icons
#### Installing Heroicons 
- Visit https://heroicons.com/outline (all icons + docs are in here).
- First, install `@heroicons/react` from npm:
```sh
npm install @heroicons/react
```
- Now each icon can be imported individually as a React component:

```js
import { BeakerIcon } from '@heroicons/react/24/solid'

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="size-6 text-blue-500" />
      <p>...</p>
    </div>
  )
}
```
- This should works just we will use the icon as a component.
- In ProductDetail ==> import { XMarkIcon } from '@heroicons/react/24/solid'
- In the return for the close "X" button
```js
<div>
    <XMarkIcon className='h5 w-5 text-violet-700'></XMarkIcon>
</div>
```
- The same to change the cart icon in the Navbar 
- The same in the Card component to add a "PLUS" icon.

## ProductDetail Mockup
#### The open/close state
- In the Context/index.jsx ===> 
```js
const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
const openProductDetail = () => setIsProductDetailOpen(true);
const closeProductDetail = () => setIsProductDetailOpen(false);
```
- Also send this values in the ShoppingCartContext.Provider
```js
value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail
        }}
```
- In Card/index.jsx add the event onClick={() => context.openProductDetail()} in the top of element. The idea is click anyplace in the card to open de Details.
- In ProductDetail import { useContext } from 'react';
- In ProductDetail import { ShoppingCartContext } from '../../Context';
- In ProductDetail function const context = useContext(ShoppingCartContext);
- No change a little bit the aside clasName. "" for {``} to allow pass parameters inside with the ${} format. So in className add thie ===> <br>
 ${context.isProductDetailOpen ? 'flex' : 'hidden'}. So depending if is true or false will show or not the ProductDetail
- With this when click the card will open the ProductDetail.
- To close the Product detail just add this in the X button ===> <br>
onClick={() => context.closeProductDetail()}

## Show Product in ProductDetail
- In Context create a new state. This will be the product to render in product detail.
```js
    const [productToShow, setProductToShow] = useState({})
```
- In Context ShoppingCartContext.Provider send values productToShow and setProductToShow.
- In Card we will create a function to use when click. Till now only open the product detail. Now will alse send the "productData".
```js
const showProduct = (productData) => {
    context.openProductDetail();
    context.setProductToShow(productData);
}
```
- Important chanche the onClick for this: (is data.data because is the way as we receive product for the context in this Card component)
```js
onClick={() => showProduct(data.data)}
```
- In ProductDetail just use the Data to render the info from the product. As exemple:
```js
  <span className='font-medium text-2xl mb-2'>{context.productToShow.title}</span>
  <span className='font-medium text-2xl'>${context.productToShow.price}</span>
  <span className='font-light text-sm'>{context.productToShow.description}</span>
```

## Add Product To Cart
#### Adding the product to global state (cartProducts)
- In Context new state. Include this in the ShoppingCartContext.Provider
```js
    const [cartProducts, setCartProducts] = useState([])
```
- In Card create a function to add the product to the state. Actually should push an pbject to the list. This function will be use when do onclink in the "PLUS" button of the Card.
```js
    const addProductToCart = () => {
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData]);
    }
```
- Actually we take the count + 1 from the div we already have and add the adding product to the list of product.
- In the div with the plus button something like this. 
```js
<div 
  className="absolute top-2 right-2 justify-center items-center text-center 
  bg-violet-200 w-5 h-5 rounded-full"
  onClick={() => addProductToCart(data.data)}
>
      <PlusIcon 
      className='h5 w-5 text-violet-700' 
      />
</div>
```
- With this the button plus is adding to counter and is add also the product to the list of products... In the context is cartProducts

## Checkout Side Menu
####
- We need a component to show the products for the checkout. We will use more or less the same a product detail we already have.
- In /Component new folder CheckoutSideMenu. In this folder new index.jsx. Here copy paste from Product detail.
- In Context add ==>
```js
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
```
- In Card add the function to Open/show the CheckoutSideMenu.
- IMPORTANT we need send the "event" in the Card for addProductsToCart(event, data.data) to catch the event and stop Propagation to avoid. So===> 
```js
const addProductToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCheckoutSideMenu();        
        context.closeProductDetail();
    }
```
- And
```js
onClick={(event) => addProductToCart(event, data.data)}
```
- As Checkout side Menu will be call, probably, for differents places we will import to de App.
- In /Pages/App ==> import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
- The App return should be like this...
```js
return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
```
- Now we open a component CheckoutSideMenu with the "plus" button of each Card.

## Order Card
#### The Order Card Component
- In /Components new folder /OrderCard in here new file index.jsx
- In OrderCard create the const like this: T
```js
const OrderCard = props => {
    const { id, title, imageUrl, price } = props;
}
```
- This props will use to define the return 
- In the CheckoutSideMenu import OrderCard
- In the CheckoutsideMenu return add the context.cartProducts to map it send the product to each OrderCard like this.
```js 
  {
    context.cartProducts.map(product => (
      <OrderCard
        key={product.id}
        title={product.title}
        imageUrl={product.images}
        price={product.price}
      />
    ))
  }
```
- No we add a product each time we click the "+" button. The problems is we cannot add twice the same product because we are sending an id for this product and cannot.

## Duplicate Products
#### Fix duplicate issue
- We will replace the "+" button for a "Check" icon in each card
- In the Card we will replace the "+" for a function ===> renderIconPlusOrCheck(id)
- Then we create this funtion something like this ===> 
```js
  const renderIconPlusOrCheck = (id) => {
    const isInCart = context.cartProducts.filter((product) => product.id === id).length > 0;
    if (isInCart) {
      return (
        <div>
          <CheckIcon className="h5 w-5 text-violet-700" />
        </div>
      );
    } else {
      return (
        <div onClick={(event) => addProductToCart(event, data.data)} >
          <PlusIcon className="h5 w-5 text-violet-700" />
        </div>
      );
    }
  }
  ```
- In this function we use .filter from the all cartProducts to check if there are or not a product with the same ID as is receiving from the same Card. (Remember the Card Receive each products from /Home with "key={item.id} data={item}").

#### Adding scroll to checkout side menu
- Just add tailwind properties overflow-y-scroll

## Delete Products
- In CheckoutSideMenu create a function to delete the product from the product List. Something like this ===> 
```js
  const handleDeleteOne = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id);
    context.setCartProducts(filteredProducts)
  }
```
- This will be update the list of product in the context.
- In the return of CheckoutSideMenu in the <OrderCard> we will add handleDeleteOne ===> Should be something like this: 
```js
<OrderCard
  key={product.id}
  title={product.title}
  imageUrl={product.images}
  price={product.price}
  handleDeleteOne={handleDeleteOne}
  id={product.id}
/>
```
- Important note we are sending twice {product.id}. This is OK because the key is needed for react to work fine. We will use 'id' to have it non connected.
- In OrderCard the function should have this ===> 
```js
const OrderCard = props => {
    const { id, title, imageUrl, price, handleDeleteOne } = props;
    return(
      <XMarkIcon onClick={() => handleDeleteOne(id)} >
      </XMarkIcon>
    )
}
```
- We get the props and use the handleDeleteOne(id) to update the list of products in the context. (The example above is just what is important for OrderCard).

## Add total amount from cart
#### Total Price
- We need a total price not only in the CheckoutSideMenu. We will need it in the checkout in the payment area etc. So we will implement a much more global var.
- New Folder src/Utils ==> a file index.js  (not jsx because no need nothing from DOM)
- In Utils/index.js just a function to with a var "sum" something like this 
```js
export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price)
    return sum
}
```
- In CheckoutsideMenu import { totalPrice } from './../../Utils/index.js' 
- In CheckoutsideMenu in the return add something like this ==> 
```js
  <div className='px-6'>
    <p>
      <span>Total</span>
      <span>${totalPrice(context.cartProducts)}</span>
    </p>
  </div>
```

## Flow to new Order
- In Context/index.jsx add const [order, setOrder] = useState([]) ===> then add them to the return.
- In CheckoutsideMenu/index.jsx add a chackoutbutton with onClick={() => handleCheckout()}.
- In CheckoutsideMenu/index.jsx add the handleCheckout() function ==> 
```js
const handleCheckout = () => {
    const orderToAdd = {
      date: '01.01.25',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
  }
```


## 
- In CheckoutSideMenu import Link 
```js
import { Link } from 'react-router-dom';
```
- Add <Link to='/orders/last'> and put the <button> inside. So when click the CheckouButton also link to my-order/last.
- In App/index.jsx add the route 
```js
    { path: "/orders/last", element: <Order /> },
```
- In Pages/Order/index.jsx add this. (is closer that we have in CheckoutSideMenu)
```js
<div className="flex flex-col w-80">
  {context.order?.slice(-1)[0].products.map((product) => (
    <OrderCard
      key={product.id}
      title={product.title}
      imageUrl={product.images}
      price={product.price}
      id={product.id}
    />
  ))}
</div>
```
- Important!! we use the same "Order Card" component. So we must to render the "+" button only if is in the Shop but not render if is in the list of "Order". So===>
- In OrderCard/index.jsx the return we add {renderXMarkIcon} then we create it with the condition if handleDeleteOne comes like this ===>.
```js
let renderXMarkIcon 
  if (handleDeleteOne) {
      renderXMarkIcon = <XMarkIcon 
      onClick={() => handleDeleteOne(id)}
      className='h5 w-5 text-violet-700 cursor-pointer'
      ></XMarkIcon>
  }
```
- In Pages/Order/index.jsx we import this ==> 
```js
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
```
- In Pages/Order/index.jsx in funtion add the const context = useContext(ShoppingCartContext);
- With this we show a list of products in the link orders/last, clean the list of products in checoutsideMenu and open the link with click in checkout button.

## List of Orders
#### Creation the component OrdersCard
- In /Components create new folder OrdersCard/index.jsx (with S) will be like the OrderCard we already have.
- In Pages/Orders/index.jsx import all this ==> 
```js
import { useContext } from "react";
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard';
import { ShoppingCartContext } from "../../Context";
```
- In the return should be something like this.
```js
{
  context.order.map((order, index) => {
    <Link key={index} to={`/orders/${index}`}>
    <OrdersCard 
      totalPrice={order.totalPrice} 
      totalProducts={order.totalProducts} 
    />
    </Link>
    
  })
}
```
- Very important with this we have in context the info but as we are going to /order this will reset the info. We have no persistent data. So ...
#### Persist data
- In Order we add a link to go to Orders ... so add something like this.
```js
-
<div className="flex justify-center w-80 text-center items-center">
  <Link to='/orders' className="left-0">
  <ChevronLeftIcon className="h5 w-5 text-violet-700" />
  </Link>
  <h2>ONE ORDER</h2>
</div>
```
- Import whatever you need. (the chevron icon Link etc.)

## List of Orders
- We will use the index to find de List of Products ===> "the order".
#### Getting the index.
- In Order get the ID in the path ..   (the currentPath is ==> /orders/) So we can use currentPath.substring(8) and get the indexOrder. But if route name change in future should be ready with womething like  this ==>
```js
let indexOrder = currentPath.substring(currentPath.lastIndexOf('/') + 1 )
```
#### Fix issue with "/last"
- Then know replace also when is going to /last (this is the link just after click on Checkout)
```js
  if (indexOrder === 'last') indexOrder = context.order?.length - 1 
```
- In the return change context.order?.slice(-1)[0] for context.order?.[indexOrder]?
















# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
