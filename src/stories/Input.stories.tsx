import { Meta, Story } from "@storybook/react";
import { SIZE_ENUM } from "../@types/types";
import "./output.css";
import Text from "../components/typography/text";
import { Input } from "../components";

type DemoProps = {
  length: number;
};

const Demo = ({ length }: DemoProps) => (
  <div style={{ direction: "rtl" }}>
    <Input label="slsls" />
  </div>
);

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
