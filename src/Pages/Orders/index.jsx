import { useContext } from "react";
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard';
import { ShoppingCartContext } from "../../Context";

function Orders() {
  const context = useContext(ShoppingCartContext)

    return (
      <Layout>   
        <div className="flex justify-center w-80 text-center items-center gap-6  mb-6">
          <h2 className="font-medium text-xl">All ORDERS</h2>
        </div>     
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/orders/${index}`}>
            <OrdersCard 
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts} 
            />
            </Link>
            
          ))
        }
      </Layout>
    )
  }
  
  export default Orders
  