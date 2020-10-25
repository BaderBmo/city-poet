import React, { Component } from 'react'
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import {getPost} from '../actions/post'

const mapStateToProps = state => {
    return { posts :  state.addReducer.posts}
  }

class RecentCards extends Component {
    render() {
      return (
      <div className='recent-section'>
      {this.props.posts.slice(Math.max(this.props.posts.length - 2, 0)).map(el => <Card description={el} />)}
      </div>
      )
    }
  }

class Card extends Component {
constructor(props){
super(props)
this.state ={
    bool :true,}}

like =()=>{
    this.setState( {
        bool:!this.state.bool})}

    render() {
    return (
        <div className='recent-card' >
            <div className='recent-image'>
                <img alt='cover' src={this.props.description.image} />
            </div>
            <div className='article-content'>
                <Link className='post-title' to =  {`/Article/${this.props.description._id}`} onClick={()=>this.props.getPost(this.props.description._id)} >
                    <div className='post-title'>{this.props.description.title.substr(0, 50)}...</div>
                </Link>
                <div className='post-infos'>
                    <div className='post-views'>0 <img className='view-icon' src="https://img.icons8.com/ios/50/000000/invisible.png" alt='comment-icon' /></div>
                    <div className='post-comment'>{this.props.description.comments.length} <img className='comment-icon' src="https://img.icons8.com/ios/50/000000/comments.png" alt='comment-icon' /></div>
                    <div className='post-like'>
                        <i onClick={this.like} style={{color:this.state.bool ? 'black' :'rgb(252, 6, 59)',fontWeight:this.state.bool? 'lighter':'bold'}} className="far fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>)}}

export default connect(mapStateToProps,{getPost})(RecentCards)