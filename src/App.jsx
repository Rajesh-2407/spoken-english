
import './App.css'
<<<<<<< HEAD
<<<<<<< HEAD
import { Footer } from './Component/Footer'
import Header from './Component/Header'
=======
import Content from './Component/Content'
import { Footer } from './Component/Footer'
// import { Header } from './Component/Header'
>>>>>>> 98743672a4fb1f1f73feb53408577e35381bbd56
import { Nav } from './Component/Nav'

=======
import FileUploader from './Component/FileUploader'
import { Footer } from './Component/Footer'
import Header from './Component/Header'
import { Nav } from './Component/Nav'

import Otp from './Component/Otp'


>>>>>>> 3b270f39bf30f92cd9a282d5b8b6f688cbdb4704
function App() {

  return (
    <>
        <Nav/>
<<<<<<< HEAD
<<<<<<< HEAD
        <Header/>
=======
        {/* <Header/> */}
        <Content/>
>>>>>>> 98743672a4fb1f1f73feb53408577e35381bbd56
        <Footer/>
=======
        <Header/>
        <FileUploader/>
        <Otp/>
        <Footer />
>>>>>>> 3b270f39bf30f92cd9a282d5b8b6f688cbdb4704
        
    </>
  )
}

export default App
