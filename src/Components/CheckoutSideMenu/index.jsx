import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "../../styles.css";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "./../OrderCard";
import { totalPrice } from "./../../Utils/index.js";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  console.log("List of product to shox ===>   ", context.cartProducts);

  const handleDeleteOne = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col fixed right-0 
    border-2 border-violet-300 rounded-lg bg-violet-50`}
    >
      <div className="flex justify-between items-center p-8">
        <h2 className="font-medium text-xl">Order</h2>
        <div>
          <XMarkIcon
            className="h5 w-5 text-violet-700 cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDeleteOne={handleDeleteOne}
            id={product.id}
          />
        ))}
      </div>
      <div className="px-6">
        <p className="flex justify-between items-center">
          <span className="font-light">Total</span>
          <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
        </p>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
