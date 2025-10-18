import React from 'react';
import './Header.css';

function Header({setPage}) {

  return (
    <div className="Header">
    <ul>
        <h1>Кофейня “Кофе и Книги”</h1>
        <li onClick={()=>setPage('Main')}>Главная</li>
        <li onClick={()=>setPage('Responces')}>Отзывы</li>
        <li onClick={()=>setPage('Contacts')}>Контакты</li>
        <li onClick={()=>setPage('Blog')}>Блог</li>
    
    </ul>
    </div>
  );
}

export default Header;