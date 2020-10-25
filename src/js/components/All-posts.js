import React, { Component } from 'react'
import PostCard from './PostCard'
import Toolbar from './Toolbar'
import { connect } from "react-redux";
import {resetCurrentPost} from '../actions/index'

const mapStateToProps = state => {
    return { posts :  state.addReducer.posts}}

class Posts extends Component {
  componentDidMount=()=> {
    this.props.resetCurrentPost()
}
  render() {
    return (
    <div className='home-posts'>
        {this.props.posts.map(el => <PostCard description={el} />)}
        <Toolbar/>
    </div>
    )
  }
}

export default connect(mapStateToProps,{resetCurrentPost})(Posts);