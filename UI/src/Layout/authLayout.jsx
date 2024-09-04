import React from 'react'
import {Outlet} from 'react-router-dom'

const authLayout = () => {
  return (
    <>
    <Outlet/>
    </>
  )
}

export default authLayout