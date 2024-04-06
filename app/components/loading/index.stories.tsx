import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from './index';

const meta = {
  title: 'Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    handleLoadingDone: () => {},
  },
};
