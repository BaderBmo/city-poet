import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Subscribe from './components/Subscribe'
import Posts from './components/All-posts'
import Home from './components/Home'
import Article from './components/Article'
import Write from './components/Write'
import {getArticle }from './actions'
import { connect } from 'react-redux'
import login from './components/login';
import ModifyPost from './components/modifyPost'

class App extends Component {
  componentDidMount = () => {
    this.props.getArticle()}
    render() {
    return (
      <BrowserRouter >
        <Header/>
          <Route  exact path = '/' component ={Home} />
          <Route  exact path = '/home' component ={Home} />
          <Route  path = '/Subscribe' component ={Subscribe} />
          <Route  path = '/About' component ={About} />
          <Route  path = '/Posts' component ={Posts} />
          <Route  path = '/Article/:id' component ={Article} />
          <Route  path = '/Write_new_post' component ={Write} />
          <Route  path = '/login' component ={login} />  
          <Route  path = '/updatepost/:id' component ={ModifyPost} />  
        <Footer/>
      </BrowserRouter>
    );
  }
}
export default connect (null , {getArticle})(App);