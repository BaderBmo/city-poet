import { createStore , applyMiddleware, compose} from "redux";
import { combineReducers }from 'redux'
import addReducer from "../reducers/index";
import commentReducer from '../reducers/index'
import thunk from 'redux-thunk';
const reducer = combineReducers({
    addReducer,
    commentReducer

})

const store = createStore(  reducer ,
    compose (applyMiddleware(thunk), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
export default store;