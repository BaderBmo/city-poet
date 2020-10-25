import React from 'react'
import { Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
        <Link to = '/home' >
            <img className="header-logo" 
                src="https://image.noelshack.com/fichiers/2020/11/5/1584133865-logo-web.png" 
                alt="header-logo"/>
                 {/*https://image.noelshack.com/fichiers/2019/17/5/1556233036-final-logo.png */}
                 {/*https://static.wixstatic.com/media/c73b78_9ebd006bc876462e909db0a61eec477a~mv2.png/v1/fill/w_173,h_159,al_c,q_80,usm_0.66_1.00_0.01/c73b78_9ebd006bc876462e909db0a61eec477a~mv2.webp */}
        </Link>
        </div>
        <div className='menues'>
          <Link to = '/home' className='home-menue' > Acceuil </Link> 
          <Link to = '/Posts' className='posts-menue' >Tous les posts</Link>
          <Link to = '/About' className='about-menue' >À propos</Link>
          <Link to = '/login' className='connection' >Connexion</Link>
          <Link to = '/Subscribe' className='signup' >S'abonner</Link>
            <a href='https://www.facebook.com/bader.bmo'>
                <img className='facebook' 
                     src='https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_20,h_20,al_c,q_80,usm_0.66_1.00_0.01/facebook.webp' 
                     alt='facebook'/>
            </a>
        </div>
    </div>
  )}
export default  Header