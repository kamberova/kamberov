
import React, { useEffect, useState } from 'react';
import './App.css';
import db from './firebase-config.js';
import { collection, getDocs } from 'firebase/firestore/lite';



function App() {

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((user) => ({ ...user.data(), id: user.id })))
     
    };


    getUsers();

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello there</p>
        {users.map((user) => {
          return (
            <ul>
              <li key={user.id}>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
              </li>
            </ul>
          )
        })}
      </header>
    </div>
  );
}

export default App;
