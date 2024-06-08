import { ReactNode, TextareaHTMLAttributes } from "react";
import { AllowedInputTypes } from "react-otp-input";

import Base, { SIZE_ENUM } from "../types";
import { INPUT_VARIANTS } from "./textInput.model";
import { INPUT_TYPES, BaseProps } from "../input";

type TextAreaType = {
  label?: string;
  type?: INPUT_TYPES | AllowedInputTypes;
  variant?: INPUT_VARIANTS;
  size?: SIZE_ENUM;
  errorMessage?: string;
  stickyText?: string;
  Icon?: (params: any) => ReactNode;
  LeftIcon?: (params: any) => ReactNode;
} & Base &
  BaseProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">;

export default TextAreaType;
