import { ReactNode } from 'react';

export function Text({
  children,
  isError,
}: {
  children: ReactNode;
  isError?: boolean;
}) {
  return (
    <p
      className={`${isError ? 'text-error' : 'text-primary dark:text-primaryDark'} transition duration-default`}
    >
      {children}
    </p>
  );
}
