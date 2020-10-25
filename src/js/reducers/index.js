import { GET_POST } from "../constants/index";
import { GET_ALL_POSTS } from '../constants/index';
import { ADD_COMMENT } from '../constants/index';
import {RESET} from '../constants/index';
//add reducer
export const initialState = {
    posts:[]
,curentPost : {}};


////////////
const addReducer = (state = initialState, action) =>{
  if (action.type === GET_POST) {
    console.log(action.payload)
    // const obj = state.posts.filter( el => el._id == action.payload)[0]
     return {...state , curentPost : action.payload}}

///works just fine

  if(action.type === GET_ALL_POSTS) {
    return {...state, posts : action.payload}}

  if(action.type === RESET){
    return {...state , curentPost : {}}
  }
  return state}
  
  export default addReducer

  export const commentReducer = (state = initialState, action)=>{
    if(action.type === ADD_COMMENT) {
      return {...state, curentPost:[{comments:action.payload}]}
    }
  }