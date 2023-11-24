import { FormInputLabel, Group, Input } from "./form-input.style";

const FormInput = ({ lable, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {lable && (
        <FormInputLabel htmlFor={otherProps.name}>{lable}</FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
