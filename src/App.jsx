
import './App.css'
import FileUploader from './Component/FileUploader'
import { Footer } from './Component/Footer'
import Header from './Component/Header'
import { Nav } from './Component/Nav'

import Otp from './Component/Otp'


function App() {

  return (
    <>
        <Nav/>
        <Header/>
        <FileUploader/>
        <Otp/>
        <Footer />
        
    </>
  )
}

export default App
