import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updatePost} from '../actions/post'
import {getPost} from '../actions/post'
const mapStateToProps = state => {
  return { 
    post : state.addReducer.curentPost
}}



class ModifyPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date:'',
      time:'',
      title: "",
      content: "",
      image: "",
      comments: []
    }
}

componentDidUnmount=()=>{
  this.setState(
   { date:'',
    time:'',
    title: "",
    content: "",
    image: "",
    comments: []}
  )
}
    componentWillMount=()=>{
      this.props.getPost(this.props.match.params.id)
    }
    componentDidMount= () => {
        
this.props.getPost(this.props.match.params.id)

        this.setState({
      date: this.props.post.date,
      time:this.props.post.time,
      title: this.props.post.title,
      content: this.props.post.content,
      image: this.props.post.image,
      comments: this.props.post.comments
        })
    }

  handleTiming=()=> {
      this.setState({
        time:this.hours()+':'+this.minutes()+':'+this.seconds(),
        date:this.year()+'/'+this.month()+'/'+this.day()
      })
    }
  

  hours=()=>{
    let d = new Date().getHours()-1
    return d.toString().padStart(2, '0')}
  
  minutes=()=>{return new Date().getMinutes().toString().padStart(2, '0')}
  seconds=()=>{return new Date().getSeconds().toString().padStart(2, '0')}
  day=()=>{return new Date().getDate().toString().padStart(2, '0')}

  month=()=>{
    let x=  new Date().getMonth()+1
    return x.toString().padStart(2, '0')}

  year=()=>{return new Date().getFullYear()}

  callFunction=()=>{
    this.props.updatePost(this.state,this.props.match.params.id)
  }

  handleTitle=(e)=>
    this.setState({
        title:e.target.value})

  handleContent =(e)=>
    this.setState({
        content:e.target.value})

  handleImage =(e)=>
    this.setState({
        image:e.target.value})



  render() {
    
    return (
        <div className='write-component'>
            <form className='update-main'>
                <label className='labels'>Votre titre</label>
                <input className='write-title' type='text' placeholder={this.props.post.title} onChange={(event)=>{this.handleTitle(event);this.handleTiming()}}/>
                <label className='labels'>Votre contenue</label>
                <textarea className='write-post' type='text' placeholder={this.props.post.content} onChange={this.handleContent}/>
                <label className='labels'>Le lien de votre image</label>
                <input  className='write-image' placeholder={this.props.post.image}  onChange={this.handleImage}  />
                <div className='images'>
                  <label className='labels'>Nouvelle image</label>
                  <img className='show-image' alt='URL' src={this.state.image} />
                  <label className='labels'>L'image initiale</label>
                  <img className='show-image' alt='URL' src={this.props.post.image} />
                </div>
                <div className='update-buttons'>
                    <Link to = '/Home' >
                        <button type='submit' className='write-submit' onClick={()=>{
                          // this.handleTiming()
                          this.callFunction()
                        }}>Modifier</button>
                    </Link>
                    <Link to = '/Home' >
                        <button type='reset' className='write-cancel'>Annuler</button>
                    </Link>
                </div>
            </form>
            
        </div>
    )
  }
}

export default connect(mapStateToProps,{updatePost,getPost})(ModifyPost) ;