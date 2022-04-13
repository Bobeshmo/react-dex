import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../core/redux/store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;