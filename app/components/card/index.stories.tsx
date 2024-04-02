import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './index';

const meta = {
  title: 'Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: (
      <div className="h-80 w-[500px]">
        <p className="text-xl font-bold">Card</p>
        <p>This is a card.</p>
      </div>
    ),
  },
};
