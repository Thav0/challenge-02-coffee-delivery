import tw from "tailwind-styled-components";

const BaseInput = tw.input`
  text-sm
  text-base-label
  bg-base-input
  border-base-button
  p-3
  rounded
  w-full
  focus:text-base-text
  focus:outline-yellow-dark
`;

export const InputText = tw(BaseInput)``;

export const PaymentButton = tw.div``;
