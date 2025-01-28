import Layout from "../../Components/Layout";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function Order() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let indexOrder = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  // let indexOrder = currentPath.substring(8) // dangerous because path could change in future.
  if (indexOrder === "last") indexOrder = context.order?.length - 1;
  console.log(currentPath);

  console.log(currentPath.lastIndexOf("/") + 1);
  console.log(indexOrder);

  return (
    <Layout>
      <div className="flex justify-center w-80 text-center items-center gap-6  mb-6">
        <Link to="/orders" className="left-0">
          <ChevronLeftIcon className="h5 w-5 text-violet-700" />
        </Link>
        <h2 className="font-medium text-xl">ONE ORDER</h2>
      </div>
      <div className="flex flex-col w-80 mt-6">
        {context.order?.[indexOrder]?.products.map((product) => (
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
