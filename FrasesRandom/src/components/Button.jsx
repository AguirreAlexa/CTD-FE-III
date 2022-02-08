import React, {useState} from 'react'
import chuck from "../images/chuck.png"
import "../App.css"

const Button = ({frases, onClick, fraseChuck}) => { 
    const [textoBoton, setTextoBoton] = useState(frases[0])

    const handleClick = () => {
        setTextoBoton(onClick(frases,textoBoton))
    }

    return (
        <div className="app__nuevaFrase">
        <div>
        <button  id="chuck_button" onClick={() => handleClick()} >{textoBoton}</button>
        <p>{fraseChuck}</p>
        </div>
        <img id="chuck_norris" src={chuck} alt="chuck" />
      </div>
    )
}

export default Button