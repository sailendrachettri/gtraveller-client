import './App.css';
import Company from './components/Company';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';


import { Routes, Route } from 'react-router-dom';
import ScrollToAnchor from './components/ScrollToAnchor';

function App() {

  return (
    <>
      <Navbar />
      <ScrollToAnchor /> {/*same page navigation code */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Homepage />} /> {/* if path doesn't exist the redirect to homepage */}
        <Route path="/company" element={<Company />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
