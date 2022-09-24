import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import basketSlice from '../../features/basket/basketSlice';
import catalogSlice from '../../features/catalog/catalogSlice';
import { counterSlice } from '../../features/contact/counterSlice'
import { incremented, decremented } from "../../features/contact/counterSlice"
import { testSlice } from '../../features/contact/testSlice';
import { homeSlice } from '../../features/home/homeSlice';


//เป็นค่า Default ที่มีอยู่ใน store คือ store.getState, store.dispatch (ใช้ตามรูปแบบเขาเลย)
export type RootState = ReturnType<typeof store.getState>	// ค่าของ state ทั้งหมด
export type AppDispatch = typeof store.dispatch;			// dispatch สำหรับเรียก action
 
//สำหรับเรียกใข้ dispatch และ state (ใช้ตามรูปแบบเขาเลย)
export const useAppDispatch = ()=>useDispatch<AppDispatch>()
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector



export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        screen: homeSlice.reducer,
        basket: basketSlice,
        catalog: catalogSlice 
    }
  })
  
  // Can still subscribe to the store
  store.subscribe(() => console.log(store.getState()))
  
