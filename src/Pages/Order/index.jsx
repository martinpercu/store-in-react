import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";


function Order() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      ONE ORDER
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
    </Layout>
  );
}

export default Order;
