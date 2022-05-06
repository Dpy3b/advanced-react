import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";


// импортируем сюда все редюсеры чтобы не нагромождать код
// инициализируем корневой редюсер из всех наших редюсеров
const rootReducer = combineReducers(reducers)

// помещаем корневой редюсер в хранилище
export const store = createStore(rootReducer, applyMiddleware(thunk)) // добавляем в хранилище корневой редюсер и промежуточное ПО для асинхронных запросов


// вот эти методы из документации редакса на оф. сайте
export type RootState = ReturnType<typeof store.getState> // получаем тип состояния

export type AppDispatch = typeof store.dispatch // получаем тип диспатча
