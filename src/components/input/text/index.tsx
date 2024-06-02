import { forwardRef } from "react";

import cn from "../../../utils/clsxm";

import { COLOR_ENUM, SIZE_ENUM } from "../../../@types/types";
import Container from "../../container";
import TextInputType, {
  INPUT_TYPES,
} from "../../../@types/input/textInput.model";
import "./index.css";
import Text from "../../typography/text";

import ICON_SIZE, { ICON_COLOR } from "../../../constant/icon-size-color";

function TextInput(
  {
    id = "",
    value = "",
    className,
    LabelClassName,
    type = INPUT_TYPES.TEXT,
    size = SIZE_ENUM.XXL,
    label,
    Icon,
    LeftIcon,
    stickyText,
    errorMessage,
    LeftIconClass,
    background = "bg-white",
    ...other
  }: TextInputType,
  ref: any,
) {
  return (
    <>
      <Container className="relative  float-label-input bg-inherit	">
        {errorMessage && (
          <Text size={SIZE_ENUM.XS} color={COLOR_ENUM.ERROR}>
            {errorMessage}
          </Text>
        )}
        {Icon && (
          <Container center className="absolute inset-y-0 right-0 w-8">
            <Icon />
          </Container>
        )}
        {stickyText && (
          <Container center className="absolute inset-y-0 left-4">
            <Text>{stickyText}</Text>
          </Container>
        )}
        {LeftIcon && (
          <Container
            center
            className={cn("absolute left-4 top-4", LeftIconClass)}
          >
            <LeftIcon />
          </Container>
        )}
        <input
          type="text"
          id={id}
          placeholder=" "
          className={cn(
            "focus:outline-none focus:shadow-outline py-3 px-3  appearance-none leading-normal focus:border-blue-400 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none",
            size === SIZE_ENUM.XXS && "h-4",
            size === SIZE_ENUM.XS && "h-6",
            size === SIZE_ENUM.SM && "h-7",
            size === SIZE_ENUM.MD && "h-8",
            size === SIZE_ENUM.LG && "h-10",
            size === SIZE_ENUM.XL && "h-12",
            size === SIZE_ENUM.XXL && "h-14",
            background,
            Icon && "pr-8",
            stickyText && "pl-8",
            errorMessage &&
              "border-error focus:border-error border-solid focus:ring-0",
            className,
          )}
          {...other}
        />

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        {label && (
          <label
            htmlFor={id}
            className={cn(
              "absolute right-2 -translate-y-2/4 top-2/4 pointer-events-none transition duration-200 ease-in-out py-0 px-2 text-grey-darker block  text-gray-900",
              LabelClassName,
              background,
              size === SIZE_ENUM.XXS && "text-xs",
              size === SIZE_ENUM.XS && "text-xs",
              size === SIZE_ENUM.SM && "text-xs",
              size === SIZE_ENUM.MD && "text-xs",
              size === SIZE_ENUM.LG && "text-sm",
              size === SIZE_ENUM.XL && "text-base",
              size === SIZE_ENUM.XXL && "text-lg",
            )}
          >
            {label}
          </label>
        )}
      </Container>
    </>
  );
}

export default forwardRef(TextInput);
