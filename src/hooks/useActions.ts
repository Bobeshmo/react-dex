import {useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import Actions from "../core/redux/actions";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(Actions, dispatch);
};