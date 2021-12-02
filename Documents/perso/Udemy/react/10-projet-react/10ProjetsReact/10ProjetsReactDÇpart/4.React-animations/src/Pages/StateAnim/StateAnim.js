import React, {useState, useRef, useEffect} from 'react'
import './StateAnim.css'
import {useTransition, amiated} from 'react-spring'
import {v4 as uuidv4} from 'uuid'

export default function StateAnim() {
    const [inputData, seInputData] = useState([
        {
            id:uuidv4(),
            txt: "Chopin"
        },
        {
            id:uuidv4(),
            txt: "Mozart"
        },
        {
            id:uuidv4(),
            txt: "Bach"
        },
    ])

    const inputRef = useRef()

    const handleData = e =>{
        e.preventDefault()
    }
    return (
        <form onSubmit={handleData}>
            <label htmlFor="piano">Renseignez vos pianistes favoris.</label>
            <input type="text" name="piano" id="piano"/>
            <ul>
                {inputData.map((item)=>{
                    return(
                        <li ref={inputRef} key={item.id}>{item.txt}</li>
                    )
                })}
            </ul>
        </form>
    )
}
