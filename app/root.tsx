import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { ReactNode } from 'react';
import stylesheet from '~/tailwind.css?url';
import { LinksFunction } from '@remix-run/node';
import { GeneralErrorBoundary } from './components/error-boundary';
import { ThemeProvider, useTheme } from './provider/theme';
import { Layout } from './components/layout';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet, as: 'style' },
];

function Document({ children }: { children: ReactNode }) {
  const [theme] = useTheme();
  return (
    <html lang="ja" className={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Portfolio</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>{children}</Layout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export default function AppWithProvider() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export function ErrorBoundary() {
  return (
    <ThemeProvider>
      <Document>
        <GeneralErrorBoundary />
      </Document>
    </ThemeProvider>
  );
}
