import { useEffect, useState } from "react";
import { Products } from "../../api/interfaces/products.interface";
import { API_BASE_URL } from "../../utils/constants/ApiBaseUrl";

export const Card = () => {
  const [items, setItems] = useState<Array<Products>>([]);

  useEffect(() => {
    fetch(API_BASE_URL)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <h1>Productos:</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <img src={item.image} alt="" />
            <h4> ${item.price}</h4>
            <button>Comprar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
