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
  const [val, setVal] = useState("");

  return (
    <div style={{ direction: "rtl" }}>
      <Input
        label="شماره کارت"
        // background="bg-[#333333]"
        // LabelClassName="text-white"
        // stickyText="تومان"
        errorMessage="hslle"
        LeftIcon={() => (
          <AiFillAlipayCircle
            size={ICON_SIZE.lg}
            color={ICON_COLOR.light_blue}
          />
        )}
        size={SIZE_ENUM.XL}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
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
