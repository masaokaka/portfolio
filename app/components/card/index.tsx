import { PropsWithChildren } from 'react';

interface ButtonProps {
  isError?: boolean;
}

export function Card({ children, isError }: PropsWithChildren<ButtonProps>) {
  return (
    <div
      className={`${isError ? 'bg-error' : 'bg-baseContrast dark:bg-baseDarkContrast'} h-auto w-full overflow-hidden rounded-md p-5 transition duration-default`}
    >
      {children}
    </div>
  );
}
