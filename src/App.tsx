import { Route, Routes } from 'react-router-dom'
import './App.css'
import BaseLayout from './layouts/BaseLayout'
import SignIn from './pages/SignIn.'
import AuthorizedLayout from './layouts/AuthorizedLayout'
import Home from "@/pages/Home"

function App() {

  return (
    <>

      <Routes>

        <Route path='/' element={<BaseLayout />}>
          <Route index element={<SignIn />} />
        </Route>


        <Route path='/me'  element={<AuthorizedLayout />}>
          <Route index element={<Home />} />
        </Route>

      </Routes>

    </>
  )
}

export default App
