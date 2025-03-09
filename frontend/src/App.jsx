import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MyProfile from './pages/MyProfile'


export default function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/Contact'element={<Contact/>}/>
        <Route path='/Doctors'element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login'element={<Login/>}/>
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments'element={<MyAppointments/>}/>
        <Route path='/Appointment/:docId'element={<Appointment/>}/>
      </Routes>  
      <Footer/>
    </div>
  );
}
