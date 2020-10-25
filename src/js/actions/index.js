//ACTIONS
import { GET_ALL_POSTS } from '../constants';
import {RESET} from '../constants'
import axios from 'axios'

//RESET
export const resetCurrentPost = (payload) =>{
  return { type: RESET, payload }};

/////////////////////////////////////////////////

//ADD NEW ARTICLE
export const addArticle = (obj) =>dispatch=> {
  axios.post('/Write_new_post', obj)
  .then(res =>dispatch( getArticle ()))
  .catch(err => console.log(err ,'addArticle: error'))}

/////////////////////////////////////////////////

//GET ALL ARTICLES
export const getArticle = () => dispatch=>{
  axios.get('/Posts')
  .then(res =>dispatch({
    type : GET_ALL_POSTS,
    payload : res.data}))
  .catch(err => console.log(err, 'getArticle: error'))};