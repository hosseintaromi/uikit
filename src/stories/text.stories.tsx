import type { Meta, StoryObj } from "@storybook/react";

import { AiFillGooglePlusCircle, AiFillHeart } from "react-icons/ai";
import ICON_SIZE from "../constant/icon-size-color";
import { Text } from "../components";

type TextPropsAndCustomArgs = React.ComponentProps<typeof Text>;

const None = undefined;
const GooglePlus = () => <AiFillGooglePlusCircle size={ICON_SIZE.lg} />;
const Heart = () => <AiFillHeart size={ICON_SIZE.lg} />;

const arrows = { None, GooglePlus, Heart };

const meta: Meta<TextPropsAndCustomArgs> = {
  component: Text,
  tags: ["autodocs"],
  render: ({ ...args }) => <Text {...args}>asdf</Text>,
};
export default meta;

type Story = StoryObj<TextPropsAndCustomArgs>;

export const MyText: Story = {
  argTypes: {},
  args: {},
};
