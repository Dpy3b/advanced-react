import { allActionCreators } from './../store/reducers/action-creators';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppDispatch } from '../store';

// кастомный хук чтобы не диспатчить наши экшн криэйторы
export const useActions = () => {
	const dispatch = useDispatch<AppDispatch>(); // немного не понял смысл, что пишем что не пишем
	// функцию bindActionCreators предоставляет редакс
	return bindActionCreators(allActionCreators, dispatch); // мы биндим (привязываем) диспатч к нашим экшн-криэйторам чтобы не писать его
}

