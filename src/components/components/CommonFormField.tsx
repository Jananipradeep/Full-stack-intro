"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import React, { memo, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

export interface ICommonFormFieldProps {
  control: any;
  name: string;
  type: FormControlType;
  label?: string;
  placeholder?: string;
  options?: any;
}

type FormControlType =
  | "text"
  | "select"
  | "checkbox"
  | "textarea"
  | "password"
  | "otp";

const CommonFormField = ({
  control,
  name,
  type,
  label,
  placeholder,
}: ICommonFormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className="px-1 font-satoshi_regular text-xs">
              {label}
            </FormLabel>
          )}
          <FormControl>
            {type === "password" ? (
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  id={name}
                  placeholder={placeholder}
                  className="form-input"
                  {...field}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center border-none bg-transparent px-3 focus:outline-none"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? (
                    <FiEye className="input-icon" />
                  ) : (
                    <FiEyeOff className="input-icon" />
                  )}
                </button>
              </div>
            ) : type === "otp" ? (
              <InputOTP maxLength={4} {...field}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            ) : (
              <Input
                type={type}
                id={name}
                placeholder={placeholder}
                className="form-input"
                {...field}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default memo(CommonFormField);
