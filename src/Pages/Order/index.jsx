import Layout from "../../Components/Layout";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { ChevronLeftIcon } from '@heroicons/react/24/solid';



function Order() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex justify-center w-80 text-center items-center">
          <Link to='/orders' className="left-0">
          <ChevronLeftIcon className="h5 w-5 text-violet-700" />
          </Link>
          <h2>ONE ORDER</h2>
        </div>
      <div className="flex flex-col w-80 mt-6">
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
    </Layout>
  );
}

export default Order;
