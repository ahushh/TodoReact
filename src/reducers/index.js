import { combineReducers } from 'redux';
import { default  as projects } from './project';

const reducer = combineReducers({
    projects
});

export default reducer;

