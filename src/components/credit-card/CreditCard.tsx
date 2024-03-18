import Cards from "react-credit-cards-2";
import { Button, Form, type FormProps } from "antd";

import InputNumberValidate from "../FormComponents/InputNumberValidate";

import "react-credit-cards-2/dist/es/styles-compiled.css";
import "./CreditCard.css";
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

const { useForm, useWatch } = Form;

export const CreditCard = () => {
  const [formRef] = useForm();

  const cvcCard = useWatch("cvc", formRef) || "";
  const nameCard = useWatch("name", formRef) || "";
  const numberCard = useWatch("number", formRef) || "";
  const expiryCard = useWatch("expiry", formRef) || "";

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  //  console.log("state", state);

  return (
    <div className="credit-card">
      <Cards
        cvc={cvcCard}
        expiry={expiryCard}
        focused={cvcCard ? "cvc" : ""}
        name={nameCard}
        number={numberCard}
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
            <InputNumberValidate
              placeholder="Numero de la tarjeta"
              maxLength={16}
            />
          </Form.Item>

          <Form.Item<FieldType>
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <InputLettersValidate placeholder="Nombre del titular" />
          </Form.Item>

          <Form.Item<FieldType>
            name="expiry"
            rules={[
              { required: true, message: "Please input your name!", max: 4 },
            ]}
          >
            <InputNumberValidate
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
            <InputNumberValidate placeholder="CVV" maxLength={3} />
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
