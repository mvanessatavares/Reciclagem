import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { TextInputField, TextInputProps } from '../TextInputField';

export function ControllerTextInput<FormRegisterType extends FieldValues>({
  name,
  rules,
  control,
  label,
  ...textInputProps
}: UseControllerProps<FormRegisterType> & TextInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextInputField
          label={label}
          value={field.value}
          onChangeText={field.onChange} //onChangeText={field.onChange}
          onBlur={field.onBlur}
          errorMessage={fieldState.error?.message}
          {...textInputProps}
        />
      )}
    />
  );
}
