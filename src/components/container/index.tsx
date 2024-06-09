import { createElement } from "react";
import { CONTAINER_TAG_TYPE, type Props } from "../../@types/container";
import cn from "../../utils/clsxm";

export default function Container({
  className,
  center = false,
  type = CONTAINER_TAG_TYPE.DIV,
  children,
  ...props
}: Props) {
  return createElement(
    type,
    {
      className: cn(center && "flex items-center justify-center", className),
      ...props,
    },
    children,
  );
}
