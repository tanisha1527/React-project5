import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Cover from './components/Cover/Cover'
import Programs from './components/Programs/Programs'

const App = () => {
  return (
    <div>
      <Navbar />
      <Cover />
      <div className="container">
        <Programs />
      </div>
    </div>
  )
}

export default App
