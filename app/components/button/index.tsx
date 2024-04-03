import { PropsWithChildren } from 'react';

type PropsButton = {
  handleClick: () => void;
};

export const Button = ({
  children,
  handleClick,
}: PropsWithChildren<PropsButton>) => {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-center text-white"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
