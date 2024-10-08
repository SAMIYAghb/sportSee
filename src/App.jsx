import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BaseLayout from './components/Layout/BaseLayout';
import Home from './pages/Home/Home';
import Profil from './pages/Profil/Profil';
import Error from './pages/Error/Error';
import Setting from './pages/Setting/Setting';
import Community from './pages/Community/Community';
import { MockDataProvider } from './context/MockDataContext';
import Login from './pages/Login/Login';



function App() {


  return (
    <MockDataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route path="/user/:id" element={<Home />} />
            <Route path="profil" element={<Profil />} />                
            <Route path="login" element={<Login />} />                
            <Route path="setting" element={<Setting />} />
            <Route path="community" element={<Community />} />
            <Route path="*" element={<Error />} />
            <Route path="/error" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </MockDataProvider>

  )
}

export default App
