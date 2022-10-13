
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
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      console.log(data);
    }

    // async function getUsers() {
    //   const usersCollectionRef = collection(db, 'users');
    //   const data = await getDocs(usersCollectionRef);

    //   console.log(data)

    //   return data;
    // }

    getUsers();

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello there</p>
       {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Email: {user.email}</h1>
            <h3>Password: {user.password}</h3>
          </div>
        )
       })}
      </header>
    </div>
  );
}

export default App;
