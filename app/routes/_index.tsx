import type { MetaFunction } from '@remix-run/node';
import { ToggleButton } from '~/components/toggle-button';
import { Theme, useTheme } from '~/provider/theme';
import { Card } from '~/components/card';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import IconImg from '~/resource/img/icon.png';
import { Loading } from '~/components/loading';
import { useState } from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Portfolio' },
    { name: 'description', content: 'Portfolio' },
  ];
};

export default function Index() {
  const [theme, setTheme] = useTheme();
  const isDarkMode = theme === Theme.DARK;
  const toggleTheme = () => {
    setTheme((prev) => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK));
  };
  const [showPage, setShowPage] = useState(false);
  return (
    <>
      <div
        className={`${showPage ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
      >
        <Loading handleLoadingDone={() => setShowPage(true)} />
      </div>
      <div
        className={`${showPage ? 'opacity-100' : 'opacity-0'} grid h-full grid-cols-12 grid-rows-8 gap-4`}
      >
        <header className="col-span-10 row-span-1">
          <Card>
            <div className="flex h-full items-center justify-between">
              <h2 className="text-4xl font-bold">My Dashboard</h2>
            </div>
          </Card>
        </header>
        <div className="col-span-2 row-span-1">
          <Card>
            <div className="flex h-full items-center justify-center">
              <SunIcon className="mr-2 size-8 min-h-8 min-w-8" />
              <ToggleButton enabled={isDarkMode} handleToggle={toggleTheme} />
              <MoonIcon className="ml-2 size-7 min-h-7 min-w-7" />
            </div>
          </Card>
        </div>
        <main className="col-span-12 row-span-6 grid grid-cols-subgrid grid-rows-subgrid gap-4">
          <div className="col-span-4 row-span-2">
            <Card>
              <section className="flex h-full items-center">
                <figure className="size-24 min-h-24 min-w-24 rounded-full">
                  <img src={IconImg} alt="sample taro" />
                </figure>
                <div className="mx-3">
                  <h2 className="text-2xl font-bold">Sample Taro</h2>
                  <p className="text-gray-500 dark:text-gray-300">
                    Frontend Developer
                  </p>
                </div>
              </section>
            </Card>
          </div>
          <div className="col-span-4 row-span-3">
            <Card>
              <section></section>
            </Card>
          </div>
          <div className="col-span-4 row-span-3">
            <Card>
              <section></section>
            </Card>
          </div>
          <div className="col-span-4 row-span-4">
            <Card>
              <section></section>
            </Card>
          </div>
          <div className="col-span-8 row-span-3">
            <Card>
              <section></section>
            </Card>
          </div>
        </main>
        <footer className="col-span-12 row-span-1">
          <Card>
            <div className="flex h-full flex-col items-center justify-center">
              <nav className="mb-5 flex w-full justify-evenly">
                {[
                  ['Zenn', '/zenn'],
                  ['Github', '/github'],
                ].map(([title, url]) => (
                  <a
                    key={title}
                    href={url}
                    className="font-bold hover:underline hover:decoration-solid hover:underline-offset-8"
                  >
                    {title}
                  </a>
                ))}
              </nav>
              <small>Copyright 2024, Sample Taro</small>
            </div>
          </Card>
        </footer>
      </div>
    </>
  );
}
