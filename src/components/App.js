import './App.css';
import { useEffect, useState } from 'react'
import { getFirestore } from "firebase/firestore"
import { collection, getDocs,deleteDoc } from "firebase/firestore";
import firebaseApp from '../firebase'
import Grid from './Grid';
import Form from './Form'

function App() {

  const [contacts, setContacts] = useState([])

  const updateData = () => {
    const db = getFirestore()
    getDocs(collection(db, "contacts"))
      .then((snapshot) => {
        let contacts = []
        snapshot.forEach((doc) => {
          let contact = Object.assign({ id: doc.id }, doc.data())
          contacts.push(contact)
        })
        setContacts(contacts)
      })
      .catch((err) => {
        console.log('erreur', err);
      })
  }

  const deleteData = (docID) => {
    const db = getFirestore()
    deleteDoc(collection(db, "contacts", docID))
    // updateData()
  }

  useEffect(() => {
    updateData()
  }, [])

  return (
    <div>
      <div className="navbar-fixed">
        <nav className="blue lighten-2">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">Contacts</a>
          </div>
        </nav>
      </div>
      <div>
        <Form updateData={updateData}/>
        <Grid item={contacts} deleteData={deleteData} />
      </div>
    </div>
  );
}

export default App;
