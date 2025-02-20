import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import Doctors from './Pages/Doctors.jsx'
import DoctorInformation from './Components/DoctorInformation.jsx'
import ServiceInformation from './Components/ServiceInformation.jsx'
import Pathologies from './Pages/Pathologies.jsx'
import ShowInfo from './Components/ShowInfo.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/VIRtaRT">
    <Routes>
      <Route path='' element={<App />}></Route>
      <Route path='/aboutUs' element={<AboutUs />}></Route>
      <Route path='/doctors' element={<Doctors />}></Route>
      <Route path='/pathologies' element={<Pathologies />}></Route>
      <Route path='/doctors/:id' element={<DoctorInformation />} />
      <Route path='/service/:id' element={<ServiceInformation />} />
      <Route path="/service-details/:id" element={<ShowInfo />} />
      <Route path='*' element={<App />}></Route>
    </Routes>
  </BrowserRouter>
)