import { GET_POST } from "../constants/index";
import axios from "axios";
import {getArticle} from './index'

//GET ONE POST
export const getPost = (id) =>dispatch =>{
    axios.get( `/Post/${id}`)
    .then(res => dispatch( {
        type : GET_POST,
        payload : res.data,
      }))
    .catch(err => console.log(err , 'getPost: error '))}

/////////////////////////////////////////////////////////////

//UPDATE ONE POST
export const updatePost = ( pay , id ) => dispatch => {
    axios.put(`/Post/${id}`, { payload :pay } )
    .then(dispatch(getArticle(id)))
    .catch(err =>  console.log(err , 'updatePost: error '))}
    
/////////////////////////////////////////////////////////////

//DELETE ONE POST
export const deleteArticle = (id) => dispatch=>{
    axios.delete( `/delete_post/${id}`)
    .then(res =>dispatch(getArticle ()))
    .catch(err => console.log(err ,'deleteArticle: error'))} 