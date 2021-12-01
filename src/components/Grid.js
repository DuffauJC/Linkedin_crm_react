import React from 'react'
import Single from './Single'


export default function Grid(props) {
    console.log(props);
    
    const deleteData = (docID) => {
        props.deleteData(docID)
    }

    return (
        <div>
            <div className="row">
                <ul>
                    {props.item.map((item, index) => <Single key={index} item={item} deleteData={deleteData} />)}
                </ul>
            </div>
        </div>

    )
}
