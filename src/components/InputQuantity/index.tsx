import { ReactComponent as MinusIcon } from "@assets/icons/minus.svg";
import { ReactComponent as PlusIcon } from "@assets/icons/plus.svg";

interface InputQuantityProps {
  quantity: number;
  handleSubtract: () => void;
  handleAdd: () => void;
}

export function InputQuantity({
  quantity,
  handleSubtract,
  handleAdd,
}: InputQuantityProps) {
  return (
    <div className="flex items-center rounded-md py-1 px-2 bg-base-button space-x-2.5">
      <button className="text-purple" onClick={handleSubtract}>
        <MinusIcon className="w-3 h-3" />
      </button>
      <span className="text-base-title">{quantity}</span>
      <button className="text-purple text-xl" onClick={handleAdd}>
        <PlusIcon className="w-3 h-3" />
      </button>
    </div>
  );
}
