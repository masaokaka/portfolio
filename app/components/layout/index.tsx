import { PropsWithChildren } from 'react';

interface LayoutProps {}

export function Layout({ children }: PropsWithChildren<LayoutProps>) {
  return (
    <div className="h-screen min-h-[780px] w-screen bg-base p-10 dark:bg-baseDark">
      {children}
    </div>
  );
}
