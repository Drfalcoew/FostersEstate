import Homepage from './mainpage/home/Homepage';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Schedule from './schedule/Schedule';
import Header from './header/Header';
import Contact from './mainpage/contact/Contact';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Header />
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Contact />
        </div>
    </Router>
  );
}

export default App;
