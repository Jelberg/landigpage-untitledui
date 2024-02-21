import type { Meta, StoryObj } from '@storybook/react';
import InputEmail from './InputEmail';

const meta = {
  title: 'Input Email',
  component: InputEmail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  /*argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} satisfies Meta<typeof InputEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};


