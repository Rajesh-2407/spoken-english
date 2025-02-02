
import './App.css'
import FileUploader from './Component/FileUploader'
import { Footer } from './Component/Footer'
import { Nav } from './Component/Nav'
import { Router,Route } from 'react-router-dom'


function App() {

  return (
    <>
        <Nav/>
        <FileUploader/>
        <Footer />
        
    </>
  )
}

export default App
