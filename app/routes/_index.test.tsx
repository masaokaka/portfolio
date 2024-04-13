import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Index from '~/routes/_index';
import { createRemixStub } from '@remix-run/testing';
import { GeneralErrorBoundary } from '~/components/error-boundary';
import { ThemeProvider } from '~/provider/theme';

const RemixStub = createRemixStub([
  {
    path: '/',
    Component: () => (
      <ThemeProvider>
        <Index />
      </ThemeProvider>
    ),
    ErrorBoundary: GeneralErrorBoundary,
  },
]);

test('test if the top page renders properly.', () => {
  render(<RemixStub />);
  expect(screen.getByText('My Dashboard')).toBeInTheDocument();
});
