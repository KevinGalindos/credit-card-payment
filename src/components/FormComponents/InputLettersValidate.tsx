import { Input, InputProps } from "antd";
import { ONLY_LETTERS } from "../../utils/constants/ValidateFieldForm";

export type InputLettersValidateProps = {
  onChange?: (value: string) => void;
} & InputProps;

const InputLettersValidate = ({
  value,
  onChange,
  ...props
}: InputLettersValidateProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value == "" || ONLY_LETTERS.test(value)) {
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

export default InputLettersValidate;
