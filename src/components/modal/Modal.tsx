import { Modal } from "antd";
import { ModalProps } from "../../api/interfaces/products.interface";
import { PaymentMethod } from "../payment-method/PaymentMethod";
import { useState } from "react";
import { CreditCard } from "../credit-card/CreditCard";
import { Stepper } from "../stepper/stepper";
import "./Modal.css";

export function ModalPayment({ modalOpen, setModalOpen }: ModalProps) {
  const [step, setStep] = useState(0);

  const changeStep = (currentStep: number) => {
    setStep(currentStep);
  };

  const closeModal = () => {
    setModalOpen(false);
    setStep(0);
  };

  const onOk = () => {
    setModalOpen(false);
    setStep(0);
  };

  return (
    <div>
      <Modal
        title="Escoge un metodo de pago"
        centered
        open={modalOpen}
        cancelText={"Cancelar"}
        okText={"Continuar"}
        onOk={() => onOk()}
        onCancel={() => closeModal()}
        width={800}
      >
        <Stepper step={step} />
        {step === 0 && <PaymentMethod changeStep={changeStep} />}
        {step === 1 && <CreditCard />}
      </Modal>
    </div>
  );
}
