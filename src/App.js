import { useState, useEffect } from 'react';
import FirstPage from './components/loginAndCreateAccount/FirstPage';
import Header from './components/loginAndCreateAccount/Header';
import Transaction from './components/loginAndCreateAccount/Hell';
import classes from './App.module.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className={classes.app}>
    { !isLoggedIn && <section>
       <FirstPage />
      </section> }
    { isLoggedIn && <Hell /> }
    </div>
  );
};

export default App;
