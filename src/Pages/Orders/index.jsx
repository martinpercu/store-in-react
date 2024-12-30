import { useContext } from "react";
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard';
import { ShoppingCartContext } from "../../Context";

function Orders() {
  const context = useContext(ShoppingCartContext)

    return (
      <Layout>        
        {
          context.order.map((order, index) => {
            <Link key={index} to={`/orders/${order.id}`}>
            <OrdersCard 
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts} 
            />
            </Link>
            
          })
        }
      </Layout>
    )
  }
  
  export default Orders
  