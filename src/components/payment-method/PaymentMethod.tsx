import { Button } from "antd";
import data from "../../mocks/payment-methods.json";
import "./PaymentMethod.css";

interface Props {
  changeStep: Function;
}

export const PaymentMethod = ({ changeStep }: Props) => {
  return (
    <div>
      <ul className="payment">
        {data.map((item) => (
          <Button className="card" onClick={() => changeStep(1)} key={item.id}>
            <img className="payment_image" src={item.image} alt="" />
            <hr />
            <h4>{item.title}</h4>
          </Button>
        ))}
      </ul>
    </div>
  );
};
