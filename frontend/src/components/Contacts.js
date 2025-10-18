import React from 'react';
import './Contacts.css';

function Contacts() {

  function Feedback() {
    const userName = document.getElementById('userName').value
    const userPhone = document.getElementById('userPhone').value
    const userEmail = document.getElementById('userEmail').value

    const data = {
      userName: userName,
      userPhone: userPhone,
      userEmail: userEmail
    }

    const api = 'http://localhost:9001//contacts'
    fetch(api,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    )
      .then(result => result.json())
      .then((result) => {console.log(result)})
    
  }

  return (
    <div className="Contacts">
      <h2>Контакты</h2>
      <div className="adress">г. Калуга ул. Автозаводская, 15</div>
      <div className="phone">8-956-123-00-05</div>
      <div className="adress">email: KofeiKnigi@mail.ru</div>
      <input id='userName' type='text' placeholder='Введите имя' />
      <input id='userPhone' type='text' placeholder='Введите номер телефона' />
      <input id='userEmail' type='email' placeholder='Введите адрес эл. почты' />
      <button onClick={Feedback}>Отправить данные</button>
    </div>
  );
}

export default Contacts;