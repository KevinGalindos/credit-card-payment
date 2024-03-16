import { Modal as Alert } from "antd";
import { ModalProps } from "../../api/interfaces/products.interface";
import { PaymentMethod } from "../payment-method/PaymentMethod";

export function Modal({ modalOpen, setModalOpen }: ModalProps) {
  return (
    <div>
      <Alert
        title="Escoge un metodo de pago "
        centered
        open={modalOpen}
        okText={"Continuar"}
        cancelText={"Cancelar"}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={800}
      >
        <PaymentMethod />
      </Alert>
    </div>
  );
}
