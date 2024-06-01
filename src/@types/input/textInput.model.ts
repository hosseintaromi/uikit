import { InputHTMLAttributes } from "react";

import Base, { SIZE_ENUM } from "../types";
import BaseProps from "./input.model";

export enum INPUT_TYPES {
  TEXT = "text",
  NUMBER = "number",
  EMAIL = "email",
  PASSWORD = "password",
  TEL = "tel",
}

export enum INPUT_VARIANTS {
  SIMPLE = "SIMPLE",
}

export default interface TextInputType
  extends BaseProps,
    Base,
    Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  type?: INPUT_TYPES;
  variant?: INPUT_VARIANTS;
  size?: SIZE_ENUM;
  errorMessage?: string;
  stickyText?: string;
  Icon?: (params: any) => JSX.Element;
  LeftIcon?: (params: any) => JSX.Element;
  LeftIconClass?: string;
  LabelClassName?: string;
  background: string;
}
