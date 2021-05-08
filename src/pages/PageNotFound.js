import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1 className='large-text'>404</h1>
        <h1>oops! this page does not exist</h1>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
      </div>
    </section>
  )
}

export default PageNotFound
