import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';
import { Loading } from '~/components/loading';
import { ToggleButton } from '~/components/toggle-button';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <ToggleButton
        isChecked={isChecked}
        handleCheck={() => setIsChecked((prev) => !prev)}
      />
      <Loading />
    </div>
  );
}
