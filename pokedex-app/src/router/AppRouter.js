import React from 'react'
import { Routes } from 'first'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { NavBar} from '../components/NavBar'

export const AppRouter = () => {
  return (
    <Routes>

<Route path = '' elements = {<Home/>}/>



    </Routes>
  )
}
