import { Button } from "antd";
import data from "../../mocks/payment-methods.json";
import "./PaymentMethod.css";

export const PaymentMethod = () => {
  return (
    <div>
      <ul className="payment">
        {data.map((item) => (
          <li key={item.id} className="card">
            <img className="payment_image" src={item.image} alt="" />
            <hr />
            <h4>{item.title}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};
