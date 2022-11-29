import GlobalStyles from './components/styled/Global';
import Login from './pages/Login';
import Registration from './pages/Registration';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import VerifiedEmail from './pages/VerifiedEmail';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/verification/success" element={<VerifiedEmail/>}/>
      </Routes>
    </div>
  )
}

export default App
