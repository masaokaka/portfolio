import type { MetaFunction } from '@remix-run/node';
// import { Loading } from '~/components/loading';
import { ToggleButton } from '~/components/toggle-button';
import { Theme, useTheme } from '~/provider/theme';
import { Card } from '~/components/card';
import { Text } from '~/components/text';
import { Button } from '~/components/button';
import { Title } from '~/components/title';

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
    <main>
      <div className="grid grid-cols-3 grid-rows-4 gap-4">
        <div className="col-span-2">
          <Card>
            <ToggleButton enabled={isDarkMode} handleToggle={toggleTheme} />
            <Title>Name</Title>
            <Text>こんにちは</Text>
            <Button handleClick={() => console.log('click')}>Button</Button>
          </Card>
        </div>
        <div className="col-span-1">
          <Card>BBBBB</Card>
        </div>
        <div>
          <Card>BBBBB</Card>
        </div>
        <div>
          <Card>BBBBB</Card>
        </div>
        <div>
          <Card>BBBBB</Card>
        </div>
        <div>
          <Card>BBBBB</Card>
        </div>
        <div>
          <Card>BBBBB</Card>
        </div>
        <div>
          <Card>BBBBB</Card>
        </div>
        <div>
          <Card>BBBBB</Card>
        </div>
        <div>
          <Card>BBBBB</Card>
        </div>
        <div>
          <Card>BBBBB</Card>
        </div>
        <div>
          <Card>BBBBB</Card>
        </div>
      </div>
      {/* <Loading /> */}
    </main>
  );
}
