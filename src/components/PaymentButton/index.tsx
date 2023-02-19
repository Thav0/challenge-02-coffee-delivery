import { HTMLAttributes } from "react";

interface PaymentButtonProps extends HTMLAttributes<HTMLDivElement> {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  name: string;
  isSelected: boolean;
}

export function PaymentButton({
  Icon,
  name,
  isSelected,
  ...rest
}: PaymentButtonProps) {
  return (
    <div
      className={`flex items-center ${
        isSelected
          ? "bg-purple-light border border-purple"
          : "bg-base-button border"
      } p-4 rounded-md grow cursor-pointer hover:bg-base-hover `}
      {...rest}
    >
      <span>
        <Icon className="w-4 h-4 text-purple" />
      </span>
      <div className="ml-3 text-xs text-base-text uppercase">{name}</div>
    </div>
  );
}
