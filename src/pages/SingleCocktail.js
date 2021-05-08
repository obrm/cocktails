import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const res = await fetch(`${url}${id}`)
        const data = await res.json()
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  }

  const {
    name,
    image,
    info,
    category,
    glass,
    instructions,
    ingredients,
  } = cocktail

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name:</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info:</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass:</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions:</span>
          </p>
          <p>{instructions}</p>
          <p>
            <span className='drink-data'>ingredients :</span>
          </p>
          <p>
            {ingredients.map(
              (item, i) => item && <span key={i}>&#9670; {item}</span>
            )}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
