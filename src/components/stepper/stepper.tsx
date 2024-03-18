import { Steps } from "antd";

interface Props {
  step: number;
}
export const Stepper = ({ step }: Props) => (
  <div className="stepper">
    <Steps
      current={step}
      items={[
        {
          title: "Metodo de pago",
        },
        {
          title: "Información",
        },
        {
          title: "Confirmación",
        },
      ]}
    />
  </div>
);
