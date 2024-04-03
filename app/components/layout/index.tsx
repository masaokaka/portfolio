import { ReactNode } from 'react';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-screen bg-base p-20 transition duration-default dark:bg-baseDark">
      {children}
    </div>
  );
}
