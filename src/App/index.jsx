import Home from '../Home/'
import Notfound from '../Notfound/'
import Account from '../Account/'
import Order from '../Order/'
import Orders from '../Orders/'
import Signin from '../SignIn'


import './App.css'

function App() {

  return (
    <div className='bg-slate-300'>
        Hello universe
        <Home />
        <Notfound />
        <Order />
        <Orders />
        <Account />
        <Signin />
    </div>
  )
}

export default App
