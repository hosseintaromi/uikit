import type { Meta, StoryObj } from "@storybook/react";

import { AiFillGooglePlusCircle, AiFillHeart } from "react-icons/ai";
import ICON_SIZE from "../constant/icon-size-color";
import { Input } from "../components";
import { SIZE_ENUM } from "../@types/types";
import { INPUT_TYPES } from "../@types/input/input";

type InputPropsAndCustomArgs = React.ComponentProps<typeof Input>;

const None = undefined;
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

export const TextInput: Story = {
  argTypes: {
    label: {
      description: "you can pass string to show label for input",
      defaultValue: "",
    },
    errorMessage: {
      description:
        "You must pass the text of the message as a string and the color will change automatically. Note that you must implement the validation system yourself and only pass the error text.",
    },
    LeftIcon: {
      options: Object.keys(arrows),
      mapping: arrows,
      description:
        "To display the icon on the right side, you need to pass ReactNode",
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
      description:
        "you should pass input type form INPUT_TYPES enum import form package",
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
      description:
        "you should pass input size form SIZE_ENUM enum import form package",
    },
    stickyText: {
      description:
        "you should pass string to show right side of the input Note that once you have passed lefticon, stickynote will not be displayed anymore because they interfere with UI",
    },
    background: {
      description: "you can pass class name to input",
    },
    labelClassName: {
      description: "you can pass class name to input",
    },
    autoFocus: {},
  },
  args: {
    label: "شماره کارت خود را وارد کنید",
    errorMessage: "",
    LeftIcon: undefined,
    type: INPUT_TYPES.TEXT,
    size: SIZE_ENUM.XXL,
    stickyText: "",
    // background: "",
    // labelClassName: "",
  },
};
