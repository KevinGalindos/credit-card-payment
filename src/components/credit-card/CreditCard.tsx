import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "./CreditCard.css";
import { Button, Form, type FormProps, Input, InputNumber } from "antd";

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
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

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
          name="form-credit-card"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="number"
            rules={[
              {
                required: true,
                message: "Please input the credit card number!",
                len: 16,
                type: "number",
              },
            ]}
          >
            <InputNumber type="number" placeholder="Numero de la tarjeta" />
          </Form.Item>

          <Form.Item<FieldType>
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Nombre del titular" />
          </Form.Item>

          <Form.Item<FieldType>
            name="expiry"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Fecha de vencimiento" />
          </Form.Item>
          <Form.Item<FieldType>
            name="cvc"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="cvv" />
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
