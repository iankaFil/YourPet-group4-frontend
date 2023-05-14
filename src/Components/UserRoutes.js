import { Routes, Route } from 'react-router-dom'
import React from 'react'
import HomePage from 'Pages/HomePage/HomePage'
import NewsPage from 'Pages/NewsPage/NewsPage'
import NoticesPage from 'Pages/NoticesPage/NoticesPage'
import OurFriendsPage from 'Pages/OurFriendsPage/OurFriendsPage'
import RegisterPage from 'Pages/RegisterPage/RegisterPage'
import LoginPage from 'Pages/LoginPage/LoginPage'
import PublicRoute from './PublicRoute/PublicRoute'
import UserPage from 'Pages/UserPage/UserPage'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import AddPetPage from 'Pages/AddPetPage/AddPetPage'
import { NotFound } from './NotFound/NotFound'

const UserRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/notices/:categoryName' element={<NoticesPage />} >
            <Route path="sell" element={<NoticesPage />} />
            <Route path="lost-found" element={<NoticesPage />} />
            <Route path="for-free" element={<NoticesPage />} />
          </Route>
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/user" element={<UserPage />} />
            <Route path="/add-pet" element={<AddPetPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default UserRoutes