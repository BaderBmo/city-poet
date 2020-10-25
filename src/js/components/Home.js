import React, { Component } from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import HomePosts from './HomePosts'
import {connect} from 'react-redux'
import {resetCurrentPost} from '../actions/index'


export class Home extends Component {
    componentDidMount=()=> {
         this.props.resetCurrentPost()
    }
  render() {
    return (
      <div>
        <Recent/>
        <Paralax/> 
        <HomePosts/>
        <Contact/>
        <Parallax2/>
      </div>
    )
  }
}



const Recent = () =>{
    return(
        <div className='recent-3'>
            <Card most='Most viewed'/>
            <Card most='Most liked'/>
            <Card most='Most commented'/>
        </div>)}


class Card extends Component {
constructor(props){
super(props)
this.state ={
    bool :true,
    image:'url(https://media.breitbart.com/media/2015/01/French-Security_reuters.jpg)'}}

like =()=>{
  this.setState( {
      bool:!this.state.bool})}

  render() {
    return (
        <div className='card' style={{backgroundImage:this.state.image,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',boxShadow: 'inset 0 0 5em 1em #000'}} >
            <div className='post-date'>il y a 6 jours . 1 Min</div>
            <div className='post-content'>
                <div className='home-card-title'>Entretien exclusif avec 
                    le Major général des...
                </div>
                <div className='post-infos'>
                    <div className='post-views'><i class="far fa-eye"></i></div>
                    <div className='post-comment'>{this.props.most}</div>
                    <div className='post-like'>
                        <i onClick={this.like} style={{color:this.state.bool ? 'white' :'rgb(252, 6, 59)',fontWeight:this.state.bool? 'lighter':'bold'}} className="far fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>)}}


const Paralax = () => {
  return (
    <div className='parallax'>
    <ParallaxBanner className="your-class" layers={[{image: 'https://i0.wp.com/www.tunisieauto.tn/wp-content/uploads/2018/12/Avenue-Habib-Bourguiba-Tunis.jpg',amount: 0.5,},]} style={{height: '450px',}}>
    </ParallaxBanner>
        <div className='parallax-content'>
            <h1>BIENVENUE SUR CITY POET</h1>
            <h6>Articles récents</h6>
        </div>
    </div>)}
    
const Contact = () =>{
    return(
        <div className='contact'>
            <h2>CONTACT</h2>
            <p>Tunis, Tunisie</p>
            <p>bader.bmo@gmail.com</p>
            <p>+216 24 55 14 55</p>
        </div>
    )
}

const Parallax2 = () =>{
    return(
        <div className='parallax2'>
           <img src='https://images.wallpaperscraft.com/image/pen_pages_vintage_130832_1280x720.jpg' alt='pen' />
        </div>
    )
}
export default connect(null,{resetCurrentPost})(Home) ;