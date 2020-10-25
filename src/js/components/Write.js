import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addArticle} from '../actions'

const mapStateToProps = state => {
  return { 
    dacomment : state.commentReducer.curentPost,}}

class Write extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date:'',
      time:'',
      title: "",
      content: "",
      image: "",
      comments: []
    }}

  handleTiming=()=> {
      this.setState({
        time:this.hours()+':'+this.minutes()+':'+this.seconds(),
        date:this.day()+'/'+this.month()+'/'+this.year()
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
    this.props.addArticle(this.state)
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
            <form className='write-main'>
                <input className='write-title' type='text' placeholder='Ajoutez un titre original' onChange={(event)=>{this.handleTitle(event);this.handleTiming()}}/>
                <textarea className='write-post' type='text' placeholder='Votre article commence içi' onChange={this.handleContent}/>
                <input className='write-image' placeholder="Saisissez l'URL de l'image que vous souhaitiez ajouter à cet article"  onChange={this.handleImage}  />
                <div>
                  <img className='show-image' alt='URL' src={this.state.image} />
                </div>
                <div className='buttons'>
                    <Link to = '/Home' >
                        <button type='submit' className='write-submit' onClick={()=>{
                          // this.handleTiming()
                          this.callFunction()
                        }}>Publier</button>
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

export default connect(mapStateToProps,{addArticle})(Write) ;