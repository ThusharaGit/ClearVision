import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Featured from './pages/Featured';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Recomended from './pages/Recomended';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

export default function App() {
  return (
    <div className="app">
    <Nav/>
   <Routes>
    <Route path='/' element= {<Home/>}/>
    <Route path='/shop' element= {<Shop/>}/>
    <Route path='/featured' element= {<Featured/>}/>
    <Route path='/recomended' element= {<Recomended/>}/>
    <Route path='/signup' element= {<SignUp/>}/>
    <Route path='/signin' element= {<SignIn/>}/>
   </Routes>
   <Footer/>
   
    </div>
  );
}