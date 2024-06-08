import { ButtonHTMLAttributes } from "react";

import Base, { COLOR_ENUM, SIZE_ENUM } from "./types";

export enum BUTTON_TYPE {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}

export enum VARIANT_ENUM {
  DEFAULT = "default",
  OUTLINED = "outlined",
  TEXT = "text",
}

export interface ButtonType extends Base {
  isLoading?: boolean;
  disabled?: boolean;
  type?: BUTTON_TYPE;
  size?: SIZE_ENUM;
  variant?: VARIANT_ENUM;
  color?: COLOR_ENUM;
  // FIXME: fix icon type
  Icon?: any;
}
