import React from 'react'
import { Link} from 'react-router-dom'

function Toolbar() {
  return (
    <div className='tool-bar'>
        <div className='to-all-posts'>
            <h6>Ajoutez un nouveau article</h6>
        </div>
        <div className='tools'>
            <Link to = '/Write_new_post' >  
                <img className='tools-icon' src="https://img.icons8.com/pastel-glyph/64/000000/plus.png" alt='user-logo' />
            </Link>
        </div>
    </div>
  )
}

export default Toolbar