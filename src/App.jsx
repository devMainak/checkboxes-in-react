import { useState } from 'react'
import './App.css'

const FavMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState([])

  const handleCheckbox = (event) => {
    const {value, checked} = event.target

    if (checked){
      setSelectedMovies((prevValues) => [...prevValues, value])
    } else {
      setSelectedMovies((prevValues) => prevValues.filter(movie => movie != value))
    }
  }
  
  return (
    <div>
      <div>Choose your favorite movies:</div>
      <input type='checkbox' value='Action' onChange={handleCheckbox}/> Action <br/>
      <input type='checkbox' value='Comedy' onChange={handleCheckbox}/> Comedy <br/>
      <input type='checkbox' value='Drama' onChange={handleCheckbox}/> Action <br/>
      {selectedMovies.length > 0 && <p>Selected movies: {selectedMovies.join(", ")}</p>}
    </div>
  )
}

const FavFruits = () => {
  const [selectedFruits, setSelectedFruits] = useState([])

  const handleCheckbox = (event) => {
    const {value, checked} = event.target

    if (checked)
    {
      setSelectedFruits((prevValue) => [...prevValue, value])
    } else {
      setSelectedFruits((prevValue) => prevValue.filter(fruit => fruit != value))
    }
  }
  
  return (
    <div>
      <div>Choose your favorite fruits:</div>
        <input type='checkbox' value='Apple' onChange={handleCheckbox}/> Apple <br/>
        <input type='checkbox' value='Banana' onChange={handleCheckbox}/> Banana <br/>
        <input type='checkbox' value='Orange' onChange={handleCheckbox}/> Orange <br/>
      {selectedFruits.length > 0 && <p>Selected fruits: {selectedFruits.join(", ")}</p>}
    </div>
  )
}

const FavDrinks = () => {
  const [selectedDrinks, setSelectedDrinks] = useState([])

  const handleCheckbox = (event) => {
    const {value, checked} = event.target

    if (checked)
    {
      setSelectedDrinks((prevValue) => [...prevValue, value])
    } else {
      setSelectedDrinks((prevValue) => prevValue.filter(drink => drink != value))
    }
  }

  return (
    <div>
      <div>Choose your favorite drinks:</div>
        <input type='checkbox' value='Coffee' onChange={handleCheckbox}/> Coffee <br/>
        <input type='checkbox' value='Tea' onChange={handleCheckbox}/> Tea <br/>
        <input type='checkbox' value='Juice' onChange={handleCheckbox}/> Juice <br/>
      {selectedDrinks.length > 0 && <p>Selected drinks: {selectedDrinks.join(", ")}</p>}
    </div>
  )
}

const FavDeserts = () => {
  const [selectedDesserts, setSelectedDesserts] = useState([])

  const handleCheckbox = (event) => {
    const {value, checked} = event.target

    if (checked)
    {
      setSelectedDesserts((prevValue) => [...prevValue, value])
    } else {
      setSelectedDesserts((prevValue) => prevValue.filter(dessert => dessert != value))
    }
  }

  return (
    <div>
      <div>Choose your favorite desserts:</div>
        <input type='checkbox' value='Cake' onChange={handleCheckbox}/> Cake <br/>
        <input type='checkbox' value='Ice Cream' onChange={handleCheckbox}/> Ice Cream <br/>
        <input type='checkbox' value='Pie' onChange={handleCheckbox}/> Pie <br/>
      {selectedDesserts.length > 0 && <p>Selected desserts: {selectedDesserts.join(", ")}</p>}
    </div>
  )
}

const FavBookGenres = () => {
  const [selectedGeners, setSelectedGeners] = useState([])

  const handleCheckbox = (event) => {
    const {value, checked} = event.target

    if (checked)
    {
      setSelectedGeners((prevValue) => [...prevValue, value])
    } else {
      setSelectedGeners((prevValue) => prevValue.filter(genre => genre != value))
    }
  }

  return (
    <div>
      <div>Choose your favorite desserts:</div>
        <input type='checkbox' value='Fiction' onChange={handleCheckbox}/> Fiction <br/>
        <input type='checkbox' value='Mystery' onChange={handleCheckbox}/> Mystery <br/>
        <input type='checkbox' value='Biography' onChange={handleCheckbox}/> Biography <br/>
      {selectedGeners.length > 0 && <p>Selected book geners: {selectedGeners.join(", ")}</p>}
    </div>
  )
}

export default function App() {
  return (
    <main>
     <FavMovies/>
      <br/>
      <FavFruits/>
      <br/>
      <FavDrinks/>
      <br/>
      <FavDeserts/>
      <br/>
      <FavBookGenres/>
    </main>
  )
}
