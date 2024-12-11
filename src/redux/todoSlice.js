/** @format */

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: "todoList",
	initialState: {
		data: [],
	},
	reducers: {
		gedData: (state, action) => {
			state.data.push(action.payload);
		},
		editData: (state, action) => {
			const index = state.data.findIndex((item) => item.id === action.payload.id);
			if (index !== -1) {
				state.data[index].todo = action.payload.todo;
			}
		},
		deleteData: (state, action) => {
			state.data = state.data.filter((item) => item.id !== action.payload);
		},
	},
});

export const { gedData, editData, deleteData } = todoSlice.actions;
export default todoSlice.reducer;
