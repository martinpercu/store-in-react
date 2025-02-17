import { useContext } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productData) => {
    context.openProductDetail();
    context.setProductToShow(productData);
  };

  const addProductToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);

    context.openCheckoutSideMenu();
    context.closeProductDetail();
    console.log("Cart ===>  ", context.cartProducts);
  };

  const renderIconPlusOrCheck = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;
    if (isInCart) {
      return (
        <div
          className="absolute top-2 right-2 justify-center items-center text-center 
                bg-violet-800 w-5 h-5 rounded-full"
        >
          <CheckIcon className="h5 w-5 text-violet-200" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-2 right-2 justify-center items-center text-center 
                bg-violet-200 w-5 h-5 rounded-full"
          onClick={(event) => addProductToCart(event, data.data)}
        >
          <PlusIcon className="h5 w-5 text-violet-700" />
        </div>
      );
    }
  };

  return (
    <div
      className="bg-slate-50 cursor-pointer w-56 h-60 rounded-lg shadow-md"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-2 left-2 bg-slate-200 text-gray-900 rounded-lg p-2 py-0.5">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images[0]}
          alt="headphone"
        />
        {renderIconPlusOrCheck(data.data.id)}
      </figure>
      <p className="flex justify-between px-2">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
