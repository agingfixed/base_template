import {combineReducers} from 'redux';
import {templateReducer} from './template_reducer.js';


const allReducers = combineReducers({
    template_reducer: templateReducer
});

export default allReducers;