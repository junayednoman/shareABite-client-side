import { Outlet } from 'react-router-dom'
import './App.css'
import MenuBar from './components/navbar/MenuBar'
import MyFooter from './components/footer/MyFooter'

function App() {
  return (
    <>
      <MenuBar></MenuBar>
      <Outlet />
      <MyFooter></MyFooter>
    </>
  )
}

export default App
