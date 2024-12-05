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















# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
