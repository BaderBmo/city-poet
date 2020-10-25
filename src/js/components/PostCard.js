import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import DropDown from './DropDown'

class PostCard extends Component {
    constructor(props){
        super(props)
this.state ={
    bool :true
}}
like =()=>{
  this.setState( {
      bool:!this.state.bool})
    }

render() {
return (
    
<div className='post-Card'>
    <div className='card-image'><img src={this.props.description.image} alt='cover'/>
    </div>

    <div className='card-data'>

            <div className='container'>
            <div className='card-author'>
                <div className='left'>
                    <div className='user-img'>
                        <img className='tools-icon' src="https://img.icons8.com/ios/50/000000/circled-b.png" alt='user-logo' />
                    </div>
                    <div className='user-and-date'>
                        <div className='username'>
                            Bader Bmo
                            <img id='crown' src="https://img.icons8.com/ios-glyphs/30/000000/fairytale.png" alt='crown' />
                        </div>
                        <div className='date'>{this.props.description.time} {this.props.description.date}</div>
                    </div>
                </div>
                <div className='right'>
                    <img id='dots' src="https://img.icons8.com/ios/50/000000/menu-2-filled.png" alt='3 dots'/>
                    <DropDown id={this.props.description._id} />
                </div>
            </div>

            <Link to =  {`/Article/${this.props.description._id}`} className='link' >
                <div className='card-title'>{this.props.description.title.substr(0, 80)}...
                </div>
                <div className='card-content'>{this.props.description.content.substr(0, 130)}...
                </div>
            </Link>

            </div>
            <div className='card-infos'>
                <div className='views-and-comments'>
                    <div className='views'>0 vues</div>
                    <div className='comment-count'> {this.props.description.comments.length} commentaires</div>
                </div>
                <div className='like'>
                    <i onClick={this.like} style={{color:this.state.bool ? 'grey' :'rgb(252, 6, 59)',fontWeight:this.state.bool? 'lighter':'bold'}} className="far fa-heart"></i>
                </div>
            </div>
    </div>
    
</div>

    )
  }
}

export default PostCard