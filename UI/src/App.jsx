import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import ImageName from './Components/ImageName'
import Search from './Components/Search'
import MainLayout from './Layout/MainLayout'
import HomePage from './Pages/HomePage'
import FormPage from './Pages/FormPage'
import CertificatePage from './Pages/CertificatePage'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/certificate/:id' element={<CertificatePage />} />
          <Route path='/Certi' element={<FormPage />} />

        </Route>
    ))
  return (
    <>
    <RouterProvider router={router} />
    {/* <MainLayout/>
    <br/>
    <ImageName/>
    <br/><br/>
    <Search/>
    */}
</>
  )
}

export default App