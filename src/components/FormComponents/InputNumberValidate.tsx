import { Input, InputProps } from "antd";
import { ONLY_NUMBERS } from "../../utils/constants/ValidateFieldForm";

export type InputNumberValidateProps = {
  onChange?: (value: string) => void;
} & InputProps;

const InputNumberValidate = ({
  value,
  onChange,
  ...props
}: InputNumberValidateProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value == "" || ONLY_NUMBERS.test(value)) {
      onChange && onChange(value);
    }
  };

  return (
    <Input
      {...props}
      value={value}
      onChange={handleChange}
      onFocus={handleChange}
      onBlur={handleChange}
    />
  );
};

export default InputNumberValidate;
