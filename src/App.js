import { useState, useEffect } from 'react';
import FirstPage from './components/loginAndCreateAccount/FirstPage';
import Header from './components/loginAndCreateAccount/Header';
import Transaction from './components/loginAndCreateAccount/Transaction';
import classes from './App.module.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className={classes.app}>
    { !isLoggedIn && <section>
       <FirstPage />
      </section> }
    { isLoggedIn && <Header /> 
     }
    </div>
  );
};

export default App;
