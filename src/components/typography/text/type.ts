import { HTMLAttributes } from "react";

import Base, { SIZE_ENUM } from "../../../@types/types";

export enum TEXT_TYPE {
  SPAN = "span",
  P = "p",
}

export interface Props extends Base, HTMLAttributes<HTMLParagraphElement> {
  size?: SIZE_ENUM;
  type?: TEXT_TYPE;
  justify?: boolean;
  light?: boolean;
  semiBold?: boolean;
  medium?: boolean;
  bold?: boolean;
  inline?: boolean;
  center?: boolean;
}
