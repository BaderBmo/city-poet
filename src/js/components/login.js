import React, { Component } from 'react'

const login = () => {
  return (
    <div className='subscribe-page'>
      <Form/>
    </div>
  )
}


export class Form extends Component {
  /* passwordLength=(e)=> {
    if (e.target.value.length < 8) {
        return alert('Password must have at least 8 characters');}
    }*/
  
  render() {
      return ( 
        <form className='subscribe-form'>

            <div className='e-mail'>
                <img src="https://img.icons8.com/ios/50/000000/new-post.png" className='icon-mail' alt='icon' />
                <input className='input' type='e-mail' placeholder='Adresse e-mail' required='true' />
            </div>
            <div className='password'>
                <img src="https://img.icons8.com/ios/50/000000/lock-2.png" className='icon' alt='icon' />
                <input className='input' type='password' placeholder='Mot de passe' required='true'  />
            </div>

            <div>
                <button type='submit' className='subscribe-continue'>Connexion</button>
                <button type='reset' className='subscribe-cancel'>Annuler</button>
            </div>
        </form>
      )
  }
}

export default login