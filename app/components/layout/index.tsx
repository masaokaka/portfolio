import { PropsWithChildren } from 'react';

interface LayoutProps {}

export function Layout({ children }: PropsWithChildren<LayoutProps>) {
  return (
    <div className="h-screen w-screen bg-base p-20 transition duration-default dark:bg-baseDark">
      {children}
    </div>
  );
}
