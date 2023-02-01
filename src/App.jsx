import React from 'react'
import {Hero} from './components'
import { heroapi } from './Data/data'

const App = () => {
  return (
    <div>
      <main><Hero heroapi={heroapi}/></main>
      
    </div>
  )
}

export default App

