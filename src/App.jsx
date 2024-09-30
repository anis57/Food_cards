import React from 'react'
import Header from './components/Header'
import './App.css'
import Product from './pages/product/Product'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Product />
    </div>
  )
}

export default App