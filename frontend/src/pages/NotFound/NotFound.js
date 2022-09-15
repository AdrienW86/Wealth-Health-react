import React from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './notfound.css';

function NotFound() {
  return (
    <>
        <header>  
            <nav className='navbar'>
                <ul>
                    <li className='logo-link'>
                        <img 
                            className='logo'
                            src={Logo} 
                            alt="logo"
                        />
                        <h1 className='title'>HRnet</h1>
                    </li>           
                </ul>   
            </nav>
        </header>
        <section className='container'>
            <h2> Page Introuvable </h2>    
        </section>  
        <section 
            className='section-not-found' 
        >
        <p className='not-found-warning'> La page que vous avez demandé n'existe pas.</p>
        <p className='not-found-message'> Vous pouvez revenir à la page d'accueil en cliquant sur le lien en dessous de ce texte </p>
        
        <Link
            className='not-found-link'
            to = "/"
        >
        Cliquez ici pour retourner à l'accueil
        </Link>
        
        <p className='error-not-found'> Erreur 404 </p>
        </section>      
    </>
  )
}

export default NotFound
