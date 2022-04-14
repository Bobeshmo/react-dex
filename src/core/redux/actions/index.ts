import * as AuthActions from './auth';
import * as TeamActions from './teams';

export const Actions = {
    ...AuthActions,
    ...TeamActions,
}