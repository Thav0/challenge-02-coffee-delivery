interface InputProps {
  type: "text" | "number";
  placeholder: string;
}

export function Input({ type, placeholder = "" }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="text-sm text-base-label bg-base-input border-base-button p-3 rounded outline-yellow-dark focus:text-base-text w-full"
    />
  );
}
