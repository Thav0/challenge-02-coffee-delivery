interface PaymentButtonProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  name: string;
}

export function PaymentButton({ Icon, name }: PaymentButtonProps) {
  return (
    <div className="flex items-center bg-base-button p-4 rounded-md grow hover:bg-base-hover">
      <span>
        <Icon className="w-4 h-4 text-purple" />
      </span>
      <div className="ml-3 text-xs text-base-text uppercase">{name}</div>
    </div>
  );
}
