//=====================================
// import { createSlice } from '@reduxjs/toolkit';

// // Початкове значення фільтру
// const filterInitialState = '';

// // Створення slice фільтру за допомогою createSlice
// const filterSlice = createSlice({
//   // Ім'я slice фільтру
//   name: 'filter',
//   // Початковий стан фільтру
//   initialState: filterInitialState,
//   // Reducers
//   reducers: {
//     // Зміна значення фільтру
//     setFilter(state, action) {
//       return (state = action.payload);
//     },
//   },
// });

// // Експортуємо actions з filterSlice
// export const { setFilter } = filterSlice.actions;
// // Експортуємо reducer з filterSlice
// export const filterReducer = filterSlice.reducer;


// import createSlice function
import { createSlice } from '@reduxjs/toolkit';

// filterSlice
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;