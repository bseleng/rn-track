import React from "react";
import { Control, Controller, RegisterOptions } from "react-hook-form";
import { Input, Text } from "react-native-elements";
import { SignUpFormValues } from "../../screens/SignupScreen";
import { FieldErrors } from "react-hook-form/dist/types/errors";

interface IProps {
  control: Control<SignUpFormValues>;
  rules?: RegisterOptions;
  errors: FieldErrors<SignUpFormValues>;
  label: string;
  name: keyof SignUpFormValues;
  errorMessage: string;
}

const HookFormInput = ({
  control,
  rules,
  errors,
  label,
  name,
  errorMessage,
}: IProps) => {
  console.log("errors", errors);
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label={label}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name}
      />
      {errors[name] && <Text>{errorMessage}</Text>}
    </>
  );
};

export default HookFormInput;
