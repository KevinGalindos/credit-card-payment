import { createSlice } from '@reduxjs/toolkit'
import { Products } from '../../api/interfaces/products.interface'

const initialState = {
  list: <Products[]>[]
}


export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // deleteProductId: (state, action: PayloadAction<ProductId>) => {
    //   const id = action.payload;
    //   return state.products.filter((user) => user.id !== id)
    // },
    setProductsList: (state, action) => {
      state.list = action.payload;
    }
  },
})

export default productsSlice.reducer

export const { setProductsList } = productsSlice.actions