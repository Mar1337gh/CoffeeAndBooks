import React, {useState} from 'react';
import './App.css';
import Main  from './components/Main.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Responces from './components/Responces.js';
import Blog from './components/Blog.js';
import Contacts from './components/Contacts.js';

function App() {
  const [page, setPage] = useState('Main')

  const pages = {
    Main: <Main setPage= {setPage}/>,
    Header: <Header />,
    Blog: <Blog />,
    Contacts: <Contacts />,
    Responces: <Responces />,
    Footer: <Footer />,
  }
  return (
    <div className="App">
     <Header setPage= {setPage}/>
      {pages[page]}
     <Footer />
    </div>
  );
}

export default App;
