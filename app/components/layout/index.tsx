import { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen bg-base transition duration-default dark:bg-baseDark">
      {children}
    </div>
  );
}
