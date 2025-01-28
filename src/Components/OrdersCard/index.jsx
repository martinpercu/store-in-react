import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-6 border border-violet-900 p-6 rounded-lg w-80">
      <p className="flex justify-between w-full">
        <div className="flex flex-col">
          <span className="font-light">01.01.25</span>
          <span className="font-light ">{totalProducts} products</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h5 w-5 text-violet-700 cursor-pointer" />
        </div>
      </p>
    </div>
  );
};

export default OrdersCard;
