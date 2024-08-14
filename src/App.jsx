import './App.css';
import {Navbar} from './components/Navbar';
// import {Home} from './components/Home';
import { Footer } from './components/Footer';
import { RegisterLayout } from './layouts/RegisterLayout';
// import { LoginLayout } from './layouts/LoginLayout';

function App() {



  return <>
  <Navbar/>
  {/* <Home/> */}
  <div className='m-5'>
    <RegisterLayout/>
  </div>
  {/* <div className='m-5'>
    <LoginLayout/>
  </div> */}

  <Footer/>
  </> 
}

export default App;

