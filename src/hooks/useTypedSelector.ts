import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store";

// в качестве дженейрика указываем тот тип, который отвечает за состояние нашего приложения
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector