export interface Products {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: Rating
}

export interface Rating {
  rate: number,
  count: number
}

export interface ModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
