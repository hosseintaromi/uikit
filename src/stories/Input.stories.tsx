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
  length: number;
};

const Demo = ({ length }: DemoProps) => {
  const [val, setVal] = useState(false);

  return (
    <div
      style={{
        direction: "rtl",
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
      }}
    >
      <Input
        label="شماره کارت"
        size={SIZE_ENUM.XXS}
        errorMessage={val ? "slm" : ""}
      />
      <Input
        label="رمز کارت حسین آقا"
        size={SIZE_ENUM.XXS}
        errorMessage={val ? "slm" : ""}
      />
      <button onClick={() => setVal((pre) => !pre)}>sdf</button>
    </div>
  );
};

const meta: Meta = {
  title: "base",
  component: Demo,
  argTypes: {
    length: {
      control: {
        type: "number",
      },
      defaultValue: 10,
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DemoProps> = () => <Demo length={22} />;
export const Default = Template.bind({});
