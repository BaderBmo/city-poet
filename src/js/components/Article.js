import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import { connect } from "react-redux";
import {insertComment} from '../actions/commAction'
import {getPost} from '../actions/post'
import RecentCards from './RecentCards'

const mapStateToProps = state => {
    return { 
      post : state.addReducer.curentPost,}}

class Article extends Component {
    constructor(props){
        super(props)
        this.state ={
            bool :true,
            comment :''
        }
      }

componentDidMount () {
   this.props.getPost(this.props.match.params.id)
}

callFunction=()=>{
  this.props.insertComment(this.state.comment,this.props.match.params.id)
  this.props.getPost(this.props.match.params.id)
   this.setState({
    comment : ''
  })
}

////////////////////////////////////////////////////////////////
handleComment=(e)=>{
  this.setState({
    comment : e.target.value
  })}
////////////////////////////////////////////////////////////////

like =()=>{
  this.setState( {
      bool:!this.state.bool})
    }

render() {

return (
    <div className='article'>
        <div className='the-actual-artical'>
            <div className='article-infos'>
            Posted at {this.props.post.time} on {this.props.post.date}
            </div>
            <div className='article-title'>{this.props.post.title}</div>
            <div className='article-text'>{this.props.post.content}</div>
            <div className='article-image'>
                <img alt='artical-img' src={this.props.post.image} />
            </div>
            <div className='article-interactions'>
                <i onClick={this.like} style={{color:this.state.bool ? 'grey' :'rgb(252, 6, 59)',fontWeight:this.state.bool? 'lighter':'bold'}} className="far fa-heart"></i>
            </div>
        </div>

        <div className='the-see-all'>
            <h6>Posts récents</h6>
            <Link to='/home'>Page d'acceuil</Link>
        </div>

        <RecentCards/>

{this.props.post.comments && this.props.post.comments.map(el => <Comment description={el} />)}

        <form className='comment-section'>
        <div className='commentator'><img className='commentator-logo' alt='commentator-logo' src="https://img.icons8.com/cotton/64/000000/gender-neutral-user.png"/><p>commentateur</p></div>
            <textarea className='comment-input'
           
            placeholder='Rédigez un commentaire...' onChange={this.handleComment} />
            <div className='comment-Buttons'>
                <button type='reset' className='submit-comment' onClick={this.callFunction} >Publier</button>
                <button type='reset' className='delete-comment' >Annuler</button>
            </div>
        </form>  
        
    </div>
  )
}}

////////////////////////////////////////////////

class Comment extends Component {
  render() {
    return (
      <div className='comment'>

        <div className='comment-params'>
          <div className='commentator'>
            <img className='commentator-logo' alt='commentator-logo' src="https://img.icons8.com/cotton/64/000000/gender-neutral-user.png"/>
            <p>Commentateur</p>
          </div>

          <div className='comment-options'>

            <div className='hammadi'>
              <img className='com-dots' src="https://img.icons8.com/ios/50/000000/menu-2-filled.png" alt='3 dots'/>
              <div className='comments-drop'>
                  <p id='first-child'><img className='drop-icon' src="https://img.icons8.com/ios/50/000000/feathercoin.png" alt='edit' />Modifiez votre commentaire</p>
                  <p><img className='drop-icon' src="https://img.icons8.com/ios/50/000000/cancel.png" alt='delete' />Supprimez votre commentaire</p>
              </div>
            </div>

          </div> 

        </div>

        <div className='comment-text'>
          {this.props.description}
        </div>

      </div>
    )
  }
}

export default connect(mapStateToProps,{insertComment,getPost})(Article)