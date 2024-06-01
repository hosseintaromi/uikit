import { Meta, Story } from "@storybook/react";
import { SIZE_ENUM } from "../@types/types";
import "./output.css";
import Text from "../components/typography/text";

type DemoProps = {
  length: number;
};

const Demo = ({ length }: DemoProps) => (
  <>
    <p className="text-amber-700 text-2xl">hello</p>
    <Text center size={SIZE_ENUM.XXS} className="text-amber-700">
      helloeeee
    </Text>
  </>
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
