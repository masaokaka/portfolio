import { ReactNode } from 'react';

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="h-auto overflow-hidden rounded-md bg-baseContrast p-5 transition duration-default dark:bg-baseDarkContrast">
      {children}
    </div>
  );
}
