import type { Meta, StoryObj } from "@storybook/react";

import { AiFillGooglePlusCircle, AiFillHeart } from "react-icons/ai";
import ICON_SIZE from "../constant/icon-size-color";
import { Input } from "../components";
import { INPUT_TYPES } from "../@types/input/input.model";
import { SIZE_ENUM } from "../@types/types";

type InputPropsAndCustomArgs = React.ComponentProps<typeof Input>;

const None = () => <></>;
const GooglePlus = () => <AiFillGooglePlusCircle size={ICON_SIZE.lg} />;
const Heart = () => <AiFillHeart size={ICON_SIZE.lg} />;

const arrows = { None, GooglePlus, Heart };

const meta: Meta<InputPropsAndCustomArgs> = {
  component: Input,
  tags: ["autodocs"],
  render: ({ ...args }) => <Input {...args} />,
};
export default meta;

type Story = StoryObj<InputPropsAndCustomArgs>;

export const CustomLabel: Story = {
  argTypes: {
    LeftIcon: {
      options: Object.keys(arrows),
      mapping: arrows,
      control: {
        type: "select",
        labels: {
          None: "none",
          GooglePlus: "google plus",
          Heart: "heart",
        },
      },
    },
    type: {
      options: [
        INPUT_TYPES.TEXT,
        INPUT_TYPES.EMAIL,
        INPUT_TYPES.PASSWORD,
        INPUT_TYPES.NUMBER,
      ],
      control: {
        type: "select",
      },
    },
    size: {
      options: [
        SIZE_ENUM.XXL,
        SIZE_ENUM.XL,
        SIZE_ENUM.LG,
        SIZE_ENUM.MD,
        SIZE_ENUM.XMD,
        SIZE_ENUM.SM,
      ],
      control: {
        type: "select",
      },
    },
    background: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    label: "hello",
    errorMessage: "",
    LeftIcon: () => <></>,
    type: INPUT_TYPES.TEXT,
    size: SIZE_ENUM.LG,
    stickyText: "",
    background: "",
    labelClassName: "",
  },
};
