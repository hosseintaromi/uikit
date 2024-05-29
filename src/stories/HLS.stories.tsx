import { Meta, Story } from "@storybook/react";
import Button from "../components/button";
import { COLOR_ENUM } from "../@types/types";

type DemoProps = {
  length: number;
};

const Demo = ({ length }: DemoProps) => (
  <>
    <Button color={COLOR_ENUM.PRIMARY}> hello{length}</Button>
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
