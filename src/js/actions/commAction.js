import axios from 'axios'
import{ getArticle} from './index'
export const insertComment = (payload ,id) => dispatch=>{
  axios.put( `/add_comment/${id}`,{ comment : payload })
  .then(res => dispatch(getArticle()))
  .catch(err => console.log('axios: can not add comment'))
}