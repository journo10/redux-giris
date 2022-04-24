import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: "counter", //state ulaşmak için verilen key, state.counter gibi

    //state
    initialState: {//ilk state değerleri için oluşturulan kısım.
        value: 0
    },

    //actions
    reducers: {//state güncelleyecek tanımların yazıldığı kısım.
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += +action.payload;//action.payload =>inputa girilen değer.Action.payload başındaki + işraeti girilen değer string ise number yapar. Şu şekilde tanımlanabilirdi =>Number(action.payload)
        }
    }

})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;//dışa aktarılan actions
export default counterSlice.reducer;