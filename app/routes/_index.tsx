import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';
import { Loading } from '~/components/loading';
import { ToggleButton } from '~/components/toggle-button';
import { Mode } from '~/types/utils';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const [mode, setMode] = useState<Mode>('light');

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <ToggleButton
        enabled={mode === 'dark'}
        handleToggle={() =>
          setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
        }
      />
      <Loading />
    </div>
  );
}
