import { ReactNode } from 'react';

export function Title({
  children,
  isError,
}: {
  children: ReactNode;
  isError?: boolean;
}) {
  return (
    <h2
      className={`text-3xl ${isError ? 'text-error' : 'text-primary dark:text-primaryDark'} transition duration-default`}
    >
      {children}
    </h2>
  );
}
