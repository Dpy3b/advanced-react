import { allActionCreators } from './../store/reducers/action-creators';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
export const useActions = () => {
	const dispatch = useDispatch();
	// функцию bindActionCreators предоставляет редакс
	return bindActionCreators(allActionCreators, dispatch);
}

// кастомный хук чтобы не диспатчить наши экшн криэйторы