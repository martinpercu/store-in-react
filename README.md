
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





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
