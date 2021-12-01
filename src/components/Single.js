import React from 'react'

export default function Single(props) {
    // console.log(props);

 
    return (

        <li className="col s12 l6">
            <div className="card">
                <div className="card-image">
                    <img src="JCPotter.jpg" className="img" alt={props.item.title} />
                    <span className="card-title">{props.item.prenom} {props.item.nom} - {props.item.compagnie}</span>
                </div>
                <div className="card-content">
                    <span className="card-title">{props.item.email}</span>
                    <div className="row">
                        <div className="col 16 center">
                            <blockquote>
                                <h5>{props.item.notes}</h5>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="card-action">
                    <button onClick={props.deleteData(props.item.id)} className="waves-effect waves-light btn red darken-4">Supprimer</button>
                </div>
            </div>
        </li>
    )
}
