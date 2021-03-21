import React from 'react'; 
import './Header.css'; 

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://crm7.com.br/wp-content/uploads/2020/11/Netflix-Logo.png" alt="Netflix Logo"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.imgur.com/WK2idvp.png" alt="Usuário"/>
                </a>
            </div>
        </header>
    ); 
}; 