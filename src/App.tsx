import { Route, Routes } from 'react-router-dom'
import './App.css'
import BaseLayout from './layouts/BaseLayout'
import SignIn from './pages/SignIn'
import AuthorizedLayout from './layouts/AuthorizedLayout'
import Home from "@/pages/Home"
import Playlist from './pages/Playlist'

function App() {

  return (
    <>

      <Routes>

        <Route path="/login" element={<SignIn />} />
        <Route path='base' element={<BaseLayout />}/>


        <Route path='/' element={<AuthorizedLayout />}>
          <Route index element={<Home />} />
          <Route path='tracks' element={<Playlist />} />
        </Route>

      </Routes>

    </>
  )
}

export default App
