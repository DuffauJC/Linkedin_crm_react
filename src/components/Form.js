import React from 'react'
import { useState} from 'react';
import { getFirestore } from "firebase/firestore"
import { collection, addDoc} from "firebase/firestore";

export default function Form(props) {
    
    const [newContact, setNewContact] = useState({
        prenom: "",
        nom: "",
        email: "",
        compagnie: "",
        notes: ""
    })

    const addContact = (e) => {
        e.preventDefault()

        const db = getFirestore()
        addDoc(collection(db, "contacts"), newContact)
        document.getElementById('addContact').reset()
        props.updateData()
    }
 

    return (
        <div className="row">
            <form className="col s12" id="addContact" onSubmit={addContact}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="prenom" type="text" defaultValue={newContact.prenom} className="validate" onChange={
                            e => setNewContact({ ...newContact, prenom: e.target.value })} />
                        <label htmlFor="prenom">Prénom</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="nom" type="text" defaultValue={newContact.nom} className="validate" onChange={
                            e => setNewContact({ ...newContact, nom: e.target.value })} />
                        <label htmlFor="nom">Nom de famille</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="email" type="text" defaultValue={newContact.email} className="validate" onChange={
                            e => setNewContact({ ...newContact, email: e.target.value })} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="compagnie" type="text" defaultValue={newContact.compagnie} className="validate" onChange={
                            e => setNewContact({ ...newContact, compagnie: e.target.value })} />
                        <label htmlFor="compagnie">Compagnie</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s8">
                        <input id="notes" type="text" defaultValue={newContact.notes} className="validate" onChange={
                            e => setNewContact({ ...newContact, notes: e.target.value })} />
                        <label htmlFor="notes">Notes</label>
                    </div>
                    <div className="input-field col s4">
                        <button className="btn waves-effect waves-light" type="submit">Ajouter</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
