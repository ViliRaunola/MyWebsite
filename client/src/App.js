import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Sidebar/>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
        </Routes>
    </Router>
  )

}

export default App;
 