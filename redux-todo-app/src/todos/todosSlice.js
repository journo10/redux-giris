import { createSlice } from "@reduxjs/toolkit"

export const todosSlice = createSlice({
    name: "todos",

    //state
    initialState: {
        items: [
            { id: 1, title: "Kod yazmak", completed: true },
            { id: 2, title: "Sahile inmek", completed: false }
        ],
        activeFilter: "all",
    },

    //actions
    reducers: {
        //todo ekle
        addTodo: (state, action) => {
            state.items.push(action.payload)
        },
        //completed 
        toggle: (state, action) => {
            const { id } = action.payload;
            const item = state.items.find((i) => i.id === id);
            item.completed = !item.completed
        },
        //delete
        deleteTodo: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter((i) => i.id !== id);
            state.items = filtered;
        },
        //filter
        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        },
        //clearCompleted
        clearCompleted: (state) => {
            const filtred = state.items.filter((item) => item.completed === false)
            state.items = filtred;
        }
    }
})

export const { addTodo, toggle, deleteTodo, changeActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;