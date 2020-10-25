import { connect } from "react-redux";
import {deleteArticle} from '../actions/post'
import React, { Component } from 'react'
import { Link} from 'react-router-dom'
class DropDown extends Component {

    handleID=(x)=>{
        this.props.deleteArticle(x)
    }

    render() {
      return (
      <div className='drop-down'>
      <Link to =  {`/updatepost/${this.props.id}`} className='link' >
          <p id='first-child'><img className='drop-icon' src="https://img.icons8.com/ios/50/000000/feathercoin.png" alt='edit' />Modifier l'article</p>
      </Link>
          <p onClick={() => this.handleID(this.props.id)}><img className='drop-icon' src="https://img.icons8.com/ios/50/000000/cancel.png" alt='delete' />Supprimer l'article</p>
      </div>
      )
    }
  }
export default connect(null,{deleteArticle})(DropDown)