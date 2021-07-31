
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product.reducer';
import userReducer from './user.reducer';
import todoReducer from './todo.reducer';
import commonReducer from './common.reducer';

export default configureStore({
  reducer: {
    productReducer: productReducer,
    userReducer: userReducer,
    todoReducer: todoReducer,
    commonReducer: commonReducer,
  },
});
