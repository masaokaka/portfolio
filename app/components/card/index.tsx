import { ReactNode } from 'react';

export function Card({
  children,
  isError,
}: {
  children: ReactNode;
  isError?: boolean;
}) {
  return (
    <div
      className={`${isError ? 'bg-error' : 'bg-baseContrast dark:bg-baseDarkContrast'} h-auto w-full overflow-hidden rounded-md p-5 transition duration-default`}
    >
      {children}
    </div>
  );
}
