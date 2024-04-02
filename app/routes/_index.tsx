import type { MetaFunction } from '@remix-run/node';
import { Loading } from '~/components/loading';
import { ToggleButton } from '~/components/toggle-button';
import { Theme, useTheme } from '~/utils/theme-provider';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const [theme, setTheme] = useTheme();
  const isDarkMode = theme === Theme.DARK;
  const toggleTheme = () => {
    setTheme((prev) => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK));
  };
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: '1.8',
      }}
    >
      <Loading />
      <ToggleButton enabled={isDarkMode} handleToggle={toggleTheme} />
    </div>
  );
}
