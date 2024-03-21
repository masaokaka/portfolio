import { PropsWithChildren } from 'react';

type PropsButton = {
  handleClick: () => void;
};

export const Button = ({ handleClick }: PropsWithChildren<PropsButton>) => {
  return (
    <button
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white"
      onClick={() => handleClick()}
    >
      Button
    </button>
  );
};
