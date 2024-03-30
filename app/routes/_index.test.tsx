import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Index from '~/routes/_index';
import { createRemixStub } from '@remix-run/testing';

const RemixStub = createRemixStub([
  {
    path: '/',
    Component: Index,
  },
]);

test('test1', () => {
  render(<RemixStub />);
  expect(screen.getByText('Welcome to Remix')).toBeInTheDocument();
});
