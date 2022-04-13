import {useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import * as AuthAction from "../core/redux/actions/auth";
import * as TeamAction from "../core/redux/actions/teams";

const useAuthActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(AuthAction, dispatch);
};

const useTeamActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(TeamAction, dispatch);
};

export {
    useAuthActions,
    useTeamActions,
}