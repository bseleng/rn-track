import React from "react";
import { Control, Controller, RegisterOptions } from "react-hook-form";
import { Input } from "react-native-elements";
import { SignUpFormValues } from "../../screens/SignUpScreen";
import { FieldErrors } from "react-hook-form/dist/types/errors";

interface IProps {
  control: Control<SignUpFormValues>;
  rules?: RegisterOptions;
  errors: FieldErrors<SignUpFormValues>;
  label: string;
  name: keyof SignUpFormValues;
  errorMessage: string;
  autoCorrect?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  secureTextEntry?: boolean;
}

const HookFormInput = ({
  control,
  rules,
  errors,
  label,
  name,
  errorMessage,
  autoCorrect,
  autoCapitalize,
  secureTextEntry,
}: IProps) => {
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
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            secureTextEntry={secureTextEntry}
            errorMessage={errors[name] ? errorMessage : undefined}
            errorStyle={{}}
          />
        )}
        name={name}
      />
    </>
  );
};

export default HookFormInput;
