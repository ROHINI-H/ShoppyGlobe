import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem(state, action) {
            const item = action.payload;
            const present = state.items.find(i => i.id == item.id);
            if (present) {
                present.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
        },
        removeItem(state, action) {
            state.items = state.items.filter(i => i.id != action.payload);
        },
        updateQuantity(state, action) {
            const { id, quantity } = action.payload;
            const item = state.items.find(i => i.id == id);
            if (item) item.quantity = quantity;
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer; 