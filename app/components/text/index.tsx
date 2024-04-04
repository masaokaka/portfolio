import { PropsWithChildren } from 'react';

interface TextProps {
  isError?: boolean;
}
export function Text({ children, isError }: PropsWithChildren<TextProps>) {
  return <p className={`${isError && 'text-error'}`}>{children}</p>;
}
