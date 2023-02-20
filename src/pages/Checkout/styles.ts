import tw from "tailwind-styled-components";
import InputMask from "react-input-mask";

interface InputMaskProps {
  isValid: boolean;
}

const BaseInput = tw.input<InputMaskProps>`
  text-sm
  text-base-label
  bg-base-input
  p-3
  rounded
  w-full
  border
  ${({ isValid }) =>
    isValid === false ? "border-rose-500" : "border-base-button"}
`;

export const InputText = tw(BaseInput)``;

export const PaymentButton = tw.div``;

export const InputMaskSyled = tw(InputMask)<InputMaskProps>`
  text-sm
  text-base-label
  bg-base-input
  p-3
  rounded
  w-full
  border
  ${({ isValid }) =>
    isValid === false ? "border-rose-500" : "border-base-button"}
`;
