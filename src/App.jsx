
import { Outlet } from 'react-router-dom'
import './App.css'
import MyNavbar from './components/MyNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
    <MyNavbar/>
      <div className="min-h-screen">
        <Outlet/>
      </div>
    </>
  )
}

export default App
