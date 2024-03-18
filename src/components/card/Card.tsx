/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Products } from "../../api/interfaces/products.interface";
import { ModalPayment } from "../modal/Modal";
import { Button } from "antd";
import { useAppSelector } from "../../hooks/store";
import { useProductsActions } from "../../hooks/useProductsActions";

export const Card = () => {
  const products = useAppSelector((state) => state.products);
  const { getProducts } = useProductsActions();
  const [items, setItems] = useState<Products[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setItems(products.list);
  }, [products]);

  useEffect(() => {
    getProducts();
  }, []);

  console.log("products", products);

  return (
    <div>
      <h1>Productos:</h1>
      <ul>
        {items?.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <img src={item.image} alt="" />
            <h4> ${item.price}</h4>
            <Button type="primary" onClick={() => setModalOpen(true)}>
              Comprar
            </Button>
          </li>
        ))}
      </ul>
      <ModalPayment modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};
