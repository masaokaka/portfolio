import { PropsWithChildren } from 'react';

interface TitleProps {
  isError?: boolean;
}
export function Title({ children, isError }: PropsWithChildren<TitleProps>) {
  return (
    <h2
      className={`text-3xl ${isError ? 'text-error' : 'text-primary dark:text-primaryDark'} transition duration-default`}
    >
      {children}
    </h2>
  );
}
