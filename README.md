
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
```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```
- In the index.css clean all and left just this code
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- Run de project 
```
npm run dev 
```
- To check if everything is OK the App.jsx should be something like this.
```
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

### Creating the folder structure for the routing
- In /src create folder Pages
- In /src/Pages we add folders with the names of "pages" so /App /Home /Account /Notfound /Order /Orders /Signin  ===> in all folders add an index.jsx
- Important for the /App move the App.jsx and replace the name with the index.jsx (important in the main.jsx update the import line to ====> import App from './App/App.jsx').
- In the /App/index.jsx import all the others Pages like this
```
import Home from '../Home/'
import Notfound from '../Notfound/'
import Account from '../Account/'
import Order from '../Order/'
import Orders from '../Orders/'
import Signin from '../SignIn'
```


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
