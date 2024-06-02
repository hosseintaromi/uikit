import { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { SIZE_ENUM } from "../@types/types";
import "./output.css";
import { Input } from "../components";
// eslint-disable-next-line import/order
import { AiFillAlipayCircle } from "react-icons/ai";
// eslint-disable-next-line import/order
import ICON_SIZE, { ICON_COLOR } from "../constant/icon-size-color";

type DemoProps = {
  label: string;
};

const Demo = ({ label }: DemoProps) => {
  const [val, setVal] = useState(false);

  return (
    <div
      style={{
        direction: "rtl",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Input
        label={label}
        size={SIZE_ENUM.XL}
        errorMessage={val ? "slm" : ""}
      />
      <button onClick={() => setVal((pre) => !pre)}>sdf</button>
    </div>
  );
};

const meta: Meta = {
  title: "Design System/Input",
  component: Demo,
  argTypes: {
    label: {
      control: {
        type: "string",
      },
      defaultValue: "نام و نام خانوادگی",
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DemoProps> = () => <Demo label="sss" />;
export const TextInput = Template.bind({});
