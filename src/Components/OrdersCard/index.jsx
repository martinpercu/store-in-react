import { XMarkIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducs } = props;

  return (
    <div className="flex justify-between items-center mb-2">
        <p>
            <span>01.01.25</span>
            <span>{totalPrice}</span>
            <span>{totalProducs}</span>
        </p>
    </div>
  );
};

export default OrdersCard;
