import { getAllProduts } from "../services/productsApi";
import { setProductsList } from "../store/products/slice"
import { useAppDispatch } from './store'

export const useProductsActions = () => {
  const dispatch = useAppDispatch();
  // const removeProduct = (id: ProductId) => {
  //   console.log(id);
  //   dispatch(deleteProductId(id))
  // }
  const getProducts = async () => {
    const data = await getAllProduts()
    dispatch(setProductsList(data))
  }
  return { getProducts }
}
