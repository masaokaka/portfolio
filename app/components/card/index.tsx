import { PropsWithChildren } from 'react';

interface ButtonProps {
  isError?: boolean;
}

export function Card({ children, isError }: PropsWithChildren<ButtonProps>) {
  return (
    <div
      className={`${isError ? 'bg-error' : 'bg-baseContrast dark:bg-baseDarkContrast'} size-full scale-100 animate-appear overflow-hidden rounded-md p-5 hover:scale-95`}
    >
      {children}
    </div>
  );
}
