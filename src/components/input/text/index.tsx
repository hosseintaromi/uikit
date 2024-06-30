import { forwardRef } from "react";

import cn from "../../../utils/clsxm";

import { COLOR_ENUM, SIZE_ENUM } from "../../../@types/types";
import Container from "../../container";

import "./index.css";
import Text from "../../typography/text";
import TextInputType from "../../../@types/input/textInput.model";
import { INPUT_TYPES } from "../../../@types/input";

function TextInput(
  {
    id = "",
    value = "",
    className,
    labelClassName,
    type = INPUT_TYPES.TEXT,
    size = SIZE_ENUM.XXL,
    label,
    Icon,
    LeftIcon,
    stickyText,
    errorMessage,
    LeftIconClass,
    background = "bg-neutral-900",
    hint,
    ...other
  }: TextInputType,
  ref: any,
) {
  return (
    <Container>
      <Container className="relative">
        <Container className="relative  float-label-input bg-inherit	">
          {Icon && (
            <Container center className="absolute inset-y-0 right-0 w-8">
              <Icon />
            </Container>
          )}
          {LeftIcon === undefined && stickyText && (
            <Container center className="absolute inset-y-0 left-4">
              <Text>{stickyText}</Text>
            </Container>
          )}
          {LeftIcon && (
            <Container
              center
              className={cn(
                "absolute left-4 -translate-y-2/4 top-2/4",
                LeftIconClass,
              )}
            >
              <LeftIcon />
            </Container>
          )}
          <input
            placeholder=" "
            className={cn(
              "focus:outline-none focus:shadow-outline focus:border-primary py-3 px-3  appearance-none leading-normal  block w-full rounded-lg border border-neutral-500  bg-gray-50 p-2.5 text-sm text-white outline-none",
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
                "border-danger focus:border-danger-500 border-solid focus:ring-0",
              className,
            )}
            ref={ref}
            value={value && value}
            type={type}
            id={id}
            {...other}
          />

          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          {label && (
            <label
              htmlFor={id}
              className={cn(
                "absolute right-3 -translate-y-2/4 top-2/4 pointer-events-none transition duration-200 ease-in-out py-0 px-2 text-grey-darker block  text-white",
                size === SIZE_ENUM.XXS && "text-xs",
                size === SIZE_ENUM.XS && "text-xs",
                size === SIZE_ENUM.SM && "text-xs",
                size === SIZE_ENUM.MD && "text-xs",
                size === SIZE_ENUM.LG && "text-sm",
                size === SIZE_ENUM.XL && "text-base",
                size === SIZE_ENUM.XXL && "text-lg",
                background,
                labelClassName,
                errorMessage && "text-danger",
              )}
              style={Icon && { fontSize: "80%", top: 0 }}
            >
              {label}
            </label>
          )}
        </Container>
        {errorMessage && (
          <Text
            className="px-2 absolute -bottom-7"
            size={SIZE_ENUM.MD}
            color={COLOR_ENUM.ERROR}
          >
            {errorMessage}
          </Text>
        )}
      </Container>
      {hint && <Text color={COLOR_ENUM.XLIGHT_GRAY}>{hint}</Text>}
    </Container>
  );
}

export default forwardRef(TextInput);
