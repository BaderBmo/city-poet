import React, { Component } from 'react'
import PostCard from './PostCard'
import Toolbar from './Toolbar'
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { posts :  state.addReducer.posts}
  }

class HomePosts extends Component {
  render() {
    return (
    <div className='home-posts'>
        {this.props.posts.slice(Math.max(this.props.posts.length - 3, 0)).map(el => <PostCard description={el} />)}
        <Toolbar/>
    </div>
    )
  }
}

export default connect(mapStateToProps)(HomePosts);