import type { Meta, StoryObj } from '@storybook/react';
import { ToggleButton } from './index';

const meta = {
  title: 'ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    enabled: true,
    handleToggle: () => {},
  },
};
