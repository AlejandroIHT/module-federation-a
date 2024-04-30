import React from 'react'
import './CardMini.css'

const CardMini = ({name, status, species, gender, image }) => {
    return <section className='card-mini'>
      <div className='card-mini__header'>
        <div>
          <img src={image} alt={name} />
        </div>
        <h2>{name}</h2>
      </div>
      <div className='card-mini__body'>
        <p>
          <strong>Status:</strong> {status}
        </p>
        <p>
          <strong>Species:</strong> {species}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
      </div>
    </section>
}

export default CardMini