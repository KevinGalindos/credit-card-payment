import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "./CreditCard.css";
import { Button, Form, type FormProps, Input } from "antd";
import { ONLY_NUMBERS } from "../../utils/constants/ValidateFieldForm";
import InputNumberValidate from "../FormComponents/InputNumberValidate";
import InputLettersValidate from "../FormComponents/InputLettersValidate";

type FieldType = {
  name?: string;
  number?: number;
  expiry?: string;
  cvc?: string;
};

export interface evtProps {
  evt: React.ChangeEvent<HTMLInputElement>;
}

export const CreditCard = () => {
  const [formRef] = Form.useForm();

  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  const [isCvc, setCvc] = useState<number>();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChangeCvc = (evt) => {
    const { name, value } = evt.target;
    const validateNumber = ONLY_NUMBERS.test(value);
    if (validateNumber) {
      setState((prev) => ({ ...prev, [name]: value }));
      setCvc(value);
    }
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };
  //  console.log("state", state);

  return (
    <div className="credit-card">
      <Cards
        cvc={state.cvc}
        expiry={state.expiry}
        focused={state.focus}
        name={state.name}
        number={state.number}
      />
      <div>
        <Form
          form={formRef}
          name="form-credit-card"
          initialValues={{ remember: false }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item<FieldType>
            name="number"
            rules={[
              {
                required: true,
                message: "Please input the credit card number!",
                max: 16,
              },
            ]}
          >
            {/* <Input
              onFocus={handleInputFocus}
              name="number"
              onChange={handleInputChange}
              placeholder="Numero de la tarjeta"
              maxLength={16}
            /> */}
            <InputNumberValidate />
          </Form.Item>

          <Form.Item<FieldType>
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            {/* <Input
              onFocus={handleInputFocus}
              onChange={handleInputChange}
              name="name"
              placeholder="Nombre del titular"
            /> */}
            <InputLettersValidate />
          </Form.Item>

          <Form.Item<FieldType>
            name="expiry"
            rules={[
              { required: true, message: "Please input your name!", max: 4 },
            ]}
          >
            <Input
              onFocus={handleInputFocus}
              onChange={handleInputChange}
              name="expiry"
              placeholder="Fecha de vencimiento"
              maxLength={4}
            />
          </Form.Item>
          <Form.Item<FieldType>
            name="cvc"
            rules={[
              {
                required: true,
                message: "Please input your name!",
                max: 3,
                min: 3,
              },
            ]}
          >
            <Input
              onFocus={handleInputFocus}
              onChange={(e) => handleInputChangeCvc(e)}
              id="cvc"
              name="cvc"
              placeholder="cvv"
              maxLength={3}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Continuar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
