import { Switch } from "@headlessui/react";

import cn from "../../../utils/clsxm";

import Container from "../../container";
import Toggle from "./toggle";
import Props from "./type";
import Text from "../../typography/text";

export default function CheckBox({
  onChange,
  checked = false,
  className,
  text,
}: Props) {
  return (
    <Switch checked={checked} onChange={onChange}>
      <Container className={cn(text && "flex items-center gap-2.5")}>
        <Container
          className={cn(
            "flex h-[18px] w-[18px] items-center justify-center rounded border-2 border-i-gray",
            checked && "border-primary-50 bg-primary-50",
            className,
          )}
        />
        {text && <Text bold>{text}</Text>}
      </Container>
    </Switch>
  );
}

export { Toggle };