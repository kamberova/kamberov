
import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase-config';
import { collection, getDoc } from 'firebase/firestore';



function App() {

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    
    const getUsers = async () => {

      const data = await getDoc(usersCollectionRef);
      console.log(data)


    }

    getUsers();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
       <p>Hello there</p>
       <p>Are we there yet?</p>
      </header>
    </div>
  );
}

export default App;
